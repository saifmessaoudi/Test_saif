function longestSequence(arr) {
    let maxCount = 0;
    let maxIndex = -1;
    let count = 0;
    let start = arr.length;
    
    if(!arr.includes(1) && !arr.includes(0)) return -1;
    if(!arr.includes(1)) return arr.length-1;
  
    for (let i = arr.length - 1; i >= 0; i--) {
      if (arr[i] === 1) {
        count++;
        start = i;
      } else {
        if (count > maxCount) {
          maxCount = count;
          maxIndex = start - 1;
        }
        count = 0;
      }
    }
    if (count > maxCount) {
      maxIndex = start - 1;
    }
    return maxIndex;
  }
  
  
  console.log(longestSequence(process.argv.slice(2).map(Number)));

 
  