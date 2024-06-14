import static org.junit.Assert.*;

import org.junit.Before;
import org.junit.Test;

import junit.framework.Assert;

public class CalculationTest {
	
	@Before
	public void beforeAnotation() {
		System.out.println("This will print before all the test cases!");
	}

	@Test
	public void testAddition() {
		int a =10;
		int b=10;
		int expected = 20;
		int result = Calculation.addition(a, b);
		Assert.assertEquals(expected, result);
	}

	@Test
	public void testSubtraction() {
		int a =10;
		int b=10;
		int expected = 0;
		int result = Calculation.subtraction(a, b);
		Assert.assertEquals(expected, result);
		
	}

}
