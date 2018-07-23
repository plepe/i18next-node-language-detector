module.exports = {
  init: Function.prototype,
  type: 'languageDetector',
  detect: () => {
    let m = (process.env.LANG + '').match(/^([a-z]+)([_\-\.].*|)$/)
    return m[1]
  },
  cacheUserLanguage: Function.prototype,
  name: 'i18next-node-language-detector'
}
