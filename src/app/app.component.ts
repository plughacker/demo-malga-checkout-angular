import { Component } from '@angular/core';

import {
  MalgaCheckoutTransactionSuccessEvent,
  MalgaCheckoutTransactionErrorEvent,
} from './app.types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  paymentMethods = {
    pix: {
      expiresIn: 3600,
    },
    credit: {
      installments: {
        quantity: 1,
        show: true,
      },
      checkedSaveCard: false,
      showCreditCard: true,
    },
    boleto: {
      expiresDate: '2022-12-31',
      instructions: 'Instruções para pagamento do boleto',
      interest: {
        days: 1,
        amount: 100,
      },
      fine: {
        days: 2,
        amount: 200,
      },
    },
  };

  transactionConfig = {
    statementDescriptor: '#1 Demonstration Malga Checkout',
    amount: 100,
    description: '',
    orderId: '',
    customerId: '<CUSTOMER_ID>',
    currency: 'BRL',
    capture: false,
  };

  dialogConfig = {
    show: true,
    actionButtonLabel: 'Continuar',
    errorActionButtonLabel: 'Tentar novamente',
    successActionButtonLabel: 'Continuar',
    successRedirectUrl: 'https://www.malga.io/',
  };

  handlePaymentSuccess(data: MalgaCheckoutTransactionSuccessEvent) {
    console.log(data);
  }

  handlePaymentFailed(error: MalgaCheckoutTransactionErrorEvent) {
    console.log(error);
  }
}
