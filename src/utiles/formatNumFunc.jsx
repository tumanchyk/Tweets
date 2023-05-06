export const formatNum = (num) => {
    const arr = num.toString().split('');
    arr.splice(3, 0, ',');
    return arr.join('');
  };