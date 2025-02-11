import { BrowserRouter as Router, Routes, Route } from "react-router";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import SignUp from "./pages/Signup";
import SignIn from "./pages/SignIn";
import SignOut from "./pages/SignOut";
import NotFound from "./pages/NotFound";
import Contact from "./pages/Contact";
import EventDetails from "./pages/EventDetails"; // Import EventDetails

function App() {
  return (
    <Router> {/* Wrapping everything with Router */}
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="signin" element={<SignIn />} />
          <Route path="signout" element={<SignOut />} />
          <Route path="contact" element={<Contact />} />
          <Route path="events/:id" element={<EventDetails />} /> {/* Event Details Route */}
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
