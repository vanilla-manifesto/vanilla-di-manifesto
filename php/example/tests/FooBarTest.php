<?php

require_once dirname(__FILE__).'/../FooBarUser.php';
require_once dirname(__FILE__).'/../Foo.php';
require_once dirname(__FILE__).'/../Bar.php';

require_once dirname(__FILE__).'/../FooStub.php';
require_once dirname(__FILE__).'/../BarSpy.php';


$tests = new FooBarTest();
$tests->testFooBar();
$tests->testProduction();


class FooBarTest {

    function testFooBar()
    {
        $barSpy = new BarSpy();

        $fooBarUser = new FooBarUser(
            new Dependency(
                new FooStub(1234),
                $barSpy
            )
        );

        $fooBarUser->danceWithDependancies();

        assert($barSpy->callArgs == [1234]);
    }

    function testProduction()
    {
        $fooBarUser = new FooBarUser(
            new Dependency(
                new FooConst(),
                new BarNull()
            )
        );

        $fooBarUser->danceWithDependancies();
    }

}
