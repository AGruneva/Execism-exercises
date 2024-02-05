export class BankAccount {
  #balance = 0;
  #isOpen = false;
  open() {
    if(this.#isOpen) {
      throw new ValueError('Account is already opened');
    }
    this.#isOpen = true;
  }
  close() {
    if(!this.#isOpen) {
      throw new ValueError('Account is already closed');
    }
    this.#balance = 0;
    this.#isOpen = false;
  }
  deposit(amount) {
    if(!this.#isOpen) {
      throw new ValueError('Account is closed');
    } 
    if(amount < 0) {
      throw new ValueError('You can not deposit negative amount');
    }
    this.#balance += amount;
  }
  withdraw(amount) {
    if(!this.#isOpen) {
      throw new ValueError('Account is closed');
    } 
    if(amount > this.#balance) {
      throw new ValueError('Not enough money to withdraw');
    } 
    if(amount < 0) {
      throw new ValueError('You can not withdraw negative amount');
    } 
    this.#balance -= amount;
  }
  get balance() {
    if(!this.#isOpen) {
      throw new ValueError('Account is closed');
    }
    return this.#balance;
  }
}
export class ValueError extends Error {
  constructor() {
    super('Bank account error');
  }
}
