import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class EmployeeService {

  constructor(private http: HttpClient) {

  }

  find() {
  	return this.http.get('/api/employees');
  }

  findOne(id) {
    return this.http.get('/api/employees/'+ id); 
  }

  create(employee) {
    return this.http.post('/api/employees', employee);

  }

  update(id, employee) {
  	return this.http.put('api/employees/' + id, employee);

  }

  delete(id) {
   return this.http.delete('/api/employees/' + id);
  }


}