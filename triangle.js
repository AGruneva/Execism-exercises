export class Triangle {
  constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
    this.valid = this.isTriangle(a, b, c);
  }
  get isEquilateral() {
    return this.a === this.b && this.b === this.c && this.a !== 0;
  }
  get isIsosceles() {
    return this.valid && (this.a === this.b || this.b === this.c || this.a === this.c);
  }
  get isScalene() {
    return this.valid && this.a !== this.b && this.b !== this.c;
  }
  isTriangle(a, b, c) {
    return a + b >= c && b + c >= a && a + c >= b;
  }
}
