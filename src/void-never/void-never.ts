function show(user:any):any {
    console.log('user info',user.id,user.username);
    //return 'hola'
}

show({
    id:1,
    username:"asdad"
})


//tipo inferido

function showformated(user:any) {
    console.log(`user info ${user.id} ${user.username}`);
    
}


showformated({
    id:1,
    username:"asdad"
})

let chequeo:void
//chequeo=null
//chequeo=undefined



function handleerror(code:number,message:string):never {
    
    throw new Error(`${code} ${message}`);
}

try {
    
    handleerror(404,'not found')
} catch (error) {
    
}
//NEVER


function some(limit:number) :never{
    let sum=0;
    while (true) {
        sum++
    }
}

some(10)