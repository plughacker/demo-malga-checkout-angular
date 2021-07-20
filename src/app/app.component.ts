import { Component } from '@angular/core';

import {
  PlugCheckoutOneShotSuccess,
  PlugCheckoutOneShotError,
} from './app.types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  installmentsConfig = { show: true, quantity: 2 };
  customFormStyleClasses = { submitButton: 'custom-submit-button' };

  handlePaymentSuccess(data: PlugCheckoutOneShotSuccess) {
    console.log(data);
  }

  handlePaymentFailed(error: PlugCheckoutOneShotError) {
    console.log(error);
  }
}
