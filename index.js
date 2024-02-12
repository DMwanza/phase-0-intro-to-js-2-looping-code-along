// // Code your solutions in this file
// function writeCards(names) {
  //     let messages = [];
//     names.forEach((name, index) => {
  //       messages.push("Thank you, " + name + ", for the wonderful surprise gift!");
  //     });
  //     return messages;
//   }

//   console.log(writeCards(names));
// function countDown(){
  // for (let countDown=10;countDown >= 0;countDown--)
  //  {console.log(countDown)
  // }
  // }
  
  const names=["Guadalupe", "Ollie", "Aki"];
  function writeCards(names,event){
    let newArray=[]
    for(let i=0;i<names.length;i++){
      let message=`Thank you, ${names[i]}, for the wonderful ${event} gift!`
      newArray.push(message)
    }
    return newArray
  }
  function countDown(num){
    let i=num
    while(i>=0){
      console.log(i--)
    }
    return num
  }
  countDown(10)




















