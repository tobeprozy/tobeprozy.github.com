---
title: Opencv
article: true
date: 2023-03-31
category:
  - 计算机视觉
tag:
  - Opencv
  - 算法
order: 
icon: robotics
---
::: tip
opencv
:::

-   ****1.输入、显示和保存图像****
    
    -   读取：imread()
    -   显示：imshow()
    -   保存：imwrite()
    -   窗口：namedWindow()
-   ****2.读取、显示、保存和处理视频****
    
    VideoCapture()，参数为0为读取摄像头，参数为文件名读取对应视频文件
    
-   **3.画线，画圆，画矩形，画多边形，显示文字**
    
    -   线：line()
    -   矩形：rectangle()
    -   圆：circle()
    -   多边形：polylines()
    -   显示文字：putText()
-   ****4.框住并得到目标位置（获取鼠标消息）****
    
    • setMouseCallback()：回调函数，第一个参数为窗口名，需要自己设计；第二个参数为自己写的函数，在这里我写了一个可以对目标进行框定和位置获取的函数。
    
-   ****6.图像基础操作：[像素](https://so.csdn.net/so/search?q=%E5%83%8F%E7%B4%A0&spm=1001.2101.3001.7020)、属性、ROI、通道、填充**
    
    -   像素：直接对原图数值进行更改
    -   属性：size、dtype、shape
    -   ROI：感兴趣区域
    -   通道：img的第三维的数值
    -   填充：四周填充copyMakeBorder()
-   ****7.图像运算：加法、混合****
    
    -   相加：add()
    -   混合：addWeighted()，参数4和参数3表示参数3和参数1的混合比例
-   ****9.颜色空间转换****
    
    -   颜色空间转换：cvtColor()
    -   判断像素值是否在某区间：inrange()
-   ****10.图像几何变换：扩展缩放、平移、旋转、仿射变换、透视变换****
    
    -   扩展缩放：resize()
    -   仿射变换：warpAffine()
    -   旋转辅助函数：getRotationMatrix2D()
    -   透视变换：getPerspectiveTransform(),warpPerspective()
-   ****11.图像二值化：简单阈值，自适应阈值，Otsu阈值****
    
    -   阈值分割：threshold()
    -   自适应阈值：adaptiveThreshold()
-   ****12.图像平滑：平均、高斯、中值、双边滤波****
    
    -   滤波：blur()
    -   高斯滤波：GaussianBlur()
    -   中值滤波：medianBlur()
    -   双边滤波：bilateralFilter()
-   ****13.图像形态学转换****
    
    腐蚀、膨胀、开闭、梯度、礼帽黑帽
    
    ```cpp
    img = cv2.imread('xxx.png',0)
    kernel = np.ones((17,17),np.uint8)
    # 腐蚀
    test1 = cv2.erode(img,kernel=kernel)
    # 膨胀
    test2 = cv2.dilate(img,kernel=kernel)
    # 开运算
    test3 = cv2.morphologyEx(img,cv2.MORPH_OPEN,kernel=kernel)
    # 闭运算
    test4 = cv2.morphologyEx(img,cv2.MORPH_OPEN,kernel=kernel)
    # 形态学梯度 膨胀-腐蚀
    gradient = cv2.morphologyEx(img, cv2.MORPH_GRADIENT, kernel)
    # 礼帽 原始图像与进行开运算之后得到的图像的差。
    tophat = cv2.morphologyEx(img, cv2.MORPH_TOPHAT, kernel)
    # 黑帽 进行闭运算之后得到的图像与原始图像的差
    blackhat = cv2.morphologyEx(img, cv2.MORPH_BLACKHAT, kernel)
    
    ```
    
-   ****14.图像梯度：各种算子****
    
    -   拉普拉斯： Laplacian()
    -   Sobel算子：Sobel()
    -   Canny算子：Canny()
-   ****15.图像金字塔****
    
    -   pyrDown()
    -   pyrUp()
-   ****16.图像轮廓****
    
    -   找轮廓 findContours
    -   画轮廓 drawContours其他：重心、周长、面积、轮廓近似、凸包、矩阵、最小外接圆、椭圆和直线拟合
-   ****17.直方图计算绘制、均衡化、反向投影、2D投影****
    
    -   计算直方图：calcHist()
    -   绘制直方图(pyplot)：hist()
    -   直方图均衡化：equalizeHist()
-   ****18.图像变换：傅里叶变换****
    
    -   快速傅里叶变换（np）：fft()
    -   傅里叶变换（opencv）:dft()
-   ****19.图像模板匹配****
    
    • 模板匹配：matchTemplate()
    
-   ****20.Hough变换****
    
    ****Hough 直线变换：****HoughLines() ****Hough 圆环变换：****HoughCircles()
    
-   ****22.GrabCut算法进行交互式前景提取****
    
    grabCut()
    
-   ****23.角点检测****
    
    -   角点检测：cornerHarris()
    -   获得n个最佳角点：goodFeaturesToTrack()
-   ****24.SIFT算法****
    
    SIFT算法利用了尺度不变性来进行图像关键点的提取
    
-   ****25.ORB算法****
    
    利用SIFT，ORB算法等一般进行特征匹配