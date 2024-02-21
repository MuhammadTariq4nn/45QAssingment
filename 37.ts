//37 defalut parameter in Typescript

function make_shirt(size:string="Large",message:string="I love TypeScript"):void{
    console.log(`The Shirt Size Is ${size} and the message is ${message} `)
}
make_shirt()

//2

function makeShirt(size:string="Medium",message:string="I love TypeScript"):void{
    console.log(`The Shirt Size Is ${size} and the message is ${message} `)
}
makeShirt()