package questy.servlet;

import java.io.BufferedReader;
import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.JSONObject;
import org.json.JSONWriter;

@WebServlet(name = "Login", urlPatterns = { "/login" })
public class Login extends HttpServlet {

	@Override
	protected void doPost(HttpServletRequest req, HttpServletResponse resp)
			throws ServletException, IOException {
		BufferedReader reader = req.getReader();
		JSONObject json = new JSONObject(reader.readLine());
		String userName = (String) json.get("username");
		String password = (String) json.get("password");
		boolean isKnown = "apf".equals(userName) && "apf".equals(password);

		JSONWriter out = new JSONWriter(resp.getWriter());
		out.object();
		out.key("known");
		out.value(isKnown);
		out.endObject();

	}
}