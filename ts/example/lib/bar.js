"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// The name of concrete classes should represent its behavior.
// For ecample, this class do nothing, so we can name it as "-Null".
// But you can still name as "-Impl" or "-Default" if there are no ways.
class BarNull {
    doSomething(value) {
        // Do something.
    }
}
exports.BarNull = BarNull;
