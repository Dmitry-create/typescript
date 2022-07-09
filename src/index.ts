const getArg = (): number | undefined =>{
 let argv = process.argv[2]; 
  if(argv){ 
    let time:number = Number(argv);
    return time;
  }
  return undefined;

}

let timer = (time:number) =>{
      let timerTick = setInterval(() => {
          if(time == 0){
            console.log('time off');
              clearInterval(timerTick);
          } else{
            time--
            console.clear()
            console.log( time);
          }
      }, 1000);
}


(function main(){
  let time = getArg();
  if(time){
    timer(time)
  }
  console.log('not condition')
}())
