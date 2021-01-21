import {  Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Investimentos } from 'src/app/core/template/modal/investimentos';
import { MatTableDataSource } from '@angular/material/table';
import { Acoes } from '../../../core/template/modal/acoes';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import Swal from 'sweetalert2';
import { ModalResgateComponent } from '../modal-resgate/modal-resgate.component';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';



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
  valorTotal = 0;
  constructor(private router: Router, private activatedRoute: ActivatedRoute,  private fb: FormBuilder, public dialog: MatDialog, ) {

  }


  ngOnInit(): void {
    this.formulario = this.fb.group({
      valor: [''],
    });

    this.activatedRoute.queryParams.subscribe(resp => {
      if (resp.investimento) {
        this.investimento = JSON.parse(resp.investimento);
        this.acoes = this.investimento.acoes;
      }
    });
  }

  confirmar(): void {
    this.valorTotal = 0;
    for (const acao of this.acoes) {

      if (acao.parcial > acao.percentual) {

        Swal.fire({
          position: 'center',
          icon: 'warning',
          title: '<strong>Oops...</strong>',
          text: 'O Valor do resgate não pode ser maior que o Saldo acumulado!',
          showConfirmButton: false,
          timer: 4000
        });
      }

      if (acao.parcial < acao.percentual) {
        this.valorTotal = this.valorTotal + acao.parcial;
    }

      if (parseInt(this.investimento.saldoTotalDisponivel) < this.valorTotal) {
      Swal.fire({
              position: 'center',
              icon: 'warning',
              title: '<strong>Oops...</strong>',
              text: 'O Valor do resgate não pode ser maior que o Saldo total disponivel!',
              showConfirmButton: false,
              timer: 4000
            });
    }

      if (this.valorTotal <= 0) {
    Swal.fire({
        position: 'center',
        icon: 'warning',
        title: '<strong>Oops...</strong>',
        text: 'Preencher os valores a resgatar da forma que deseja!',
        showConfirmButton: false,
        timer: 4000
      });
    }
  }

    if (this.valorTotal > 0) {
    this.dialog.open(ModalResgateComponent, {});
    }

}

voltar(): void {
    this.router.navigate(['/']);
  }
}

