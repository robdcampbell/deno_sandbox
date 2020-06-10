const food = Deno.args[0]


if(food === 'love'){
    console.log('🦖...Deno is born!')
} else {
    console.log('🥚...this egg needs some love')
}

//console.log(Deno.metrics());
setTimeout(()=>{
    console.log('check')
},1000)

//console.table(Deno.metrics());
//console.log(window);