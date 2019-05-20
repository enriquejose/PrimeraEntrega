const fs = require('fs');

const aspirante = {
    cedula:{
        demand: true,
    },
    nombre:{
        demand: true,
    }
};

const argv = require('yargs')
            .command('aspirante','ingrese datos del aspirante',aspirante)
            .argv

const cursos = [{
    id: 1,
    Nombre: 'NodeJs',
    duracion: '38H',
    valor: 10000,
},
{
    id: 2,
    Nombre: 'Python',
    duracion: '40H',
    valor: 12000,
},
{
    id: 3,
    Nombre: 'C#',
    duracion: '40H',
    valor: 9000,
}
];

let mostrarCursos = () => {
    //for (let curso in cursos) {
    cursos.forEach(curso => {
                    //setTimeout(function(){
                    c = curso;    
                    console.log('Id: ' + c.id);
                    console.log('Curso: ' + c.Nombre);
                    console.log('Horas: ' + c.duracion);
                    console.log('Valor ' + c.valor + '\n');

                    //return c;    

                    //},2000);
    });
}

mostrarCursos();

console.log('Si desea <inscribirse> escriba el ID del curso:' + '\n');
var stdin = process.openStdin();
stdin.on('data',function(d){
    //console.log('Curso Seleccionado: ' + d);

    let cursoSeleccionado = cursos.find(curSel => curSel.id == d);

    //console.log('curso encontrado: ' + cursoSeleccionado.id);

    if (cursoSeleccionado.id > 0){
        //console.log('Curso seleccionado Existe:' + cursoSeleccionado.id);
        let  crearArchivo = (cursoSeleccionado) => {
            texto = 'Datos el estudiante ' +
                    '- Cedula: ' + argv.cedula + '\n' + 
                    '- Nombre: ' + argv.nombre + '\n' +
                    'Datos del curso' + '\n' +
                    ' - Id:' + cursoSeleccionado.id + ' - Curso:' + cursoSeleccionado.Nombre + ' - Valor: ' + cursoSeleccionado.valor;
                    
            fs.writeFile('incripcion.txt',texto,(err)=>{
                if(err) throw (err);
                console.log('se ha creado el archivo: incripcion.txt')
            });
        }

        crearArchivo(cursoSeleccionado);
    }
    else{
        console.log('Curso seleccionado no existe');
    }

})


