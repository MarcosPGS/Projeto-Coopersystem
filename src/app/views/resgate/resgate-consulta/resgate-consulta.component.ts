import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Investimentos } from '../../../core/template/modal/investimentos';
import { ResgateService } from '../resgate.service';

@Component({
  selector: 'app-resgate-consulta',
  templateUrl: './resgate-consulta.component.html',
  styleUrls: ['./resgate-consulta.component.css']
})
export class ResgateConsultaComponent implements OnInit {

  displayedColumns: string[] = ['nome', 'objetivo', 'saldoTotalDisponivel', 'acoes'];
  dataSource = new MatTableDataSource<Investimentos>();
  investimentos: Investimentos[] = [];
  investimento: Investimentos = new Investimentos();

  constructor(private resgateService: ResgateService, private router: Router) { }

  ngOnInit(): void {
    this.listarTodosInvestimentos();
  }

  listarTodosInvestimentos(): void {
    this.resgateService.getInvestimento().subscribe((resp) => {
     this.investimentos = resp.response.data.listaInvestimentos;
    });
  }

  detalhar(i: Investimentos): void{
    this.investimento = i;
    this.router.navigate(['/resgate-detalhe'], {
      queryParams: { investimento: JSON.stringify(i) },
      skipLocationChange: true
    });
  }

}
