import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Staff } from '../model/staff';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StaffService {

  private url:string="http://localhost:8080/api/v1/staff"

  constructor(private http:HttpClient) { }


  add(staff:Staff){
    return this.http.post(this.url,staff);
  }

  getAll():Observable<Staff[]>{
    return this.http.get<Staff[]>(this.url)
  }
  getById(id:number){
    const apiUrl=`${this.url}/${id}`;
    return this.http.get(apiUrl)
  }
  update(id:number,staff:Staff){
    const apiUrl=`${this.url}/${id}`;
    return this.http.put(apiUrl,staff);
  }
}
