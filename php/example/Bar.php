<?php

interface Bar
{
    function doSomething(int $value);
}


// The name of concrete classes should represent its behavior.
// For example, this class do nothing, so we can name it as "-Null".
// But you can still name as "-Impl" or "-Default" if there are no ways.
class BarNull implements Bar
{
    function doSomething(int $value)
    {}
}