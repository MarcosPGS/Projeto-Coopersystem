import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Investimentos } from 'src/app/core/template/modal/investimentos';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-resgate-detalhe',
  templateUrl: './resgate-detalhe.component.html',
  styleUrls: ['./resgate-detalhe.component.css']
})
export class ResgateDetalheComponent implements OnInit {

  displayedColumns: string[] = ['acao', 'saldoAcumulado', 'valorRegatar'];
  dataSource = new MatTableDataSource<Investimentos>();
  investimento: Investimentos = new Investimentos();
  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.activatedRoute.queryParams.subscribe(resp => {
      if (resp.investimento) {
        this.investimento = JSON.parse(resp.investimento);
        console.log('cheguei no detalhe =>', this.investimento);
      }
    });
  }

}
