import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { FaPhone, FaWhatsapp, FaTimes } from "react-icons/fa";

const CallModal = ({
  isOpen,
  onClose,
  title = "Contact SSS Hospital",
  primaryNumber = "0424 - 2888777",
  secondaryNumber = "+91 7729 888777",
  whatsappNumber = "+91 7729 888777",
}) => {
  if (!isOpen) return null;

  const formatPhoneNumber = (number) => number.replace(/[^0-9+]/g, "");

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4 sm:px-6">
      <button
        type="button"
        aria-label="Close dialog"
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 border border-slate-200"
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-slate-800">
              {title}
            </h3>
            <p className="text-sm text-slate-500 mt-1">
              Choose your preferred contact method
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-slate-100 rounded-full transition-colors"
            aria-label="Close"
          >
            <FaTimes className="text-slate-400 text-sm" />
          </button>
        </div>

        {/* Contact Options */}
        <div className="space-y-3">
          {/* Primary Phone */}
          <a
            href={`tel:${formatPhoneNumber(primaryNumber)}`}
            onClick={onClose}
            className="flex items-center gap-4 p-4 rounded-xl border border-slate-200 hover:border-emerald-300 hover:bg-emerald-50 transition-all duration-200 group"
          >
            <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-emerald-200">
              <FaPhone className="text-white text-lg" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-sm font-semibold text-slate-800 truncate">
                {primaryNumber}
              </div>
            </div>
          </a>

          {/* Secondary Phone */}
          {secondaryNumber && secondaryNumber !== primaryNumber && (
            <a
              href={`tel:${formatPhoneNumber(secondaryNumber)}`}
              onClick={onClose}
              className="flex items-center gap-4 p-4 rounded-xl border border-slate-200 hover:border-blue-300 hover:bg-blue-50 transition-all duration-200 group"
            >
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-blue-200">
                <FaPhone className="text-white text-lg" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-sm font-semibold text-slate-800 truncate">
                  {secondaryNumber}
                </div>
              </div>
            </a>
          )}

          {/* WhatsApp */}
          <a
            href={`https://wa.me/${formatPhoneNumber(
              whatsappNumber
            )}?text=Hello, I would like to book an appointment at SSS Hospital.`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="flex items-center gap-4 p-4 rounded-xl border border-slate-200 hover:border-green-300 hover:bg-green-50 transition-all duration-200 group"
          >
            <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-green-200">
              <FaWhatsapp className="text-white text-lg" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-sm font-semibold text-slate-800 truncate">
                WhatsApp Chat
              </div>
              <div className="text-xs text-slate-500">Send us a message</div>
            </div>
          </a>
        </div>

        {/* Footer */}
        <div className="mt-6 pt-4 border-t border-slate-100">
          <p className="text-xs text-slate-400 text-center">
            Available 24/7 for your healthcare needs
          </p>
        </div>
      </motion.div>
    </div>
  );
};

CallModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string,
  primaryNumber: PropTypes.string,
  secondaryNumber: PropTypes.string,
  whatsappNumber: PropTypes.string,
};

export default CallModal;
