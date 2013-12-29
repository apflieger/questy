package questy.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class LoginController {

	@RequestMapping(value = "/login")
	public String get() {
		return "login.html";
	}

	// @RequestMapping(value = "/login", method = RequestMethod.POST)
	// public String login(@RequestParam(value = "login") String username,
	// @RequestParam(value = "password") String password, Model model)
	// throws ServletException, IOException {
	//
	// boolean isKnown = "apf".equals(username) && "apf".equals(password);
	//
	// if (isKnown) {
	// // creation de la session
	// // HttpSession session = req.getSession();
	// // session.setAttribute("login", username);
	//
	// return "questy";
	// } else {
	// return "";
	// }
	//
	// }

}