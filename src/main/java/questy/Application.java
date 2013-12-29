package questy;

import org.springframework.boot.SpringApplication;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

import questy.config.WebConfig;

public class Application extends WebMvcConfigurerAdapter {

	public static void main(String[] args) {
		SpringApplication.run(WebConfig.class, args);
	}

}