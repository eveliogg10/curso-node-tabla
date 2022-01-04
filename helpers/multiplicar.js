const fs= require('fs');


// color
const colors= require('colors')



//Tabla de multiplicar

const crearArchivo= async(base = 5, listar= false, hasta=10) => {
    try{       
        let salida='';
        let consola= '';
    
        for(let i=1; i<= hasta ; i++){
            salida += `${ base } X ${ i } = ${ base*i }\n`;
            consola += `${ base } ${'X'.green} ${colors.red(i)} = ${colors.blue(base*i)}\n`;
        }


        if(listar){
            console.log('=================='.green);
            console.log('Tabla del:'.green, colors.blue(base));
            console.log('=================='.green);

            console.log(consola);
        }
        fs.writeFileSync( `./salida/tabla-${base}.txt`, salida);
        return `tabla-${base}.txt`;
    }
    catch(err){
        throw err;
    }
}
            
module.exports = {
    crearArchivo: crearArchivo
}


//Otra forma de guardar
// fs.writeFile( `tabla-${base}.txt`, salida, (err)=>{
//     if(err) throw err;
//     console.log(`tabla-${base}.txt creado`);
// } )

