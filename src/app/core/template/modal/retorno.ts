import { Data } from '@angular/router';
import { Investimentos } from './investimentos';

export class RetornoDados{
    response: {
        status: string;
        data: {
            listaInvestimentos: Investimentos[];
        };
    };
}
