import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { RetornoDados } from '../../core/template/modal/retorno';

@Injectable({
  providedIn: 'root'
})
export class ResgateService {

  HOST: string;
  URL: string;
  PATH = '/v2/5e76797e2f0000f057986099';

  constructor(private http: HttpClient) {
    this.HOST = environment.apiUrl;
    this.URL = `${this.HOST}${this.PATH}`;
  }

  getInvestimento(): Observable<RetornoDados> {
    return this.http.get<RetornoDados>(`${this.URL}`);
  }
}
