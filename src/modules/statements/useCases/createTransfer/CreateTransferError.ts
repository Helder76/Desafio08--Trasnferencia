import { AppError } from "../../../../shared/errors/AppError";

export class SenderError extends AppError {
  constructor() {
    super('Sender account not found', 404);
  }
}

export class ReceiverError extends AppError {
  constructor() {
    super('Receiver account not found', 404);
  }
}

export class BalanceError extends AppError {
  constructor() {
    super('There is not enough balance to make the transfer!', 400);
  }
}