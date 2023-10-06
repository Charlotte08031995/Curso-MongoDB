const registros = [
  {
    id: 1,
    nombre: 'Camila Lopez',
    detalles: {
      descripcion: 'matricula normal',
      contacto: {
        email: 'clopez@mail.com',
        telefono: 83242834
      },
      valorMatricula: 200000
    },
  },
  {
    id: 2,
    nombre: 'Pedro Perez',
    detalles: {
      descripcion: 'beca',
      contacto: {
        email: 'pperez@mail.com',
        telefono: 83242834
      },
      valorMatricula: 0
    },
  },
  {
    id: 3,
    nombre: 'Juan Yarce',
    detalles: {
      descripcion: 'matricula normal',
      contacto: {
        email: 'jyarce@mail.com',
        telefono: 1122334455
      },
      valorMatricula: 400000
    },
  },
  {
    id: 4,
    nombre: 'Alberto Benitez',
    detalles: {
      descripcion: 'matricula condicional',
      contacto: {
        email: 'abenitez@mail.com',
        telefono: 234534566
      },
      valorMatricula: 600000
    },
  },
];

// Calcular la suma total de las matrículas usando reduce
const sumaMatriculas = registros.reduce((accumulator, registro) => {
  if (registro.detalles && registro.detalles.valorMatricula) {
    return accumulator + registro.detalles.valorMatricula;
  } else {
    return accumulator;
  }
}, 0);

console.log('Total de matrículas:', sumaMatriculas);


//Télefonos estudiantes matriculados

const telEstudiantes = [];

registros.forEach(registro => {
    if(registro.detalles && registro.detalles.contacto && registro.detalles.contacto.telefono) {
        telEstudiantes.push(registro.detalles.contacto.telefono);
        }
});

document.write('Números de contacto:', telEstudiantes);
