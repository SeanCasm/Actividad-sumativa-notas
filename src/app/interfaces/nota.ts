export interface Nota {
    id:number;
    titulo:string;
    estado:string;
    descripcion:string;
}
/**
 * Array de la interfaz nota, su uso es para tener referencias de las notas entre los
 * distintos componentes y servicios, como tambien su uso en los metodos GET y POST del backend
 */
export var misNotas: Array<Nota> = [
];