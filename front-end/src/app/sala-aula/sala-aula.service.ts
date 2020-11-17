import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SalaAulaService {

  private apiServer : string = environment.apiServer;
  private apiUri : string =  this.apiServer + 'sala-aula'

  constructor(private http: HttpClient) { }

  listar(){
    return this.http.get(this.apiUri).toPromise();
  }

  excluir(id: string){
    //O método delete nativo do HTTPClient não suporta a passagem de um body para o back-end
    //O método request() pode ser usado com qualquer verbo e aceira a passagem de body
    return this.http.request('DELETE', this.apiUri, {body: {_id: id}}).toPromise()
    //return this.http.delete(this.apiServer + 'curso/').toPromise();
  }

  novo(body : any) {
    return this.http.post(this.apiUri, body).toPromise()
  }

  obterUm(id : string) {
    return this.http.get(this.apiUri + '/' + id).toPromise()
  }

  atualizar(body : any) {
    return this.http.put(this.apiUri, body).toPromise()
  }
  
}