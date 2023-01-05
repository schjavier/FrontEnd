export class experiencia{
    private id!:number;
    
    private empresa:string;
    private logo:string;
    private puesto:string;
    private anioComienzo:string;
    private anioFinal:string;

constructor (empresa:string, logo:string, puesto:string, anioComienzo:string, anioFinal:string){

    this.empresa = empresa;
    this.logo = logo;
    this.puesto = puesto;
    this.anioComienzo = anioComienzo;
    this.anioFinal = anioFinal;
}

}