module.exports = function check(str, bracketsConfig) {
 
  let map = new Map();

  bracketsConfig.forEach(element => {
    map.set(element[0], element[1]);  
  });

  let arr = [];
  arr.push(str[0]);

  for (let i = 1; i < str.length; i ++)
  {
    if (str[i] === map.get(arr[arr.length - 1]))
      {arr.pop();}
    else
      {arr.push(str[i]);}
  }  

  return arr.length == 0;

}

