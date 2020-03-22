module.exports = function check(str, bracketsConfig) {

  let arr = str.split('');

  if(arr[0] > 0){
    let res = [];

    for (let i = 0; i < arr.length; i++) {
      if(arr[i] == '7' && res[res.length - 1] == '7'|| arr[i] == '8' && res[res.length - 1] == '8' || arr[i] == '2' && res[res.length - 1] == '1' || arr[i] == '4' && res[res.length - 1] == '3' || arr[i] == '6' && res[res.length - 1] == '5'){
        res.pop()
      } else {
        res.push(arr[i])
      }
    }
    if(res.length > 0){
      return false;
    }
    else {
      return true;
    }
  } else {
    let res = [];

    for (let i = 0; i < arr.length; i++) {
      if(arr[i] == ')' && res[res.length - 1] == '('|| arr[i] == ']' && res[res.length - 1] == '[' || arr[i] == '}' && res[res.length - 1] == '{' || arr[i] == '|' && res[res.length - 1] == '|'){
        res.pop()
      } else {
        res.push(arr[i])
      }
    }
    if(res.length > 0){
      return false;
    }
    else {
      return true;
    }
  }
}
