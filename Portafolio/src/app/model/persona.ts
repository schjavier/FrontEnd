export class Persona {
   
   id!:number; 
   nombre:string;
   apellido:string;
   acercaDe:string;
   puesto:string;
   fotoPerfil:string;
   fotoBanner:string;
   experiencia:[];
   educacion:[];
   proyectos:[];

    constructor(nombre:string, apellido:string, acercaDe:string, puesto:string,
        fotoPerfil:string, fotoBanner:string, experiencia:[], educacion:[], proyectos:[]){
            
            this.nombre = nombre;
            this.apellido = apellido;
            this.acercaDe = acercaDe;
            this.puesto = puesto;
            this.fotoPerfil = fotoPerfil;
            this.fotoBanner = fotoBanner;
            this.experiencia = experiencia;
            this.educacion = educacion;
            this.proyectos = proyectos;

        }

}
