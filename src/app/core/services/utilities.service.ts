import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilitiesService {

  constructor() { }

  jsonConverter(string: string | any): any{
    if(string){
      var s = string;
      s = s.replace(/'/g, '"')
      s = JSON.parse(s)
      return s 
    }else{
      return ""
    }
   }
}
