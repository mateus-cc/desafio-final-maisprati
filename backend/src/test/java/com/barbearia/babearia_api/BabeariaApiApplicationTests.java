package com.barbearia.babearia_api;

import org.junit.jupiter.api.Test;
import static org.mockito.Mockito.mockStatic;
import static org.mockito.Mockito.times;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class BabeariaApiApplicationTests {

	@Test
	void contextLoads() {
	}

	@Test
	void mainDelegatesToSpringApplication() {
		String[] arguments = {"--spring.main.web-application-type=none"};

		try (var springApplication = mockStatic(SpringApplication.class)) {
			BabeariaApiApplication.main(arguments);

			springApplication.verify(
				() -> SpringApplication.run(BabeariaApiApplication.class, arguments),
				times(1));
		}
	}

}
