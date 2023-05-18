import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Teacher from "./components/Teacher";
import Alumni from "./components/Alumni";
import Contact from "./components/Contact";
import NoPage from "./components/NoPage";
import HomePage from './pages/HomePage';
import StudentLoginPage from './pages/StudentLoginPage';
import TeacherLoginPage from './pages/TeacherLoginPage';
import Admission from './components/Admission';
import Event from './components/Event';
import AboutUs from './components/AboutUs';
import Facilities from './components/Facalities';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Navbar />

        <Routes>
        <Route path="/">
          <Route index element={<HomePage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="academic/teacher" element={<Teacher />} />
          <Route path="academic/alumni" element={<Alumni />} />
          <Route path="academic/admission-procedure" element={<Admission />} />
          <Route path="academic/event" element={<Event />} />
          <Route path="about/us" element={<AboutUs />} />
          <Route path="about/facilities" element={<Facilities />} />
          <Route path="/student-login" element={<StudentLoginPage />} />
          <Route path="/teacher-login" element={<TeacherLoginPage />} />
          <Route path="*" element={<NoPage />} />
        </Route>

          {/* <Route exact path="/" element={HomePage} />
          Add more routes for other pages */}
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
