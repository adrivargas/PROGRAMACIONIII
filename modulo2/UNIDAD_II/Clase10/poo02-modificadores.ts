class Libro {
    public nombre: string
    private paginas: number;
    protected dni: string = "123647445857";
    constructor(nombre: string, paginas: number){
        this.nombre = nombre;
        this.paginas = paginas;
    }

cantidadPaginas(): void{
    console.log(`Cantidad de paginas del libro ${this.paginas}`)
    }
}

const myLibro = new Libro("La Dama de Rosa", 350);
console.log(myLibro.nombre);
console.log(myLibro.cantidadPaginas());