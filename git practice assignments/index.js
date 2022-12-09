
function checkprime(num){
    let count=0
    for(let i=0;i<=num;i++){
        if(num%i==0){
            count++;
        }
    }
    if(count==1)
    {
        return false;
    }
   else{
        return true;
     }
    
}

for(let i=1;i<=13;i++){
    let output=checkprime(i)
    if(output==true){
        console.log(i,'is a Prime Number')
    }else{
        console.log(i,'its not a Prime Number')
    }
}