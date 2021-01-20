import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegateRoutingModule } from './regate-routing.module';
import { RegateConsultaComponent } from './regate-consulta/regate-consulta.component';
import { RegateDetalhesComponent } from './regate-detalhes/regate-detalhes.component';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RegateService } from './regate.service';



@NgModule({
  declarations: [RegateConsultaComponent, RegateDetalhesComponent],
  imports: [
  CommonModule,
    RegateRoutingModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule

  ], exports: [RegateConsultaComponent, RegateDetalhesComponent ],
  providers: [ RegateService]
})
export class RegateModule { }
