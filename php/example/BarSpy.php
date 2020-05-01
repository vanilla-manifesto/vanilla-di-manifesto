<?php

require_once 'Bar.php';

class BarSpy implements Bar
{

    public $callArgs = [];

    function doSomething(int $value)
    {
        array_push($this->callArgs, $value);
    }
}