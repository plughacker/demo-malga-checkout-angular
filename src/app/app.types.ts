interface MalgaCheckoutBoletoTransactionSuccess {
  id: string;
  clientId: string;
  createdAt: string;
  amount: number;
  statementDescriptor: string;
  capture: boolean;
  status: string;
  currency: string;
  description: string | null;
  orderId: string | null;
  paymentMethod: {
    paymentType: string;
    barcodeData: string;
    barcodeImageUrl: string;
    expiresDate: string;
  };
  paymentSource: {
    sourceType: string;
    customerId: string;
  };
  transactionRequests: {
    id: string;
    updatedAt: string;
    createdAt: string;
    idempotencyKey: string;
    requestId: string | null;
    providerId: string;
    amount: number;
    authorizationCode: string;
    authorizationNsu: string;
    responseCode: string;
    requestStatus: string;
    requestType: string;
    responseTs: string;
  }[];
}

interface MalgaCheckoutBoletoTransactionError {
  type: string;
  message: string;
  errorStack: unknown;
}

interface MalgaCheckoutCreditTransactionSuccess {
  id: string;
  clientId: string;
  createdAt: string;
  amount: number;
  statementDescriptor: string;
  capture: boolean;
  status: string;
  paymentMethod: {
    installments: number;
    paymentType: string;
  };
  paymentSource: {
    sourceType: string;
    cardId: string;
  };
  transactionRequests: {
    id: string;
    updatedAt: string;
    createdAt: string;
    idempotencyKey: string;
    requestId: string | null;
    providerId: string;
    amount: number;
    authorizationCode: string;
    authorizationNsu: string;
    responseCode: string;
    requestStatus: string;
    requestType: string;
    responseTs: string;
  }[];
}

interface MalgaCheckoutCreditTransactionError {
  type: string;
  message: string;
  code?: number;
  declinedCode?: string;
  errorStack: unknown;
}

interface MalgaCheckoutPixTransactionSuccess {
  id: string;
  clientId: string;
  createdAt: string;
  amount: number;
  statementDescriptor: string;
  capture: boolean;
  status: string;
  currency: string;
  description: string | null;
  orderId: string | null;
  paymentMethod: {
    expiresIn: number;
    paymentType: string;
    qrCodeData: string;
    qrCodeImageUrl: string;
  };
  paymentSource: {
    sourceType: string;
    customerId: string;
  };
  transactionRequests: {
    id: string;
    updatedAt: string;
    createdAt: string;
    idempotencyKey: string;
    requestId: string | null;
    providerId: string;
    amount: number;
    authorizationCode: string;
    authorizationNsu: string;
    responseCode: string;
    requestStatus: string;
    requestType: string;
    responseTs: string;
    pix: {
      expiresIn: number;
      qrCodeData: string;
      qrCodeImageUrl: string;
    };
  }[];
}

interface MalgaCheckoutPixTransactionError {
  type: string;
  message: string;
  errorStack: unknown;
}

type MalgaCheckoutTransactionSuccess =
  | MalgaCheckoutBoletoTransactionSuccess
  | MalgaCheckoutCreditTransactionSuccess
  | MalgaCheckoutPixTransactionSuccess;

type MalgaCheckoutTransactionError =
  | MalgaCheckoutBoletoTransactionError
  | MalgaCheckoutCreditTransactionError
  | MalgaCheckoutPixTransactionError;

export type MalgaCheckoutTransactionSuccessEvent = CustomEvent<{
  data: MalgaCheckoutTransactionSuccess;
}>;

export type MalgaCheckoutTransactionErrorEvent = CustomEvent<{
  error: MalgaCheckoutTransactionError;
}>;
