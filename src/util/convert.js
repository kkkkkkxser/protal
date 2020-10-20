export default {
  // 首字母转大写
  firstCharToUpperCase: (str) => {
    return str.trim().length == 0 ? str : str.charAt(0).toUpperCase() + str.slice(1)
  },
  // 首字母转小写
  firstCharToLowerCase: (str) => {
    return str.trim().length == 0 ? str : str.charAt(0).toLowerCase() + str.slice(1)
  }
}
