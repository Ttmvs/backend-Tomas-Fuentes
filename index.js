class Usuario {
    constructor (nombre, apellido, libro, mascotas){
    this.nombre = nombre;
    this.apellido = apellido;
    this.libro = libro;
    this.mascotas = mascotas;
    }
    getFullName(){ 
        return `${this.nombre} ${this.apellido}`
    }
    addMascota(){
        const mascota = [];
        const animal = mascota.push('perro');
    }
    countMascotas(){
        return this.mascotas.lenght
        }
    }
    addBook(nombre, autor);{
        const libros = {
        nombre: 'El señor de los anillos',
        autor: 'J. R. R. Tolkien',
        }
        this.libros.push({nombre:'El señor de los anillos', author: 'J. R. R. Tolkien'})
        }

    getBookName();{
        return this.libro.map((item) => item.nombre)
    }

    Usuario.addBook({})
    Usuario.addBook({})
    Usuario.addMascota(nombreMascota);
    Usuario.addMascota(nombreMascota);

    console.log(user.countMascotas());
    console.log(user.getFullName())

 const p = new Usuario('Juan', 'Gomez', [{nombre: 'Coraline y la puerta secreta', author:'Neil Gaiman'}, {nombre: 'Harry Potter y la camara secreta', author: 'J. K. Rowling'}], ['gato', 'perro'])
console.log(p)
/*p.getFullName(); */
