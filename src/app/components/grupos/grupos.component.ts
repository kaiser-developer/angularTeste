import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Grupo } from '../../models/Grupo';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-grupos',
  templateUrl: './grupos.component.html',
  styleUrls: ['./grupos.component.css']
})
export class GruposComponent implements OnInit {

  @Output() grupoClicado = new EventEmitter();

  public grupos: Grupo[] = [];
  constructor(private http: HttpService) { 
    this.http.getGrupos().subscribe(
      (data) => {
        this.grupos.push(data[0], data[1], data[2])
      }
    );
  }

  ngOnInit(): void {
  }

}
