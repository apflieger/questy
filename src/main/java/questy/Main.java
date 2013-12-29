package questy;

import java.io.File;

import org.apache.catalina.Context;
import org.apache.catalina.startup.Tomcat;
import org.apache.tomcat.util.scan.StandardJarScanner;

public class Main {

	public static void main(String[] args) throws Exception {

		Tomcat tomcat = new Tomcat();

		// The port that we should run on can be set into an environment
		// variable
		// Look for that variable and default to 8080 if it isn't there.
		String webPort = System.getenv("PORT");
		if (webPort == null || webPort.isEmpty()) {
			webPort = "8080";
		}

		tomcat.setPort(Integer.valueOf(webPort));
		Context ctx = tomcat.addWebapp("/",
				new File("src/main/webapp/").getAbsolutePath());

		StandardJarScanner scan = (StandardJarScanner) ctx.getJarScanner();
		scan.setScanAllDirectories(true);

		tomcat.start();
		tomcat.getServer().await();
	}
}