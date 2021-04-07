import{Info, PeticionAsyncComponent, Result} from  'src/app/components/peticion-async/model/Ipet.inteface';
export class Pet implements PeticionAsyncComponent{
  results: Result[];
  info: Info;

constructor(results:Result[],info:Info){
this.results=results;
this.info=info;
}
}
