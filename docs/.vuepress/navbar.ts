import { navbar } from "vuepress-theme-hope";

// 精选图标：https://theme-hope.vuejs.press/zh/guide/interface/icon.html#iconfont-%E7%B2%BE%E9%80%89%E5%9B%BE%E6%A0%87
export default navbar([
  { text: "博客", icon: "blog", link: "/blog" },
  {
    text: "代码",
    icon: "code",
    prefix: "/",
    children: [
      "26code/Markdown",
      "26code/AutoHotkey",
      "26code/Electron",
      {
        text: "页面开发",
        icon: "vue",
        prefix: "",
        children: ["20web/VuePress", "20web/docsify", "27deploy/VPS"],
      },
    ],
  },
  {
    text: "应用",
    icon: "app",
    prefix: "/",
    children: [
      "25apps/Applist",
      { text: "ChatGPT SC", icon: "creative", link: "https://ai.newzone.top/" },
      { text: "直播手册", icon: "quote", link: "25apps/livestreaming/1_obs_basic" },
      {
        text: "服务/系统",
        icon: "any",
        prefix: "",
        children: ["15Linux/NAS", "24Windows/faq"],
      },
    ],
  },
  {
    text: "生活",
    icon: "emmet",
    prefix: "/28LifeNotes/",
    children: ["Diet", "Shoppinglist", "Coupon"],
  },
  { text: "工具收藏", icon: "tool", link: "https://nav.newzone.top/" },
]);