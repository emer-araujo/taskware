import { Component, OnInit } from '@angular/core';
import { StorageApiService } from 'src/app/services/storage-api.service';
@Component({
  selector: 'app-list-tasks',
  templateUrl: './list-tasks.component.html',
  styleUrls: ['./list-tasks.component.css']
})
export class ListTasksComponent implements OnInit {

  ngOnInit(): void {
    this.showTasks()
  }

  title:string = 'Listagem de Tarefas'
  taskList:any = []

  constructor(public service: StorageApiService) { }

  showTasks(){
    this.service.lerDados().subscribe((dados:{})=>{
      this.taskList = dados
    })
  }

  deleteTask(id:any){
    if(confirm('Realmente vai excluir!???') && confirm('Tem Certeza?') && confirm('Mesmo?')){
      this.service.deletarDados(id).subscribe(()=>{
        this.showTasks()
      })
    }
  }
}
