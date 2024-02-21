//41  magician’s

let  magician_names:string[]=["Harry Houdini","David Copperfield","Penn Jillette"];

function show_magicians(magician_names:string[]):void{
    magician_names.forEach((magician)=>{
        console.log(magician);
    })
}
show_magicians(magician_names)