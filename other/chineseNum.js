underQian = (num) => {
  const defalutNum = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九'];
  const otherNum = ['', '', '十', '百', '千'];
  const numStr = num + '';
  const numArry = numStr.split('');

  const newNumArry = numArry.map(item => {
    return defalutNum[item]
  });
  let newString = '';
  for (let i = numArry.length, j = 0; j < newNumArry.length; i -= 1, j++) {
    // 结尾的零不要
    if (j == newNumArry.length - 1 && newNumArry[j] === '零') {
      continue;
      // 10-19不要一
    } else if (newNumArry.length == 2 && newNumArry[j] == '一' && j == 0) {
      newString += otherNum[i];
      // 中间的零都不要单位
    } else if (newNumArry[j] === '零') {
      newString += newNumArry[j];
    } else {
      newString += newNumArry[j] + otherNum[i];
    }
  }
  newString = newString.replace(new RegExp('零+', 'i'), '零');
  newString = newString.replace(new RegExp('零$', 'i'), '');
  return newString;
}

getChineseNum = (num) => {
  let newString = '';
  const moreUnit = ['', '万', '亿', '兆'];
  const list = this.splitFromEnd(num + '', 4)
    .map(item => {
      return this.underQian(item)
    });
  let newArry = [];
  for (let i = 0, j = list.length - 1; i < list.length; i++ , j--) {
    if (list[i]) {
      newString += list[i] + moreUnit[j];
    }
  };
  console.log(newString);
  return newString;
}

splitFromEnd = (splitStr, splitLength) => {
  const length = Math.ceil(splitStr.length / splitLength);
  const arr = new Array(length);
  let newString = splitStr;
  for (let i = arr.length - 1; i >= 0; i--) {
    const splitIndex = newString.length - splitLength;
    const newBorn = newString.substring(splitIndex);
    newString = newString.substring(splitIndex, NaN);
    arr[i] = newBorn;
    newString = newString;
  }
  return arr;
}