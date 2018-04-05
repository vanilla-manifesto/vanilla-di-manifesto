export interface Foo {
  getSomething(): number;
}


// The name of concrete classes should represent its behavior.
// For ecample, this class return always 42, so we can name it as "-Const".
// But you can still name as "-Impl" or "-Default" if there are no ways.
export class FooConst implements Foo {
  getSomething(): number {
    return 42;
  }
}
