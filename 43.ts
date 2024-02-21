//43


let  magician_names:string[]=["Harry Houdini","David Copperfield","Penn Jillette"];

function show_magicians(magician_names:string[]):void{
    magician_names.forEach((magician)=>{
        console.log(`${magician}`);
    })
}


function great_magicians(magician_names:string[]):void{
    magician_names.forEach((magician)=>{
        console.log(`Great ${magician}`);
    })
}


let copyOfmagacians= [...magician_names];


console.log("Orignal Magicians")
show_magicians(magician_names);
console.log("-------------------------")
console.log("Great magicians");
great_magicians(copyOfmagacians)


export{}

