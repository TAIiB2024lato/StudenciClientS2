import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PaginationDTO } from './models/pagination.interface';
import { Observable } from 'rxjs';
import { StudentResponseDTo } from './models/student.interface';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor(private httpClient: HttpClient) { }

  public get(pagintaion: PaginationDTO): Observable<StudentResponseDTo[]> {
    // const params = new HttpParams();
    // params.set('page', pagintaion.page ?? 0);
    // params.set('count', pagintaion.count ?? 10);
    return this.httpClient.get<StudentResponseDTo[]>('https://localhost:7254/api/Students', { params: {
      page: pagintaion.page ?? 0,
      count: pagintaion.count ?? 10
    } });
  }
}
