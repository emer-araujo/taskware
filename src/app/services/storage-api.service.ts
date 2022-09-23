import { Injectable } from '@angular/core';
import { Task } from '../models/task';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
/* Classe referente ao fornecimento de recursos capturados com o Cliente HTTP do Angular*/

/*
  Usamos o Observable no lugar das Promises para que ele emita notificações 
  a cada mudança ocorrida tornando o metodo de requisição reativo.

  Usamos o subscribe() no lugar do .then(), serve para "execução"
  Usamos o retry() para especificar a quantidade de tentativas
*/
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class StorageApiService {
  apiURL: string = 'http://localhost:3000'
  public tarefas:Task[] = []

  constructor(private reqHttp: HttpClient) {}
  Access = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  tratamento(erro:any){
    let msgErro:any = '';

    if(erro.error instanceof ErrorEvent){
      msgErro = erro.error.message
    }else{
      msgErro = `Código do erro ${erro.status}\n Mensagem do Erro: ${erro.message}`
    }
    alert(msgErro);
    return throwError(()=>msgErro)
  }

  lerDados():Observable<Task>{
    return this.reqHttp.get<Task>(this.apiURL+'/tasks').pipe(
      retry(1),
      catchError(this.tratamento)
    )
  }

  lerUmDado(id:any):Observable<Task>{
    return this.reqHttp.get<Task>(this.apiURL+`/tasks/${id}`).pipe(
      retry(1),
      catchError(this.tratamento)
    )
  }

  incluirDados(dados:any):Observable<Task>{
    dados.status = "Aberta"
    return this.reqHttp.post<Task>(this.apiURL+'/tasks', 
    JSON.stringify(dados),
    this.Access).pipe(
      retry(1),
      catchError(this.tratamento)
    )
  }
  
  editarDados(id:any, dados:any):Observable<Task>{
    return this.reqHttp.put<Task>(this.apiURL+`/tasks/${id}`,
    JSON.stringify(dados),
    this.Access).pipe(
      retry(1),
      catchError(this.tratamento)
    )
  }

  deletarDados(id:any){
    return this.reqHttp.delete<Task>(this.apiURL + '/tasks/'+ id, this.Access).pipe(
      retry(1),
      catchError(this.tratamento)
    )
  }
}
