package questy.servlet;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

@WebServlet(name = "App", urlPatterns = "/app")
public class App extends HttpServlet {
	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp)
			throws ServletException, IOException {
		HttpSession session = req.getSession(false);
		if (session != null && session.getAttribute("login") != null) {
			req.getRequestDispatcher("WEB-INF/app.jsp").forward(req, resp);
		} else {
			resp.sendRedirect("/login");
		}
	}
}
