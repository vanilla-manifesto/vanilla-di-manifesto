import {Bar} from "./bar";


export class BarSpy implements Bar {
  readonly calledArgs: number[] = [];


  doSomething(value: number): void {
    this.calledArgs.push(value);
  }
}

