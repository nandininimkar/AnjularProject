import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private http: HttpClient) { }

  url = 'http://localhost:8080/students'

  savaData(registerForm : any){
    return this.http.post(this.url,registerForm)
  }

  getData () {
    return this.http.get(this.url)
  }

  updateStudent (updateForm : any) {
    return this.http.put(this.url+"/"+updateForm.id,updateForm)
  }

  deleteStudent(id: number) {
    return this.http.delete(this.url+"/"+id)
  }

}
