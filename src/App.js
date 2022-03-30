import { Routes, Route, Navigate } from "react-router";
import Home from "./views/Home/Home";
import Contacts from "./views/Contacts/Contacts";
import Navbar from "./components/Navbar/Navbar";
import ContactDetail from "./views/Contacts/ContactDetail";
import ContactForm from "./views/ContactForm/ContactForm";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/contacts" element={<Contacts/>} />
        <Route path="/contacts/new" element={<ContactForm/>} />
        <Route path="/contacts/:id" element={<ContactDetail/>} />
        <Route path="*" element={<Navigate to="/" replace/>} />
      </Routes>
    </div>
  );
}

export default App;
