import { Component, OnInit } from '@angular/core';
import { StorageApiService } from 'src/app/services/storage-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  welcome:any = "Bem-vindo"
  totalTsk:any
  openTsk:any 
  pctTsk: number = 0
  constructor(public service:StorageApiService) { }
    
  openTasks(){

    function isOpen(obj:any) {
      return obj.status == "Aberta"
    }
    
    this.service.lerDados().subscribe((dados:any)=>{
      this.totalTsk = dados.length
      this.openTsk = dados.filter(isOpen).length
      // Quantidade Tasks abertas / Quantidade Total 0.6 * 100 = 60%
      this.pctTsk = this.openTsk/this.totalTsk*100
      // Arrendondamento 66.66 -> 67
      this.pctTsk = Math.round(this.pctTsk)
    })
  }

  ngOnInit(): void {
    this.openTasks()
  }


}
