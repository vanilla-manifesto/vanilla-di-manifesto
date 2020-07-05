package vanilladi;

import org.assertj.core.api.Assertions.assertThat
import org.assertj.core.api.Assertions.catchThrowable
import org.junit.Test;

class FooBarUserTest {
    @Test
    fun sociableTest() {
        // Arrange
        val sut = FooBarUser(Foo(), Bar());

        // Act
        val thrown = catchThrowable { sut.danceWithDependencies() };

        // Assert
        assertThat(thrown).isNull();
    }

    @Test
    fun solitaryTest() {
        // Arrange
        val barSpy = BarSpy();
        val sut = FooBarUser(FooStub(1234), barSpy);

        // Act
        sut.danceWithDependencies();

        // Assert
        assertThat(barSpy.getCalledArgs()).containsExactly(1234);
    }
}
