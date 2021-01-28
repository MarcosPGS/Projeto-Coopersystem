import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResgateConsultaComponent } from './resgate-consulta/resgate-consulta.component';
import { ResgateDetalheComponent } from './resgate-detalhe/resgate-detalhe.component';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { ResgateService } from './resgate.service';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { CustomFormsModule } from 'ng2-validation';
import { LOCALE_ID } from '@angular/core';
import localePt from '@angular/common/locales/pt';
import {registerLocaleData} from '@angular/common';
import { ModalResgateComponent } from './modal-resgate/modal-resgate.component';
registerLocaleData(localePt);




@NgModule({
  declarations: [ResgateConsultaComponent, ResgateDetalheComponent, ModalResgateComponent],
  imports: [
  CommonModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    HttpClientModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    CurrencyMaskModule,
    CustomFormsModule
  ], exports: [ResgateConsultaComponent, ResgateDetalheComponent, ModalResgateComponent],
  providers: [ ResgateService, {provide: LOCALE_ID,
    useValue: 'pt-BR'}]
})
export class ResgateModule { }
