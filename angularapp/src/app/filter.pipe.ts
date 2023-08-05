@Pipe({
  name: "filter"
  })
  export class FilterPipe implements PipeTransform {
  
  transform(value: any,filter:string){
  if (filter == ""){
  return value;
  }
  const foods = [];
  import { Pipe, PipeTransform } from "@angular/core";
  
  for(let v of value)
  {
  if(v.name.includes(filter))
  {
  foods.push(v);
  }
  }
  
  return foods;
  }
  
  } 
