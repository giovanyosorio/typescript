export {}
let user:object;
user={}
user ={
    id:1,
    username:'asdasd',
    isPro:true
}
console.log(user);
//console.log(user.username);


//object vs Object

const user2 ={
    id:1,
    username:'asdasd',
    isPro:true
}

const instancia= user2 instanceof Object //clase object de js
console.log(instancia);
console.log(user2.username);
