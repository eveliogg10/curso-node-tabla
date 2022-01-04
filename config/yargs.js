const { describe } = require('yargs');

const argv = require('yargs')
                .option('b', {
                    alias: 'base',
                    type: 'number',
                    demandOption: true,
                    describe: 'Es la base de la tabla de multiplicar'
                })
                .option('l', {
                    alias: 'listar',
                    type: 'boolean',
                    //demandOption: true,
                    default: false,
                    describe: 'Es la opcion de listar la tabla'
                })
                .option('h', {
                    alias: 'hasta',
                    type: 'number',
                    //demandOption: true,
                    default: 10,
                    describe: 'Es el valor final de la tabla'
                })
                .check((argv, options)=>{
                    console.log('yargs', argv)
                    if(isNaN(argv.b)){
                        throw 'Tiene que ser un numero'
                    }
                    return true;
                })
                .argv;


module.exports= argv;