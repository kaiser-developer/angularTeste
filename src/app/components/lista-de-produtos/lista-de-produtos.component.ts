import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from 'src/app/services/http.service'
import { Produtos } from 'src/app/models/produtos';
import { Grupo } from 'src/app/models/Grupo';

@Component({
  selector: 'app-lista-de-produtos',
  templateUrl: './lista-de-produtos.component.html',
  styleUrls: ['./lista-de-produtos.component.css']
})
export class ListaDeProdutosComponent implements OnInit {

  @Input() grupoAtivo: Grupo;
  public listaDeProdutos: Produtos[] = [];

  constructor(private http: HttpService) { 
    this.http.getProdutos().subscribe(data => {
      data.forEach(produto => {
        this.listaDeProdutos.push(produto);
      })
    });
  }

  ngOnInit(): void {
  }

}
