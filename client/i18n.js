import intl from 'react-intl-universal';

export const locales = {
    "zh-CN": require('./locales/zh-CN.json'),
    "en-US": require('./locales/en-US.json')
};

export const availableLng = Object.keys(locales);


export function getLocale(){
  var lang = navigator.language||navigator.userLanguage;
  lang = lang.substr(0, 2);
  if(lang == 'zh'){
   return availableLng[0]
  }else{
    return availableLng[1]
  }
}

export function switchLng(lng){

    return intl.init({
        currentLocale: lng, // TODO: determine locale here
        locales
    });
}

export function init(){
    return switchLng(getLocale());
}

init()
