import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PartnersService {

  private apiUrl = 'https://644060ba792fe886a88de1b9.mockapi.io/v1/test/partners';
  // apiUrl = 'http://localhost:3000/partners';

  constructor(private http: HttpClient) { }

  getListPartners() {
    return this.http.get<any>(this.apiUrl);
  }

  deletePartner(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  editPartner(data: any) {
    return this.http.put(`${this.apiUrl}/${data.id}`, data);
  }

  createPartner(data: any) {
    return this.http.post(this.apiUrl, data);
  }
}
