export class educacion {
    private id!:number;
    
    private institucion:string;
    private logo:string;
    private titulo:string;
    private anioComienzo:string;
    private anioFinal:string;
    private descripcion:string;

    constructor (institucion:string, logo:string, titulo:string, anioComienzo:string, anioFinal:string, descripcion:string){
        this.institucion = institucion;
        this.logo = logo;
        this.titulo = titulo;
        this.anioComienzo = anioComienzo;
        this.anioFinal = anioFinal;
        this.descripcion = descripcion;



    }


}