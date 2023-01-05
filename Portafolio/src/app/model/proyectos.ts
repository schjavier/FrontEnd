export class Proyectos {
    id!:number;
    
    private nombre:string;
    private imagen:string;
    private descripcion:string;
    private comienzo:string;
    private fin:string;

    constructor(nombre:string, imagen:string, descripcion:string, comienzo:string, fin:string){
        this.nombre = nombre;
        this.imagen = imagen;
        this.descripcion = descripcion;
        this.comienzo = comienzo;
        this.fin = fin;


    }



}