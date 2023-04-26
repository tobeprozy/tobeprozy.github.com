---
title: Python个人经验

article: true
date: 2023-04-14
category:
  - Python
tag:
  - 算法
  - Python
order: 
icon: 🧑
---

::: tip
Python个人经验
:::


爬虫、词云、文件批处理、人脸识别、目标追踪、相机标定

-   你用Python做过一些什么？
    
    （1）词频分析，通过准备好的汉语词库，去网站爬取法语、英语完成翻译(BeautifulSoup)，同时给汉语标上拼音（pypinyin），加上中英文释义。
    
    （2） MaskRCNN 实例分割
    
    （3）小目标动态跟踪
    
    （4）用python进行人脸识别： 利用opencv、FaceRecognition、dlib包，准备几张图片，放入一个文件夹，开始训练，利用一张新的图片进行预测，采用人脸定位函数获取人脸位置，画上方框，贴上标签。