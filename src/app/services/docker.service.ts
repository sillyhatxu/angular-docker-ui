import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http'
import { Observable, of, throwError } from 'rxjs';
import { ResponseDTO } from '../dto/ResponseDTO';
import { environment } from '../../environments/environment';
import { DockerStats } from '../dto/DockerStats';

@Injectable({
  providedIn: 'root'
})
export class DockerService {

  constructor(private http: HttpClient) { }

  stats(): Observable<ResponseDTO<Array<DockerStats>>> {
    const url = `${environment.apiUrl}/containers/stats`;
    return this.http.get<ResponseDTO<Array<DockerStats>>>(url);
  }
}
