<?php

interface Foo
{
    function getSomething(): int;
}


// The name of concrete classes should represent its behavior.
// For example, this class return always 42, so we can name it as "-Const".
// But you can still name as "-Impl" or "-Default" if there are no ways.
class FooConst implements Foo
{
    function getSomething(): int {
        return 42;
    }
}