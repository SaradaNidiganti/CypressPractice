// function repeatedChars(str){
//     var count =0;
//     if(str.length === 0){
//         console.log("Empty String")
//     }else{
//         let value = new Map()
//         for(let i=0;i<str.length;i++){
//             value.set(str[i],count)
//         }
//         console.log(value)
//     }
// }

//repeatedChars("Hi How are you?")

// function that count character occurrences in string 
function count_occur( str )
{
  // checking string is valid or not 
  if( str.length == 0 )
  {
    console.log("Invalid string")
    return;
  }
  //cor loop to iterate over string
  for( let i = 0 ;i < str.length ;i++)
  { 
    //variable counting occurrence 
    let count = 0;
    for( let j = 0 ;j < str.length ;j++)
    {
      if( str[i] == str[j] && i > j  )
      {
       break;
      }
      if( str[i] == str[j]  )
      {
        count++;
      }
    }
    if( count > 0)
    console.log(`${str[i]} occurs ${count} times`);
     
  }
 
}
 
// test string
let test_str = "gfghello";
count_occur( test_str);

function chatOccurunces(str){
    if(str.length == 0 ){
        console.log("no string here")
        return
    }
    for(let i=0;i<str.length;i++){
        let count = 0;
        for(let j=0;j<str.length;j++){
            if(str[i]==str[j] && i>j){
                break;
            }else if(str[i] == str[j]){
                count++
            }
        }
        if(count>0){
            console.log(`${str[i]} occures ${count} times`)
        }
    }
}

chatOccurunces("I am Sarada")