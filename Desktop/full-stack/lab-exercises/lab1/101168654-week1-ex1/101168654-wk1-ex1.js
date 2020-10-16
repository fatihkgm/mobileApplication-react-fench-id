function capital_letter(str) 
{
    str = str.split(" ");

    for (var i = 0, x = str.length; i < x; i++) {
        str[i] = str[i][0].toUpperCase() + str[i].substr(1);
    }

    return str.join(" ");
}

console.log(capital_letter("The quick brown fox"));



function maxN(num1, num2, num3){
    var max = 0;
    if(num1 > num2){
        if(num1 > num3){
            num1 = max;
        }
        else{
            num3 = max;
        }
    }
    else{
        if(num2 > num3){
            num2 = max;
        }
    }
return max;
}

document.write(maxN(1,2,3));




function get_th(str) {
    if (str.length > 1)
      {
        return str.slice(-3) + str.slice(0, -3);
      }
 return str;
}
console.log(get_th("Python"));




function array_max_consecutive_sum(nums, k) {
    let result = 0;
    let temp_sum = 0;
    for (var i = 0; i < k - 1; i++) {
      temp_sum += nums[i];
    }
    for (var i = k - 1; i < nums.length; i++) {
      temp_sum += nums[i];
      if (temp_sum > result) {
        result = temp_sum;
      }
      temp_sum -= nums[i - k + 1];
    }
    return result;
  }
  

  console.log(array_max_consecutive_sum([2, 3, 5, 1, 6], 3))
  
