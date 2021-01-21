import { TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';



import { ResgateService } from './resgate.service';
import { environment } from 'src/environments/environment';
import { RetornoDados } from 'src/app/core/template/modal/retorno';
import { Investimentos } from 'src/app/core/template/modal/investimentos';

describe('ResgateService', (): void => {
  let service: ResgateService,  httpController: HttpTestingController;
 

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        BrowserAnimationsModule,
        NoopAnimationsModule
      ],
      providers: [ResgateService]
    });
    service = TestBed.inject(ResgateService);
    httpController = TestBed.inject(HttpTestingController);
  });

  it('Deve testar classe servico', () => {
    expect(service).toBeTruthy();
  });

  it('Deve testar o metodo ', () => {
    expect(service.getInvestimento()).toBeTruthy();
  });
});
