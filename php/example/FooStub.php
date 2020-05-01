<?php

require_once 'Foo.php';

class FooStub implements Foo
{
    private int $nextValue;

    function __construct(int $firstValue)
    {
        $this->nextValue = $firstValue;
    }

    function getSomething(): int
    {
        return $this->nextValue;
    }
}