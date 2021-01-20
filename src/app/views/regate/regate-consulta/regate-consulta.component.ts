import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-regate-consulta',
  templateUrl: './regate-consulta.component.html',
  styleUrls: ['./regate-consulta.component.css']
})
export class RegateConsultaComponent implements OnInit {
  displayedColumns: string[] = ['id', 'nome', 'cpf', 'acoes'];
  dataSource = new MatTableDataSource<any>();
  constructor() { }

  ngOnInit(): void {
  }

}
