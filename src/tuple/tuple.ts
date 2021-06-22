//Una tupla en TypeScript es un array de elementos que están tipados.

export 
let user:[number,string]
user=[1,'dasd']

user.push('dupla')

console.log(user);


let userinfo:[number,string,boolean]
userinfo=[2,'ppap',true]


//arreglo de tuplas
let array:[number, string][] = [];

array.push([1,'asd' ])
array.push([2,'gfhfgh' ])
array.push([3,'sdf' ])
//funciones array

array[2][1]= array[2][1].concat('001')
console.log(array);
