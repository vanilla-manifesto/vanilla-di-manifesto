package vanilladi;

import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.Assertions.catchThrowable;

import org.junit.Test;

public class FooBarUserTest {
    @Test
    public void sociableTest() {
        // Arrange
        var sut = new FooBarUser(new Foo(), new Bar());

        // Act
        Throwable thrown = catchThrowable(() -> sut.danceWithDependencies());

        // Assert
        assertThat(thrown).isNull();
    }

    @Test
    public void solitaryTest() {
        // Arrange
        var barSpy = new BarSpy();
        var sut = new FooBarUser(new FooStub(1234), barSpy);

        // Act
        sut.danceWithDependencies();

        // Assert
        assertThat(barSpy.getCalledArgs()).containsExactly(1234);
    }
}
