//原始类型
let bool: boolean = true;
let num: number | undefined | null = 123;      //联合类型
let str: string = 'abc'

//数组类型
let arr1: number[] = [1,2,3]
let arr2: Array<number> = [1,2,3]
//联合
let arr3: Array<number | string> = [1,2,3,'444']
//元祖   限制了类型和个数
let tuple: [number,string] = [0,'1']

//不建议这样使用  越界
// tuple.push(2)
// console.log(tuple)
// tuple[2]

//函数
let add = (x: number,y: number) => x + y;
// 定义一个函数
let compute: (x: number, y: number) => number
compute = (a, b) => a + b;

//对象
// let obj: object = {x: 1, y:  2}
let obj: {x:number,y:number} = {x: 1, y:  2}
obj.x = 3

// symbol
let s1: symbol = Symbol()
let s2 = Symbol()
console.log(s1 === s2) //fasle

//undefined  null
let un: undefined = undefined;
let nu: null = null;

//在ts中 undefined 和 null 为所有类型的子类型  需要在tsconfig.json中找到 "strictNullChecks" 设置为 false,   --解决方式一
//如果想使用严格的语法  可以使用联合类型
num = undefined
num = null

// void   是一种操作符 可以让任何东西返回 undefined  表示没有任何返回值的函数
let noReturn = () => {}

// any
let x;

// never
let error = () => {
    throw new Error('error')
}
let endless = () => {
    while(true) {}
}


