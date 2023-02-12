export class educacion {
    id!:number;
    institucion:string;
    logo:string;
    titulo:string;
    anioComienzo:string;
    anioFinal:string;
    descripcion:string;

    constructor (institucion:string, logo:string, titulo:string, anioComienzo:string, anioFinal:string, descripcion:string){
        this.institucion = institucion;
        this.logo = logo;
        this.titulo = titulo;
        this.anioComienzo = anioComienzo;
        this.anioFinal = anioFinal;
        this.descripcion = descripcion;



    }


}