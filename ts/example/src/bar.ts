export interface Bar {
  doSomething(value: number): void;
}


// The name of concrete classes should represent its behavior.
// For ecample, this class do nothing, so we can name it as "-Null".
// But you can still name as "-Impl" or "-Default" if there are no ways.
export class BarNull implements Bar {
  doSomething(value: number): void {
    // Do something.
  }
}
