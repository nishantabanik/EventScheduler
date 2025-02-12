import { BrowserRouter as Router, Routes, Route } from "react-router"; //import BrowserRouter, Routes, Route from react-router
import MainLayout from "./layouts/MainLayout"; //import MainLayout
import Home from "./pages/Home"; //import Home
import SignUp from "./pages/Signup"; //Import SigUp
import SignIn from "./pages/SignIn"; //import SignIn
import SignOut from "./pages/SignOut"; //import SignOut
import NotFound from "./pages/NotFound"; // Import NotFound
import Contact from "./pages/Contact"; // Import Contact
import EventDetails from "./pages/EventDetails"; // Import EventDetails

function App() {
  return (
    <Router>
      {" "}
      {/* Wrapping everything with Router */}
      <Routes>
        <Route path="/" element={<MainLayout />}>
          {/* MainLayout Route */}
          <Route index element={<Home />} />
          {/* Home Route */}
          <Route path="signup" element={<SignUp />} />
           {/* Sign Up Route */}
          <Route path="signin" element={<SignIn />} />
          {/* Sign In Route */}
          <Route path="signout" element={<SignOut />} />
          {/* SignOut Route */}
          <Route path="contact" element={<Contact />} /> 
          {/* Contact Route */}
          <Route path="events/:id" element={<EventDetails />} />{" "}
          {/* Event Details Route */}
        </Route>
        <Route path="*" element={<NotFound />} />
        {/* NotFound Route */}
      </Routes>
    </Router>
  );
}

export default App;
