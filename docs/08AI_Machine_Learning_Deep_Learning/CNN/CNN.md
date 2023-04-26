---
title: CNN
article: true
---

下面是一个简单的CNN的结构图，让我们来写代码实现它吧。

  ![[photo/1.png]]

上面的结构可以简化为:  
Convolutional layer->ReLU->Max Pooling->Flatten->Fully Connected layer ->ReLU-> Fully Connected

完整代码：[https://github.com/bigfishtwo/NeuralNetwork-python](https://links.jianshu.com/go?to=https%3A%2F%2Fgithub.com%2Fbigfishtwo%2FNeuralNetwork-python)  
先从简单的开始。

# 1. ReLU

ReLU是一个非线性的激活函数，前向传播的公式![f(x) = max(0,x)](https://math.jianshu.com/math?formula=f(x)%20%3D%20max(0%2Cx))
反向传播，求导之后得到  ![f'(x)= \begin{cases} 1 \quad x > 0 \\ 0\quad otherwise \end{cases}](https://math.jianshu.com/math?formula=f'(x)%3D%20%5Cbegin%7Bcases%7D%201%20%5Cquad%20x%20%3E%200%20%5C%5C%200%5Cquad%20otherwise%20%5Cend%7Bcases%7D)  
根据公式就能写出来

```python
# ReLU
class ReLU:
    def __init__(self):
        self.input_tensor = []

    def forward(self, input):
        self.input_tensor = input
        input[np.where(input <= 0)] = 0
        return input

    def backward(self, error):
        error[np.where(self.input_tensor <= 0)] = 0
        return error
```

# 2. Softmax以及cross entropy loss

softmax 函数是最后一层输出的激活函数![\hat{y_{k}} = \frac{exp(x_{k})}{\sum_{j=1}^{K}exp(x_{j})}](https://math.jianshu.com/math?formula=%5Chat%7By_%7Bk%7D%7D%20%3D%20%5Cfrac%7Bexp(x_%7Bk%7D)%7D%7B%5Csum_%7Bj%3D1%7D%5E%7BK%7Dexp(x_%7Bj%7D)%7D)  
softmax的结果取-log得到cross entropy loss![loss = \sum_{b} -log(\hat{y_{k}}) \quad where y_{k} = 1](https://math.jianshu.com/math?formula=loss%20%3D%20%5Csum_%7Bb%7D%20-log(%5Chat%7By_%7Bk%7D%7D)%20%5Cquad%20where%20y_%7Bk%7D%20%3D%201)  
反向求梯度的时候，因为这是反向的开头，所有直接算预测结果与正确标签的差  
![e(k) = \begin{cases} y_{k}-1 \quad y_{k}=1 \\ y_{k}(-0)\quad otherwise \end{cases}](https://math.jianshu.com/math?formula=e(k)%20%3D%20%5Cbegin%7Bcases%7D%20y_%7Bk%7D-1%20%5Cquad%20y_%7Bk%7D%3D1%20%5C%5C%20y_%7Bk%7D(-0)%5Cquad%20otherwise%20%5Cend%7Bcases%7D)

```python
class Softmax:
    def __init__(self):
        self.input_tensor = []
        self.label_tensor = []

    def predict(self, input):
        input_tensor = input - np.tile(np.max(input, axis=1), (input.shape[1], 1)).T
        sum = np.sum(np.exp(input_tensor), axis=1)
        label = np.exp(input_tensor) / np.tile(sum, (input_tensor.shape[1], 1)).T
        return label

    def forward(self, labels,preds):
        self.label_tensor = preds
        loss = np.sum(-np.log(self.label_tensor[np.where(labels == 1)]))
        return loss

    def backward(self, label):
        self.label_tensor[np.where(label == 1)] -= 1
        return self.label_tensor

```

# 3. 其他Loss

这里暂时实现了比较简单的MSE.  ![E = \frac{1}{n} \sum_{i=1}^n (\hat{y}_i - y_i) ^2](https://math.jianshu.com/math?formula=E%20%3D%20%5Cfrac%7B1%7D%7Bn%7D%20%5Csum_%7Bi%3D1%7D%5En%20(%5Chat%7By%7D_i%20-%20y_i)%20%5E2)  
在反向传播时，对损失求梯度，根据公式求导：  ![\frac{\partial E}{\partial y}=\frac{2}{n}(\hat{y}_i-y_i)](https://math.jianshu.com/math?formula=%5Cfrac%7B%5Cpartial%20E%7D%7B%5Cpartial%20y%7D%3D%5Cfrac%7B2%7D%7Bn%7D(%5Chat%7By%7D_i-y_i))

```python
class MSE:
    def __init__(self):
        self.pred = None
        self.labels = None

    # loss function and its derivative
    def forward(self, labels, pred):
        self.pred = pred
        self.labels = labels
        return np.mean(np.power(labels - pred, 2))

    def backward(self, output_tensor):
        # to one-hot label
        label = np.zeros_like(output_tensor)
        for i in range(label.shape[0]):
            label[i][self.labels[i]] = 1

        error_tensor = 2 * (output_tensor - label) / output_tensor.shape[0]
        return error_tensor
```

# 4. Convolution Layer

卷积层就是计算输入图像上的一个小范围内的数据和卷积核的卷积，实现很简单，调个函数卷积就行了，[scipy的卷积函数](https://links.jianshu.com/go?to=https%3A%2F%2Fdocs.scipy.org%2Fdoc%2Fscipy%2Freference%2Fgenerated%2Fscipy.signal.correlate.html)。  
这里是根据pytorch的[Conv2d](https://links.jianshu.com/go?to=https%3A%2F%2Fpytorch.org%2Fdocs%2Fstable%2Fgenerated%2Ftorch.nn.Conv2d.html%3Fhighlight%3Dconv%23torch.nn.Conv2d)的公式，假设输入的尺寸为![(B, C,H,W)](https://math.jianshu.com/math?formula=(B%2C%20C%2CH%2CW))，输出尺寸![(B,K,H^*,W^*)](https://math.jianshu.com/math?formula=(B%2CK%2CH%5E*%2CW%5E*))，输出与输入的关系：  
![out(b_i,k_j) = bias(k_j) + \sum_{c=0}^{C-1} weight(k_j, c) \star input(b_i, c)](https://math.jianshu.com/math?formula=out(b_i%2Ck_j)%20%3D%20bias(k_j)%20%2B%20%5Csum_%7Bc%3D0%7D%5E%7BC-1%7D%20weight(k_j%2C%20c)%20%5Cstar%20input(b_i%2C%20c))  
其中![\star](https://math.jianshu.com/math?formula=%5Cstar)表示2D的互相关操作，B是batch size， C是图片的通道数，H,W是图片的高和宽，K为卷积核的数量。  
为了保证卷积的输出与输入一致，需要在输入图像周围加一圈zero padding，也就是说要在输入周围加上一圈零，以保持卷积后的大小不变，如果需要padding的0是奇数个，就在左边多放一位。这个操作其实可以通过设置correlate函数的mode=‘same’来实现，不过我是先写的padding，所有就把代码留着了，对于加了padding的输入，correlate的mode=‘valid’。  
stride相当于对于卷积得到的输出以一定的间隔采样，可以通过以一定间隔读index来实现。  
需要注意的是，stride之后的输出在反向计算梯度的过程中，是要还原回去的，也就是需要记下stride采样的点的坐标，在反向的时候按照这个位置把梯度放回去。  
经过padding为p，卷积核大小为k，stride大小为s，输入尺寸为(x,x)的特征图经过卷积得到的输出大小应该为 ![x^* = (x-k+2p)/s+1](https://math.jianshu.com/math?formula=x%5E*%20%3D%20(x-k%2B2p)%2Fs%2B1)

```python
class Conv:
    def __init__(self, stride_shape, conv_shape, num_kernels):
        # b = batch, c = channel, y, x = spatial dimension
        # n = number of kernel, f = kernel shape
        self.stride_shape = stride_shape
        self.convolution_shape = conv_shape
        self.num_kernels = num_kernels

        # initializte weights and bias
        self.weights = np.random.random_sample(np.concatenate(([self.num_kernels], self.convolution_shape)))
        self.bias = np.random.rand(self.num_kernels)

        self.optimizer_weights = None
        self.optimizer_bias = None
        self.input_shape = []
        self.input_pad = []
        self.gradient_weight = np.zeros(np.concatenate(([self.num_kernels], self.convolution_shape)))
        self.gradient_bias = []

    def forward(self, input_tensor):
        # returns the input tensor for the next layer
        self.input_shape = input_tensor.shape  # (b, c, y, x)
        # zero-padding, p = (f-1)/2
        padding_size = [int((self.convolution_shape[1] - 1) // 2), int((self.convolution_shape[2] - 1) // 2)]
        # padding residual
        padding_r = [int((self.convolution_shape[1] - 1) % 2), int((self.convolution_shape[2] - 1) % 2)]

        self.input_pad = np.pad(input_tensor, ((0, 0), (0, 0), (padding_size[0] + padding_r[0], padding_size[0]),
                                (padding_size[1] + padding_r[1], padding_size[1])), 'constant',
                                constant_values=0)  #(b, c, y+f-1, x+f-1)
        output_tensor = np.zeros(np.concatenate(([input_tensor.shape[0], self.num_kernels], input_tensor.shape[2:])))  #(b, n, y, x)

        # convolution
        for b in range(input_tensor.shape[0]):
            for n in range(self.num_kernels):
              
                # for each batch, covolve input with every kernel, (c, y+f-1, x+f-1) * (f, f, f) = (1, y, x)
                output_tensor[b, n, :, :] = signal.correlate2d(self.input_pad[b, c, :, :], self.weights[n, c, :, :],
                                                                   mode='valid')[1,:,:] # shape
                # add bias on spatial dimension
                bias = self.bias[n] * np.ones_like(output_tensor[b, n, :, :])
                output_tensor[b, n, :, :] += bias

        # stride
        output_tensor = output_tensor[:, :, 0:input_tensor.shape[2]:self.stride_shape[0],
                        0:input_tensor.shape[3]:self.stride_shape[1]]

        return output_tensor
```

反向传播需要计算三个梯度, ![Y=W^TX+b, E_n](https://math.jianshu.com/math?formula=Y%3DW%5ETX%2Bb%2C%20E_n)是反向输入卷积层的error tensor :

-   ![E_{n-1}=\frac{\partial E}{\partial X} = \frac{\partial E}{\partial Y} * \frac{\partial Y}{\partial X} = W^TE_n](https://math.jianshu.com/math?formula=E_%7Bn-1%7D%3D%5Cfrac%7B%5Cpartial%20E%7D%7B%5Cpartial%20X%7D%20%3D%20%5Cfrac%7B%5Cpartial%20E%7D%7B%5Cpartial%20Y%7D%20*%20%5Cfrac%7B%5Cpartial%20Y%7D%7B%5Cpartial%20X%7D%20%3D%20W%5ETE_n)，将梯度向上一层传递
-   ![\frac{\partial E}{\partial W} = E_nX^T](https://math.jianshu.com/math?formula=%5Cfrac%7B%5Cpartial%20E%7D%7B%5Cpartial%20W%7D%20%3D%20E_nX%5ET)，用来更新weight
-   ![\frac{\partial E}{\partial b}=sum(E_n)](https://math.jianshu.com/math?formula=%5Cfrac%7B%5Cpartial%20E%7D%7B%5Cpartial%20b%7D%3Dsum(E_n))，用来更新bias

##### 对上一层的梯度

在反向传播的时候，卷积层反向函数得到的输入error_tensor的尺寸为![(B,K,H,W)](https://math.jianshu.com/math?formula=(B%2CK%2CH%2CW)), 首先要做的是把正向的时候采样过的值按照原位置放回去.  
计算梯度向上传递的也是一个卷积运算，不过卷积核需要翻转过来，也就是说在前向的时候，卷积是从上到下从左到右进行的，反向的时候就需要将权值矩阵从右到左从下到上。

更加简单的操作是，在前向的时候使用cross correlation，在反向使用convolution，矩阵翻转的操作就包含在了其中。

**互相关（cross correlation）**操作：  
![(f \star g)(x) = \int_{-\infty}^{\infty} f(\tau)g(x+\tau) d\tau](https://math.jianshu.com/math?formula=(f%20%5Cstar%20g)(x)%20%3D%20%5Cint_%7B-%5Cinfty%7D%5E%7B%5Cinfty%7D%20f(%5Ctau)g(x%2B%5Ctau)%20d%5Ctau)  
**卷积（convolution）**操作：  
![(f * g)(x) = \int_{-\infty}^{\infty} f(\tau)g(x-\tau) d\tau](https://math.jianshu.com/math?formula=(f%20*%20g)(x)%20%3D%20%5Cint_%7B-%5Cinfty%7D%5E%7B%5Cinfty%7D%20f(%5Ctau)g(x-%5Ctau)%20d%5Ctau)  
可以看到中间那个符号的差异，就相当于是左右翻转了一次矩阵，写代码的时候还需要将卷积核矩阵上下翻转一次。

反向函数的输出尺寸应该与前向时的输入尺寸相同，也就是![(B,C,H,W)](https://math.jianshu.com/math?formula=(B%2CC%2CH%2CW))， 输出等于输入与卷积核的卷积，所以反向传播时的卷积核的尺寸应该是![(C,K,H,W)](https://math.jianshu.com/math?formula=(C%2CK%2CH%2CW))

如何得到这样的卷积核呢？可以仔细想一下前向的时候，卷积具体实现的过程。假设现在有一个（1，3，64，64）的输入特征图，与4个大小为3的卷积核做卷积（尺寸（4，3，3，3），stride=1），得到了一个（1，4，64，64）的输出特征。想象一个4层的立方体，每一层都是一个卷积核与输入卷积的结果。  
在反向的时候，反向的error tensor和前向的输出特征图大小一样，都是（1，4，64，64）. 这个4层立方体的第一层，是前向时第一个卷积核来的，第二层是第二个卷积核来的，依此类推。所以我们将每一个卷积核的第一层取下来叠在一起，形成一个新的卷积核（1，4，3，3），与error tensor做卷积，得到了新的error tensor的第一层（1，1，64，64）.接下来将每一个卷积核的第二层和第三层卷积也拆下来，分别叠在一起形成两个新的卷积核，得到了第二第三层，于是我们就得到了与前向时输入特征大小相同的error矩阵（1，3，64，64）.接下来就是把这个error 矩阵继续向前传播求导。

##### 对weight的梯度
![\frac{\partial E}{\partial W} = E_nX^T](https://math.jianshu.com/math?formula=%5Cfrac%7B%5Cpartial%20E%7D%7B%5Cpartial%20W%7D%20%3D%20E_nX%5ET)，这里需要用correlation算（不知道为啥）。得到的尺寸是![(K,C,kernel_size,kernel_size)](https://math.jianshu.com/math?formula=(K%2CC%2Ckernel_size%2Ckernel_size))。

##### 对bias的梯度

求和就行了。

```python
    def backward(self, error_tensor):
        # updates the parameters using the optimizer and returns the error tensor for the next layer
        # gradient with respect to layers
        # resize kernels
        num_kernels_b = self.convolution_shape[0]
        kernels_b = np.empty(
            (num_kernels_b, error_tensor.shape[1], self.convolution_shape[-2], self.convolution_shape[-1]))

        # restride
        error_restride = np.zeros(
            (error_tensor.shape[0], error_tensor.shape[1], self.input_shape[2], self.input_shape[3]))
        error_restride[:, :, 0:self.input_shape[2]:self.stride_shape[0],0:self.input_shape[3]:self.stride_shape[-1]] = error_tensor
        output = np.zeros((error_tensor.shape[0], num_kernels_b, self.input_shape[2], self.input_shape[3]))
        padding_size = [int((self.convolution_shape[1] - 1) // 2), int((self.convolution_shape[2] - 1) // 2)]  #(b,c,y,x)
        padding_r = [int((self.convolution_shape[1] - 1) % 2), int((self.convolution_shape[2] - 1) % 2)]
        error_pad = np.pad(error_restride, ((0, 0), (0, 0), (padding_size[0] + padding_r[0], padding_size[0]),
                                            (padding_size[1] + padding_r[1], padding_size[1])), 'constant',
                           constant_values=0)
        for i in range(num_kernels_b):
            for j in range(error_tensor.shape[1]):
                j_r = error_tensor.shape[1] - j - 1
                kernels_b[i, j, :, :] = self.weights[j_r, i, :, :]
        for i in range(error_tensor.shape[0]):
            for j in range(num_kernels_b):
                output[i, j, :, :] = signal.convolve(error_pad[i, :, :, :], kernels_b[j, :, :, :],
                                                           mode='valid')  # shape

        # gradient with respect to weight
        self.gradient_weight = np.empty(np.concatenate(([self.num_kernels], self.convolution_shape)))
        # for b in range(self.input_shape[0]):
        for n in range(self.num_kernels):
            for c in range(self.input_shape[1]):
                self.gradient_weight[n, c, :, :] = signal.correlate(self.input_pad[:, c, :, :],
                                                                          error_restride[:, n, :, :], mode='valid')

        # gradient with respect to bias
        self.gradient_bias = np.sum(np.sum(np.sum(error_tensor, axis=3), axis=2), axis=0)

        self.weights -= 0.01 * self.gradient_weight
        self.bias -= 0.01 * self.gradient_bias
       
        return output

    def get_gradient_weights(self):
        # return the gradient with respect to the weights
        return self.gradient_weight

    def get_gradient_bias(self):
        # return the gradient with respect to the bias
        return self.gradient_bias
```

# 5. Pooling

池化层的思想是减少参数的数量，减少计算成本，避免过拟合。这里实现的是maxpooling， 在输入矩阵上划出一小块区域，取其中的最大值，放到输出矩阵的对应位置。要注意的是需要把找的最大值的位置记下来，因为计算反向传播的时候只有最大值的位置贡献了损失值，其他地方都是零。

```python
class Pooling:
    def __init__(self, stride_shape, pooling_shape):
        self.stride = stride_shape
        self.pooling_shape = pooling_shape
        self.max_index = []
        self.input_shape = []
        self.output_shape = []

    def forward(self, input_tensor):
        # return input_tensor for next layer

        self.input_shape = input_tensor.shape
        self.output_shape = (input_tensor.shape[0], input_tensor.shape[1],
                             (input_tensor.shape[2] - self.pooling_shape[0]) // self.stride[0] + 1,
                             (input_tensor.shape[3] - self.pooling_shape[1]) // self.stride[1] + 1)

        output = np.empty(self.output_shape)
        self.max_index = np.zeros(self.output_shape, dtype=int)

        for b in range(self.output_shape[0]):
            for c in range(self.output_shape[1]):
                for i in range(self.output_shape[2]):
                    for j in range(self.output_shape[3]):
                        pooling_x = i * self.stride[0]
                        pooling_y = j * self.stride[1]
                        pooling_field = input_tensor[b, c, pooling_x:pooling_x + self.pooling_shape[0],
                                        pooling_y:pooling_y + self.pooling_shape[1]]
                        output[b, c, i, j] = np.max(pooling_field)
                        self.max_index[b, c, i, j] = np.argmax(pooling_field)

        return output

    def backward(self, error_tensor):
        # return error_tensor for next layer

        error_extend = np.zeros(self.input_shape)

        for b in range(self.input_shape[0]):
            for c in range(self.input_shape[1]):
                for i in range(self.output_shape[2]):
                    for j in range(self.output_shape[3]):
                        back_x = i * self.stride[0]
                        back_y = j * self.stride[1]
                        pooling_field = error_extend[b, c, back_x:back_x + self.pooling_shape[0],
                                        back_y:back_y + self.pooling_shape[1]]
                        index0 = self.max_index[b, c, i, j] // self.pooling_shape[0]
                        index1 = self.max_index[b, c, i, j] % self.pooling_shape[1]
                        pooling_field[index0, index1] += error_tensor[b, c, i, j]
                        error_extend[b, c, back_x:back_x + self.pooling_shape[0],
                        back_y:back_y + self.pooling_shape[1]] = pooling_field

        return error_extend

```

# 6. Flatten

前向把多维矩阵拉成一维的，反向把一维矩阵变回去。

```python
class Flatten:
    def __init__(self):
        self.input_shape = []

    def forward(self,input_tensor):
        # reshape and return input_tensor
        self.input_shape = input_tensor.shape[1:]
        input_tensor = input_tensor.reshape(input_tensor.shape[0], np.prod(self.input_shape))
        return input_tensor

    def backward(self,error_tensor):
        # reshape and return error_tensor
        error_tensor = error_tensor.reshape(error_tensor.shape[0], *self.input_shape)
        return error_tensor

```

# 7. Fully Connected

全连接层是输入矩阵与权重W相乘，再加上偏差bias,![Y = W^TX](https://math.jianshu.com/math?formula=Y%20%3D%20W%5ETX)。在这里bias的计算是在输入X的下面在加一行1，相当于多加了一个值为1的输入神经元（参考perceptron的结构）。  
反向传播需要计算对于上一层的梯度以及对于权值的梯度：  
![\frac{\partial E}{\partial X} = \frac{\partial E}{\partial Y}\frac{\partial Y}{\partial X} = W^T E_n](https://math.jianshu.com/math?formula=%5Cfrac%7B%5Cpartial%20E%7D%7B%5Cpartial%20X%7D%20%3D%20%5Cfrac%7B%5Cpartial%20E%7D%7B%5Cpartial%20Y%7D%5Cfrac%7B%5Cpartial%20Y%7D%7B%5Cpartial%20X%7D%20%3D%20W%5ET%20E_n)  
![\frac{\partial E}{\partial W} = \frac{\partial E}{\partial Y}\frac{\partial Y}{\partial W} = E_nX^T](https://math.jianshu.com/math?formula=%5Cfrac%7B%5Cpartial%20E%7D%7B%5Cpartial%20W%7D%20%3D%20%5Cfrac%7B%5Cpartial%20E%7D%7B%5Cpartial%20Y%7D%5Cfrac%7B%5Cpartial%20Y%7D%7B%5Cpartial%20W%7D%20%3D%20E_nX%5ET)

```python
class FullyConnected:
    def __init__(self, input_size, output_size):
        self.input_size = input_size
        self.output_size = output_size
        self.delta = 0.01
        self.input_tensor = None
        self.output_tensor = None
        self.weights = np.random.rand(self.input_size+1, self.output_size) - 0.5
        self.error = []

    def forward(self, input_tensor):
        # returns the input tensor for the next layer
        # extend input matrix with bias
        self.input_tensor = np.concatenate((input_tensor, np.ones([input_tensor.shape[0], 1])), axis=1)
        input_tensor = np.dot(self.input_tensor, self.weights)  
        return input_tensor

    def backward(self,error_tensor):
        # updates the parameters and returns the error tensor for the next layer
        self.error = error_tensor
        error_tensor = np.dot(self.error,self.weights.T)
        gradient_w = self.get_gradient_weights()
        self.weights -= self.delta * gradient_w
        error_tensor = np.delete(error_tensor,-1,1)
        return error_tensor

    def get_gradient_weights(self):
        # returns the gradient with respect to the weights, after they have been calculated in the backward-pass.
        gradient_w = np.dot(self.input_tensor.T, self.error)
        return gradient_w
```

# 8. Data Loader

利用python的generator，来实现将数据集分为batches，并输入网络的操作。  
首先需要实现一个自定义的数据集类，用来读取和预处理数据。这里实现的处理有resize和归一化处理。__ **len** __函数返回的是数据集的长度， __ **getitem** __函数每次可以得到一张处理过的图片和对应的标签。

```python
class Dataset:
    def __init__(self, root_dir, train, test, transform=None):
        """
        Args:
            root_dir (string): Directory with all the images.
            train (bool): if True, apply datset in training procedure
            test (bool): if True, apply datset in test procedure
            transform (bool, optional): Optional transform to be applied
        """
        # TODO: rewrite dataloader
        self.root_dir = root_dir
        self.train = train
        self.test = test
        self.transform = transform

    def __len__(self):
        return len(os.listdir(dir)) 

    def __getitem__(self, index):
        start = 0
        img_name = self.root_dir + str(index) + '.jpg'
        label = index
        image = Image.open(img_name)
        if self.transform:
            image = image.resize((64,64))
            image = self.normalize(image)
        return image, label

    def normalize(self, arr):
        arr = np.array(arr).astype('float')
        for i in range(3):
            arr[..., i] /= 255.0
        return arr
```

接下来是实现将数据分为一个个batch送入网络的类：

```python
class DataGenerator:
    def __init__(self,batch_size, dataset, shuffle):
        """
        generate batch-wise data
        :param batch_size: int, number of images in a batch
        :param dataset: class Dateset
        :param shuffle: bool, if True, shuffle the sequence of data
        """
        self.batch_size = batch_size
        self.dataset = dataset
        self.shuffle = shuffle
    def batch_generator(self):
        start = 0
        sequence = np.arange(0,len(self.dataset))
        if self.shuffle == True:
            np.random.shuffle(sequence)
        while start+ self.batch_size <len(self.dataset):
            images = []
            labels = []
            for i in range(self.batch_size):
                img, lab = self.dataset[sequence[i+start]]
                images.append(np.asarray(img).transpose(2,0,1))
                labels.append(lab)
            start += self.batch_size
            images = np.array(images)
            labels = np.array(labels)
            yield images,labels

    def forward(self):
        return next(self.batch_generator())
```

# 9. Neural Network

按照之前写的结构的顺序，将每层依次加入神经网络。在前向传播过程中，依次执行每一层的前向函数，并传递给下一层，最后的输出与真实标签进行比较，利用loss函数计算出损失值，再以相反的顺序指向每一层的反向传播函数，迭代每一层的参数。

```python
class NeuralNetwork:
    def __init__(self, categories, batch_size=10):
        self.batch_size = batch_size
        self.categories = categories

        self.input_tensor = None
        self.label_tensor = None

        self.layers = []
        self.loss = []
        self.loss_layer = None
     
    def forward(self, inputs, labels):
        for layer in self.layers:
            inputs = layer.forward(inputs)

        outputs, loss = self.loss_layer.forward(inputs, labels)
        preds = np.argmax(outputs, axis=1)
        return outputs, loss, preds

    def backward(self, output_tensor):
        error_tensor = self.loss_layer.backward(output_tensor)
        for layer in self.layers[::-1]:
            error_tensor = layer.backward(error_tensor)

    def train(self,iteration, data_generator):
        
        for i in range(iteration):
            batch_loss = 0.0
            batch_acc = 0.0
            for inputs, labels in data_generator.batch_generator()
                onehot_labels = one_hot_label(self.batch_size, labels)
                outputs,loss, preds = self.forward(inputs, onehot_labels)
                accuracy = preds[np.where(preds==labels)].shape[0]
                batch_loss += loss
                batch_acc += accuracy
                self.backward(outputs)

            batch_loss /= len(data_generator.dataset)
            batch_acc /= len(data_generator.dataset)
            self.loss.append(batch_loss)
            print("Epoch:{}: loss: {:.4f} acc:{:.4f}".format(i,batch_loss,batch_acc))


    def test(self, dataloaders):
        batch_loss = 0.0
        batch_acc = 0
     
        for inputs, labels in dataloaders.batch_generator():
   
            onehot_labels = one_hot_label(self.batch_size, labels)
            outputs, loss, preds = self.forward(inputs, onehot_labels)
            accuracy = preds[np.where(preds == labels)].shape[0]
            batch_loss += loss
            batch_acc += accuracy
            self.backward(outputs)

        batch_loss /= len(dataloaders.dataset)
        batch_acc /= len(dataloaders.dataset)
        return batch_acc

def calculate_accuracy(preds, labels):
    idx_max = np.argmax(preds, axis=1)
    correct = idx_max[np.where(idx_max==labels)].shape[0]
    return correct/labels.shape[0]

def one_hot_label(batch_size, labels):
    onehot = np.zeros((batch_size,labels.shape[0]))
    for i in range(onehot.shape[0]):
        onehot[i][labels[i]] = 1
    return onehot
```

最后把所有实现的模块组合在一起。

```python
import numpy as np
import matplotlib.pyplot as plt
from Layers import *
from Data import DataLoaders
from Loss import Loss
from Activations import Func
import copy


if __name__=='__main__':
    batch_size = 10
    categories = 2
    input_size = 64
    iteration = 30
    learning_rate = 0.01


    dataset = DataLoaders.Dataset(
        root_dir=r'D:\...\train',
        train=True,
        test=False,
        transform=True)

    net = NeuralNetwork(categories,batch_size)

    net.loss_layer = Softmax.Softmax() 
    conv1 = Conv.Conv(stride_shape=(1, 1), conv_shape=(3,3,3),num_kernels=4)
    pool = Pooling.Pooling((2, 2), (2, 2))
  
    fc1_input_size = 4096  # np.prod(pool_out_shape)
    fc1 = FullyConnected.FullyConnected(fc1_input_size, 256)
    fc2 = FullyConnected.FullyConnected(256, categories)

    net.layers.append(conv1)
    net.layers.append(Func.ReLU())
    net.layers.append(pool)
    net.layers.append(Flatten.Flatten())
    net.layers.append(fc1)
    net.layers.append(Func.ReLU())
    net.layers.append(fc2)

    data_generator = DataLoaders.DataGenerator(batch_size, dataset, shuffle=False)
    net.train(iteration, data_generator)
    plt.figure('Loss function for a Neural Net')
    plt.plot(net.loss, '-x')
    plt.show()

    dataset_test = DataLoaders.Dataset(
        root_dir=r'D:\...\test',
        train=False,
        test=True,
        transform=True)
    test_data = DataLoaders.DataGenerator(10, dataset_test, shuffle=False)
    accuracy = net.test(test_data)
    print('Test Accuracy: {:.4f}'.format(accuracy))

```

