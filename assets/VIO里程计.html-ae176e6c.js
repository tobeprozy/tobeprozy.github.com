const t=JSON.parse('{"key":"v-2dc68459","path":"/03Computer_Vision/3D_%E8%A7%86%E8%A7%89/VIO%E9%87%8C%E7%A8%8B%E8%AE%A1.html","title":"VIO里程计","lang":"zh-CN","frontmatter":{"title":"VIO里程计","article":true,"date":"2023-03-31T00:00:00.000Z","category":["计算机视觉"],"tag":["算法","双目视觉","里程计"],"order":null,"icon":"🧑","description":"::: tips VIO里程计相关介绍 ::: 一、VIO视觉里程计 VIO算法和常规SLAM算法最大的不同在于两点： VIO在硬件上需要传感器的融合，包括相机和六轴陀螺仪，相机产生图片，六轴陀螺仪产生加速度和角速度。相机相对准但相对慢，六轴陀螺仪的原始加速度如果拿来直接积分会在很短的时间漂移（zero-drift），但六轴陀螺仪的频率很高，在手机上都有200Hz。 VIO实现的是一种比较复杂而有效的非线性优化或者卡尔曼滤波，比如MSCKF（Multi-State-Constraint-Kalman-Filter），侧重的是快速的姿态跟踪，而不花精力来维护全局地图，也不做keyframe based SLAM里面的针对地图的全局优化（bundle adjustment）。","head":[["meta",{"property":"og:url","content":"https://tobeprozy.github.io/03Computer_Vision/3D_%E8%A7%86%E8%A7%89/VIO%E9%87%8C%E7%A8%8B%E8%AE%A1.html"}],["meta",{"property":"og:site_name","content":"南叔先生-开源笔记"}],["meta",{"property":"og:title","content":"VIO里程计"}],["meta",{"property":"og:description","content":"::: tips VIO里程计相关介绍 ::: 一、VIO视觉里程计 VIO算法和常规SLAM算法最大的不同在于两点： VIO在硬件上需要传感器的融合，包括相机和六轴陀螺仪，相机产生图片，六轴陀螺仪产生加速度和角速度。相机相对准但相对慢，六轴陀螺仪的原始加速度如果拿来直接积分会在很短的时间漂移（zero-drift），但六轴陀螺仪的频率很高，在手机上都有200Hz。 VIO实现的是一种比较复杂而有效的非线性优化或者卡尔曼滤波，比如MSCKF（Multi-State-Constraint-Kalman-Filter），侧重的是快速的姿态跟踪，而不花精力来维护全局地图，也不做keyframe based SLAM里面的针对地图的全局优化（bundle adjustment）。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://tobeprozy.github.io/"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-04-26T10:25:41.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"VIO里程计"}],["meta",{"property":"article:tag","content":"算法"}],["meta",{"property":"article:tag","content":"双目视觉"}],["meta",{"property":"article:tag","content":"里程计"}],["meta",{"property":"article:published_time","content":"2023-03-31T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-04-26T10:25:41.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"VIO里程计\\",\\"image\\":[\\"https://tobeprozy.github.io/\\"],\\"datePublished\\":\\"2023-03-31T00:00:00.000Z\\",\\"dateModified\\":\\"2023-04-26T10:25:41.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"一、VIO视觉里程计","slug":"一、vio视觉里程计","link":"#一、vio视觉里程计","children":[]},{"level":2,"title":"二、VIO里程计的分类","slug":"二、vio里程计的分类","link":"#二、vio里程计的分类","children":[{"level":3,"title":"松耦合","slug":"松耦合","link":"#松耦合","children":[]},{"level":3,"title":"紧耦合","slug":"紧耦合","link":"#紧耦合","children":[]}]},{"level":2,"title":"三、VIO里程计的算法流程","slug":"三、vio里程计的算法流程","link":"#三、vio里程计的算法流程","children":[]},{"level":2,"title":"四、VIO里程计的算法实现","slug":"四、vio里程计的算法实现","link":"#四、vio里程计的算法实现","children":[]}],"git":{"createdTime":1682504741000,"updatedTime":1682504741000,"contributors":[{"name":"tobeprozy","email":"904762096@qq.com","commits":1}]},"readingTime":{"minutes":16.02,"words":4807},"filePathRelative":"03Computer_Vision/3D_视觉/VIO里程计.md","localizedDate":"2023年3月31日","excerpt":"<p>::: tips\\nVIO里程计相关介绍\\n:::</p>\\n<h2> 一、VIO视觉里程计</h2>\\n<p>VIO算法和常规<a href=\\"https://so.csdn.net/so/search?q=SLAM&amp;spm=1001.2101.3001.7020\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">SLAM</a>算法最大的不同在于两点：</p>\\n<ul>\\n<li>VIO在硬件上需要传感器的融合，包括相机和六轴陀螺仪，相机产生图片，六轴陀螺仪产生加速度和角速度。相机相对准但相对慢，六轴陀螺仪的原始加速度如果拿来直接积分会在很短的时间漂移（zero-drift），但六轴陀螺仪的频率很高，在手机上都有200Hz。</li>\\n<li>VIO实现的是一种比较复杂而有效的非线性优化或者卡尔曼滤波，比如MSCKF（Multi-State-Constraint-Kalman-Filter），侧重的是快速的姿态跟踪，而不花精力来维护全局地图，也不做keyframe based SLAM里面的针对地图的全局优化（bundle adjustment）。</li>\\n</ul>","autoDesc":true}');export{t as data};
