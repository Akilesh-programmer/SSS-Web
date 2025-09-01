import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes, FaPhone, FaEnvelope } from "react-icons/fa";
import sssLogo from "../assets/sss-logo.jpeg";
import AppointmentPopup from "./AppointmentPopup";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isAppointmentOpen, setIsAppointmentOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    if (location.pathname === "/") {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        setIsOpen(false);
      }
    }
  };

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Specialties", path: "/#specialties", isScroll: true },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md"
          : "bg-white/80 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-3">
          {/* Logo Section */}
          <div className="flex items-center gap-3">
            <img
              src={sssLogo}
              alt="SSS Hospital Logo"
              className="w-10 h-10 rounded-full object-cover shadow-md"
            />
            <div className="hidden sm:block">
              <h1 className="text-lg font-bold text-emerald-900">
                SSS Super Speciality Hospital
              </h1>
              <p className="text-xs text-gray-600">Excellence in Healthcare</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) =>
              item.isScroll ? (
                <button
                  key={item.name}
                  onClick={() => scrollToSection("specialties")}
                  className="text-gray-700 hover:text-emerald-600 font-medium transition-colors duration-200 relative group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-600 transition-all duration-200 group-hover:w-full"></span>
                </button>
              ) : (
                <Link
                  key={item.name}
                  to={item.path}
                  className="text-gray-700 hover:text-emerald-600 font-medium transition-colors duration-200 relative group"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-600 transition-all duration-200 group-hover:w-full"></span>
                </Link>
              )
            )}
          </div>

          {/* Contact Info & CTA */}
          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <FaPhone className="text-emerald-600" />
              <span>Emergency: +91 9876543210</span>
            </div>
            <button
              onClick={() => setIsAppointmentOpen(true)}
              className="bg-emerald-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-emerald-700 transition-colors duration-200 shadow-md hover:shadow-lg"
            >
              Book Appointment
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-gray-700 hover:text-emerald-600 transition-colors"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-md shadow-lg border-t">
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) =>
                item.isScroll ? (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection("specialties")}
                    className="block w-full text-left text-gray-700 hover:text-emerald-600 font-medium py-2 transition-colors"
                  >
                    {item.name}
                  </button>
                ) : (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className="block w-full text-left text-gray-700 hover:text-emerald-600 font-medium py-2 transition-colors"
                  >
                    {item.name}
                  </Link>
                )
              )}
              <div className="pt-4 border-t space-y-3">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <FaPhone className="text-emerald-600" />
                  <span>Emergency: +91 9876543210</span>
                </div>
                <button
                  onClick={() => {
                    setIsAppointmentOpen(true);
                    setIsOpen(false);
                  }}
                  className="w-full bg-emerald-600 text-white py-3 rounded-full font-semibold hover:bg-emerald-700 transition-colors inline-block text-center"
                >
                  Book Appointment
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Appointment Popup */}
      <AppointmentPopup
        isOpen={isAppointmentOpen}
        onClose={() => setIsAppointmentOpen(false)}
      />
    </nav>
  );
};

export default Navigation;
