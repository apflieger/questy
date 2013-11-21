package questy.servlet;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.JSONWriter;

@WebServlet(name = "Login", urlPatterns = { "/login" })
public class Login extends HttpServlet {

	@Override
	protected void doPost(HttpServletRequest req, HttpServletResponse resp)
			throws ServletException, IOException {
		String userName = req.getParameter("username");
		String password = req.getParameter("password");
		boolean isKnown = "apf".equals(userName) && "apf".equals(password);

		JSONWriter out = new JSONWriter(resp.getWriter());
		out.array();
		out.value(isKnown);
		out.endArray();
	}
}