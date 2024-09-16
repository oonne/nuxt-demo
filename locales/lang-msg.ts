export interface ILangMsg {
  zh_CN: string;
  zh_TW: string;
  en_US: string;
}
export interface ILangMsgs {
  [key: string | number]: ILangMsg;
}

const msg: ILangMsgs = {
  home: {
    zh_CN: '首页',
    zh_TW: '首頁',
    en_US: 'Home',
  },
  intro: {
    zh_CN: '简介',
    zh_TW: '簡介',
    en_US: 'Introduction',
  },
  about: {
    zh_CN: '关于',
    zh_TW: '關於',
    en_US: 'About',
  },
};

export default msg;
