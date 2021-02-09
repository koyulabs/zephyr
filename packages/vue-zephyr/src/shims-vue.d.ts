// Project
declare module '*.vue';
declare module '@/views/locales/zh-CN.js';
declare module '@/views/locales/en.js';
declare module '*.svg' {
  const filePath: string;
  export default filePath;
}

// Dependencies
declare module 'prismjs/plugins/normalize-whitespace';
declare module 'prismjs';
declare module "vue-prism-component";
declare module "vue-inline-svg";
