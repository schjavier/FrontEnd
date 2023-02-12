export class experiencia{
    id!:number;
    
    empresa:string;
    logo:string;
    puesto:string;
    anioComienzo:string;
    anioFinal:string;
    descripcion:string;

constructor (empresa:string, logo:string, puesto:string, anioComienzo:string, anioFinal:string, descripcion:string){

    this.empresa = empresa;
    this.logo = logo;
    this.puesto = puesto;
    this.anioComienzo = anioComienzo;
    this.anioFinal = anioFinal;
    this.descripcion = descripcion;
}

} 