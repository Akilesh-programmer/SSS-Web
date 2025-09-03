import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaRobot,
  FaComments,
  FaPaperPlane,
  FaTimes,
  FaUserMd,
  FaHospital,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaClock,
  FaPhone,
  FaUser,
} from "react-icons/fa";

const FloatingChatbot = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: "bot",
      content:
        "👋 Hello! I'm your AI assistant for SSS Hospital. How can I help you today?",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const quickQuestions = [
    {
      icon: FaClock,
      question: "What are your visiting hours?",
      answer:
        "Our OPD hours are Mon-Sat: 9AM-8PM. Emergency services are available 24/7.",
    },
    {
      icon: FaCalendarAlt,
      question: "How do I book an appointment?",
      answer:
        "You can book an appointment by calling +91 7729-888777 or using our online booking system.",
    },
    {
      icon: FaUserMd,
      question: "What specialties do you offer?",
      answer:
        "We offer 25+ specialties including Cardiology, Neurology, Orthopedics, Pediatrics, and more.",
    },
    {
      icon: FaMapMarkerAlt,
      question: "Where is the hospital located?",
      answer:
        "We're located at 167/2C1, Perundurai Rd, Diamond Nagar, Nalliyampalayam, Erode, Tamil Nadu 638009.",
    },
    {
      icon: FaPhone,
      question: "Emergency contact number?",
      answer:
        "For emergencies, call +91 7729-888777. We provide 24/7 emergency services.",
    },
    {
      icon: FaHospital,
      question: "What facilities do you have?",
      answer:
        "We have 150+ beds, 30+ ICU beds, 4 operating theatres, and state-of-the-art medical equipment.",
    },
  ];

  const handleQuickQuestion = (questionData) => {
    const userMessage = {
      id: Date.now(),
      type: "user",
      content: questionData.question,
      timestamp: new Date(),
    };

    const botMessage = {
      id: Date.now() + 1,
      type: "bot",
      content: questionData.answer,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage, botMessage]);
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage = {
      id: Date.now(),
      type: "user",
      content: inputValue,
      timestamp: new Date(),
    };

    const botMessage = {
      id: Date.now() + 1,
      type: "bot",
      content:
        "Thank you for your question! Our medical team will get back to you shortly. For immediate assistance, please call +91 7729-888777.",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage, botMessage]);
    setInputValue("");
  };

  return (
    <>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, scale: 0, y: 100 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0, y: 100 }}
            className="fixed bottom-6 left-6 z-40"
          >
            {/* Main chatbot button */}
            <motion.button
              onClick={() => setIsChatOpen(true)}
              className="group relative bg-gradient-to-r from-violet-500 to-purple-600 text-white w-16 h-16 flex items-center justify-center rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaRobot className="text-2xl" />

              {/* Pulsing animation */}
              <motion.div
                className="absolute inset-0 rounded-full"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0, 0.5, 0],
                  boxShadow: [
                    "0 0 0 0 rgba(139, 92, 246, 0.7)",
                    "0 0 0 15px rgba(139, 92, 246, 0)",
                    "0 0 0 0 rgba(139, 92, 246, 0)",
                  ],
                }}
                style={{
                  backgroundColor: "rgba(139, 92, 246, 0.2)",
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Tooltip */}
              <span className="absolute left-20 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-4 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                AI Assistant
                <span className="absolute right-full top-1/2 -translate-y-1/2 border-4 border-transparent border-r-gray-900"></span>
              </span>
            </motion.button>

            {/* Floating particles */}
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-violet-400 rounded-full"
                  animate={{
                    y: [-20, -60],
                    x: [0, (i - 1) * -20],
                    opacity: [1, 0],
                    scale: [0, 1, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.3,
                    ease: "easeOut",
                  }}
                  style={{
                    left: "50%",
                    top: "20%",
                  }}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Enhanced Chat Interface */}
      <AnimatePresence>
        {isChatOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setIsChatOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 50 }}
              className="bg-white rounded-3xl w-full max-w-2xl h-[600px] max-h-[90vh] overflow-hidden shadow-2xl border border-purple-200"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Chat Header */}
              <div className="bg-gradient-to-r from-violet-500 to-purple-600 text-white p-6 relative overflow-hidden">
                {/* Background decoration */}
                <div className="absolute inset-0 opacity-20">
                  <svg width="100%" height="100%" viewBox="0 0 100 100">
                    <pattern
                      id="chatPattern"
                      x="0"
                      y="0"
                      width="20"
                      height="20"
                      patternUnits="userSpaceOnUse"
                    >
                      <circle
                        cx="10"
                        cy="10"
                        r="3"
                        fill="white"
                        fillOpacity="0.1"
                      />
                    </pattern>
                    <rect width="100%" height="100%" fill="url(#chatPattern)" />
                  </svg>
                </div>

                <div className="relative flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/30">
                      <FaRobot className="text-2xl" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">
                        AI Medical Assistant
                      </h3>
                      <p className="text-sm text-purple-100">
                        SSS Hospital Helper • Online
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => setIsChatOpen(false)}
                    className="text-white/80 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-full"
                  >
                    <FaTimes className="text-lg" />
                  </button>
                </div>
              </div>

              {/* Chat Content */}
              <div className="flex flex-col h-full">
                {/* Messages Area */}
                <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-gradient-to-b from-purple-50/50 to-white">
                  {messages.map((message) => (
                    <motion.div
                      key={message.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`flex ${
                        message.type === "user"
                          ? "justify-end"
                          : "justify-start"
                      }`}
                    >
                      <div
                        className={`flex items-start gap-3 max-w-[80%] ${
                          message.type === "user" ? "flex-row-reverse" : ""
                        }`}
                      >
                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                            message.type === "user"
                              ? "bg-gradient-to-r from-emerald-500 to-teal-500"
                              : "bg-gradient-to-r from-violet-500 to-purple-600"
                          }`}
                        >
                          {message.type === "user" ? (
                            <FaUser className="text-white text-sm" />
                          ) : (
                            <FaRobot className="text-white text-sm" />
                          )}
                        </div>
                        <div
                          className={`p-4 rounded-2xl shadow-sm ${
                            message.type === "user"
                              ? "bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-tr-sm"
                              : "bg-white border border-purple-100 text-gray-800 rounded-tl-sm"
                          }`}
                        >
                          <p className="text-sm leading-relaxed">
                            {message.content}
                          </p>
                          <p
                            className={`text-xs mt-2 ${
                              message.type === "user"
                                ? "text-emerald-100"
                                : "text-gray-500"
                            }`}
                          >
                            {message.timestamp.toLocaleTimeString()}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Quick Questions */}
                <div className="p-4 border-t border-purple-100 bg-gradient-to-r from-purple-50/30 to-violet-50/30">
                  <p className="text-sm font-semibold text-gray-700 mb-3">
                    Quick Questions:
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    {quickQuestions.slice(0, 4).map((question, index) => (
                      <button
                        key={index}
                        className="flex items-center gap-2 p-3 bg-white hover:bg-purple-50 rounded-xl transition-colors text-left text-sm text-gray-700 hover:text-purple-700 border border-purple-100 hover:border-purple-200"
                        onClick={() => handleQuickQuestion(question)}
                      >
                        <question.icon className="text-purple-500 flex-shrink-0" />
                        <span className="truncate">{question.question}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Input Area */}
                <div className="p-4 border-t border-purple-100 bg-white">
                  <div className="flex gap-3">
                    <input
                      type="text"
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      onKeyPress={(e) =>
                        e.key === "Enter" && handleSendMessage()
                      }
                      placeholder="Ask me anything about SSS Hospital..."
                      className="flex-1 p-3 border border-purple-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none text-sm bg-purple-50/30"
                    />
                    <button
                      onClick={handleSendMessage}
                      className="bg-gradient-to-r from-violet-500 to-purple-600 text-white p-3 rounded-xl hover:shadow-lg transition-all duration-200 disabled:opacity-50"
                      disabled={!inputValue.trim()}
                    >
                      <FaPaperPlane className="text-sm" />
                    </button>
                  </div>
                  <p className="text-xs text-gray-500 mt-2 text-center">
                    🤖 AI Assistant • Powered by SSS Hospital
                  </p>
                </div>
              </div>

              {/* Floating medical icons decoration */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {[
                  { icon: FaUserMd, delay: 0, x: 85, y: 20 },
                  { icon: FaHospital, delay: 0.5, x: 10, y: 30 },
                  { icon: FaCalendarAlt, delay: 1, x: 90, y: 70 },
                  { icon: FaClock, delay: 1.5, x: 15, y: 80 },
                ].map((item, i) => (
                  <motion.div
                    key={`decoration-${i}`}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{
                      opacity: [0, 0.3, 0.1],
                      scale: [0, 1, 0.8],
                      rotate: [0, 360],
                    }}
                    transition={{
                      delay: item.delay,
                      duration: 4,
                      repeat: Infinity,
                      repeatType: "reverse",
                    }}
                    className="absolute text-purple-300"
                    style={{
                      left: `${item.x}%`,
                      top: `${item.y}%`,
                    }}
                  >
                    <item.icon className="text-lg" />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default FloatingChatbot;
