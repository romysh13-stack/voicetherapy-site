import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Booking from "./pages/Booking";
import Contacts from "./pages/Contacts";
import Articles from "./pages/Articles";
import ArticleDetail from "./pages/ArticleDetail";
import Audio from "./pages/Audio";
import Pricing from "./pages/Pricing";
import Groups from "./pages/Groups";
import HomeEn from "./pages/en/Home";
import AboutEn from "./pages/en/About";
import PricingEn from "./pages/en/Pricing";
import ContactsEn from "./pages/en/Contacts";
import BookingEn from "./pages/en/Booking";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="articles" element={<Articles />} />
        <Route path="articles/:slug" element={<ArticleDetail />} />
        <Route path="audio" element={<Audio />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="groups" element={<Groups />} />
        <Route path="booking" element={<Booking />} />
        <Route path="contacts" element={<Contacts />} />

        <Route path="en" element={<HomeEn />} />
        <Route path="en/about" element={<AboutEn />} />
        <Route path="en/pricing" element={<PricingEn />} />
        <Route path="en/contacts" element={<ContactsEn />} />
        <Route path="en/booking" element={<BookingEn />} />
      </Route>
    </Routes>
  );
}
