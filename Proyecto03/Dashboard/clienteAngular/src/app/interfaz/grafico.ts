/*interface Grafico {
    ticker:string;
    description:string;
    geography:string;
    frecuency:string;
    dataset:string;
    units:string;
    aditional_metadata:Aditional_metadata;
    data: Data;
}
interface Aditional_metadata{
    "1:area_code":string;
    "3:item_code":string;
    "1220:base_code": string;
    "GEO:None":string;
}
interface Data{
    values:number[];
    dates:number[];
    status:number[];
}

export {Grafico, Aditional_metadata,Data}
*/


 /*export interface Grafico {
    descripcion: string;
    id: string;
    ursdl: string;
 } */

 interface Grafico {
    dataset:string;
    data:Data;
 } 
 interface Data{
    values:number[];
    dates:number[];
    status:string;
}
 export {Grafico,Data}
 /*export interface Grafico {
    observed_date: string;
    
 }} */