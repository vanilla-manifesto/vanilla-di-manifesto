<?php

class Dependency
{
    public Foo $foo;
    public Bar $bar;

    function __construct(Foo $foo, Bar $bar)
    {
        $this->foo = $foo;
        $this->bar = $bar;
    }
}

class FooBarUser
{
    private Dependency $dependency;

    function __construct(Dependency $dependency)
    {
        $this->dependency = $dependency;
    }

    function danceWithDependancies ()
    {
        list($foo, $bar) = [$this->dependency->foo, $this->dependency->bar];
        $bar->doSomething($foo->getSomething());
    }
}