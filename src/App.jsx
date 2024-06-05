import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ContactUs from "./pages/ContactUs";
import Service from "./pages/Service";
import AboutUs from "./pages/AboutUs";
import Testimonals from "./pages/Testimonals";
import AppLayout from "./pages/AppLayout";

BrowserRouter;
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout/>}>
        <Route path="/" element={<HomePage />} />
        <Route path="service" element={<Service />} />
        <Route path="contact-us" element={<ContactUs />} />
        <Route path="about-us" element={<AboutUs />} />
        <Route path="testimonals" element={<Testimonals />} />
        </Route>
      </Routes>
    </BrowserRouter>

  );
}
export default App;