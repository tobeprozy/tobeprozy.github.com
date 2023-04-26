# 概念
算能也对外开源了其自研的 TPU 编译工具— TPU-MLIR（Multi-Level Intermediate Representation）。TPU-MLIR 是一款主打 AI 芯片的 TPU 编译器开源工程。工程提供了完整的工具链，将预先训练好的各类框架下的神经网络，在其中进行转化，最终转化为能在 TPU 中高效运算的 二进制文件bmodel，以实现更高效的推理。

# 优势

TPU-MLIR已经支持TFLite以及onnx格式，这两种格式的模型可以直接转化为TPU可用的bmodel。如果不是这两种格式呢？实际上onnx提供了一套转换工具，可以将现在市面上主流深度学习框架编写的模型转为onnx格式，然后就能继续转为bmodel了