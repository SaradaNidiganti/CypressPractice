
var range = (start,end) => {
    let rangeArray =[ ]
if(start > end) {
    console.log("Range mentioned is incorrect ")
    console.log("Range start must be less than end ")
    
}
else if(start === end){rangeArray.push(1)}
else
{
    for(let i=start;i<=end;i++){
        rangeArray.push(i)
    }
}
  return (rangeArray.length > 0) ? rangeArray : "";
}


console.log(range(1,1))