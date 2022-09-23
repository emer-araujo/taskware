import { Component, OnInit, Input } from '@angular/core';
import { StorageApiService } from 'src/app/services/storage-api.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-insert-tasks',
  templateUrl: './insert-tasks.component.html',
  styleUrls: ['./insert-tasks.component.css']
})
export class InsertTasksComponent implements OnInit {
  title: string = "Inserir Tarefa"
  listTasks: any 
  /*@Input() listTasks = {
    name: '',
    last: '',
    email: '',
    phone: '',
    date_ini: '',
    date_end: '', 
    classification: 'Baixa',
    status: 'Aberta'
  }*/

  constructor(public service: StorageApiService, public roteamento: Router) { }

  ngOnInit(): void {
    this.listTasks = new FormGroup({
      task: new FormControl('',Validators.compose([Validators.required])),
      name: new FormControl('',Validators.compose([Validators.required])),
      last: new FormControl('',Validators.compose([Validators.required])),
      email: new FormControl('',Validators.compose([Validators.required])),
      phone: new FormControl('',Validators.compose([Validators.required])),
      date_ini: new FormControl('',Validators.compose([Validators.required])),
      classification: new FormControl('',Validators.compose([Validators.required])),
    })
  }

  inserirTarefa(dados:any){
   this.service.incluirDados(dados).subscribe(()=>{
      this.roteamento.navigate(['/list'])
    })
  }

}
