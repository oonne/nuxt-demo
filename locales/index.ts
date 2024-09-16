import langMsg from './lang-msg';

/* 获取配置 */
const getMessages = (lang: string) => {
  const keys = Object.keys(langMsg);
  const msgs: any = {};
  keys.forEach((key: string) => {
    msgs[key] = (langMsg[key] as any)[lang];
  });
  return msgs;
};

/* Nuxt需要的i18n配置 */
export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'zh_CN',
  messages: {
    zh_CN: getMessages('zh_CN'),
    zh_TW: getMessages('zh_TW'),
    en_US: getMessages('en_US'),
  }
}));
