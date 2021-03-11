module.exports = function check(str, bracketsConfig) {
  strRes = str;

  for (let i = 0; i < str.length; i++) {
    for (let bracket of bracketsConfig) {
        strRes = strRes.replace(`${bracket[0]}${bracket[1]}`, '');
    }
  }
  return strRes.length === 0;
}
