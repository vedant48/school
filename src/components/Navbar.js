import React, { useState, useEffect, useRef } from 'react';
import { Link, Outlet } from 'react-router-dom';

function Navbar() {
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isNewsOpen, setIsNewsOpen] = useState(false);
  const aboutDropdownRef = useRef(null);
  const newsDropdownRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        aboutDropdownRef.current && !aboutDropdownRef.current.contains(event.target) &&
        newsDropdownRef.current && !newsDropdownRef.current.contains(event.target)
      ) {
        setIsAboutOpen(false);
        setIsNewsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  const toggleAboutDropdown = () => {
    setIsAboutOpen(!isAboutOpen);
    setIsNewsOpen(false);
  };

  const toggleNewsDropdown = () => {
    setIsNewsOpen(!isNewsOpen);
    setIsAboutOpen(false);
  };

  return (
    <>
      <nav className="bg-gray-800">
        <div className="container mx-auto px-4">
          <ul className="flex space-x-4 py-4">
            <li>
              <Link to="/" className="text-white hover:text-gray-300">
                Home
              </Link>
            </li>
            <li className="relative" ref={aboutDropdownRef}>
              <button
                className="text-white hover:text-gray-300"
                onClick={toggleAboutDropdown}
              >
                About Us
              </button>
              {isAboutOpen && (
                <ul className="absolute left-0 mt-2 bg-white p-2 shadow-lg">
                  <li>
                    <Link to="/about/us" className="block py-1 w-40">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link to="/about/mission" className="block py-1 w-40">
                      Mission and Vision
                    </Link>
                  </li>
                  <li>
                    <Link to="/about/facilities" className="block py-1">
                      Facilities
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li className="relative" ref={newsDropdownRef}>
              <button
                className="text-white hover:text-gray-300"
                onClick={toggleNewsDropdown}
              >
                Academic
              </button>
              {isNewsOpen && (
                <ul className="absolute left-0 mt-2 bg-white p-2 shadow-lg">
                  <li>
                    <Link to="/academic/admission-procedure" className="block py-1 w-40">
                      Admission Procedure
                    </Link>
                  </li>
                  <li>
                    <Link to="/academic/event" className="block py-1 w-40">
                      Activities and Event
                    </Link>
                  </li>
                  <li>
                    <Link to="/academic/teacher" className="block py-1">
                      Teaching staff
                    </Link>
                  </li>
                  <li>
                    <Link to="/academic/alumni" className="block py-1">
                      Alumni
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            <li>
              <Link
                to="/contact"
                className="text-white hover:text-gray-300"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="/student-login"
                className="text-white hover:text-gray-300"
              >
                Student Login
              </Link>
            </li>
            <li>
              <Link
                to="/teacher-login"
                className="text-white hover:text-gray-300"
              >
                Teacher Login
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <Outlet />
    </>
  );
}

export default Navbar;
