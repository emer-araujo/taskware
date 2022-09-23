import { Component, OnInit, Input } from '@angular/core';
import { StorageApiService } from 'src/app/services/storage-api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-tasks',
  templateUrl: './edit-tasks.component.html',
  styleUrls: ['./edit-tasks.component.css']
})
export class EditTasksComponent implements OnInit {
  title: string = "Editar Tarefa"

  constructor(
    public service: StorageApiService,
    public roteamento: Router,
    public migalhas: ActivatedRoute
  ) { }
  
  copiaRota = this.migalhas.snapshot.params['id']
  listTasks: any
  @Input() oldTasks:any = {
    task: '',
    name: '',
    last: '',
    email: '',
    phone: '',
    date_ini: '',
    classification: '',
    status: '',
  }

  ngOnInit(): void {
    this.service.lerUmDado(this.copiaRota).subscribe((dados:any)=>{
      this.oldTasks = dados
    })
    /* Grupo de Formulário rastreia o valor e o estado de validação do formulário */ 
    this.listTasks = new FormGroup({
      task: new FormControl('',Validators.compose([Validators.required])),
      name: new FormControl('',Validators.compose([Validators.required])),
      last: new FormControl('',Validators.compose([Validators.required])),
      email: new FormControl('',Validators.compose([Validators.required, Validators.email])),
      phone: new FormControl('',Validators.compose([Validators.required])),
      date_ini: new FormControl('',Validators.compose([Validators.required])),
      date_end: new FormControl('',Validators.compose([Validators.required])),
      classification: new FormControl('',Validators.compose([Validators.required])),
      status: new FormControl('',Validators.compose([Validators.required])),
    })
  }
  
  atualizarTarefa(dados:any){
    if(confirm("Tem certeza que deseja alterar o registro?") && confirm("Certeza mesmo??")){
      this.service.editarDados(this.copiaRota, dados).subscribe(()=>{
        this.roteamento.navigate(['/list'])
      })
    }
  }
}
