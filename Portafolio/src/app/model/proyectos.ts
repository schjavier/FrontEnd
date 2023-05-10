export class Proyectos {
    id!:number;
    
    nombre:string;
    imagen:string;
    descripcion:string;
    comienzo:string;
    fin:string;
    

    constructor(nombre:string, imagen:string, descripcion:string, comienzo:string, fin:string){
        this.nombre = nombre;
        this.imagen = imagen;
        this.descripcion = descripcion;
        this.comienzo = comienzo;
        this.fin = fin;
        


    }



}