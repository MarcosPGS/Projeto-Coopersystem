import {  Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Investimentos } from 'src/app/core/template/modal/investimentos';
import { MatTableDataSource } from '@angular/material/table';
import { Acoes } from '../../../core/template/modal/acoes';
import { FormBuilder, FormGroup } from '@angular/forms';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-resgate-detalhe',
  templateUrl: './resgate-detalhe.component.html',
  styleUrls: ['./resgate-detalhe.component.css']
})
export class ResgateDetalheComponent implements OnInit{
  displayedColumns: string[] = ['acao', 'saldoAcumulado', 'valorResgatar'];
  dataSource = new MatTableDataSource<Acoes>();
  investimento: Investimentos = new Investimentos();
  acoes: Acoes[] = [];
  formulario: FormGroup;
  valorTotalAuxiliar = [];
  valorTotal = 0;
  constructor(private router: Router, private activatedRoute: ActivatedRoute,  private fb: FormBuilder, ) {}


  ngOnInit(): void {
    this.formulario = this.fb.group({
      valor: ['']
    });

    this.activatedRoute.queryParams.subscribe(resp => {
      if (resp.investimento) {
        this.investimento = JSON.parse(resp.investimento);
        this.acoes = this.investimento.acoes;

      }
    });
  }


  onEvent(objeto: any, $event): void {
    this.valorTotal = 0;
    let valor = null;
    valor = $event;
    if (objeto.percentual < $event) {
      Swal.fire({
        position: 'center',
        icon: 'warning',
        title: '<strong>Oops...</strong>',
        text: 'O Valor do resgate não pode ser maior que o Saldo acumulado!',
        showConfirmButton: false,
        timer: 4000
      });
      this.valorTotal = 0;
    }
    if (objeto.percentual > $event) {
    this.valorTotalAuxiliar.push(valor);
    }

    this.valorTotal = this.valorTotalAuxiliar.reduce( (valorTotal, valor) => valorTotal + parseInt(valor), 0);

    if (this.valorTotal > parseInt(this.investimento.saldoTotalDisponivel) ) {
      Swal.fire({
        position: 'center',
        icon: 'warning',
        title: '<strong>Oops...</strong>',
        text: 'O Valor do resgate não pode ser maior que o Saldo total disponivel!',
        showConfirmButton: false,
        timer: 4000
      });
    }
  }
  voltar(): void {
    this.router.navigate(['/']);
  }

}
