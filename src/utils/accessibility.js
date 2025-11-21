/**
 * Accessibility Utilities for SSS Hospital Website
 * WCAG 2.1 AA Compliance Helpers
 */

/**
 * Announces message to screen readers
 * @param {string} message - Message to announce
 * @param {string} priority - 'polite' or 'assertive'
 */
export const announceToScreenReader = (message, priority = "polite") => {
  const announcement = document.createElement("div");
  announcement.setAttribute("role", "status");
  announcement.setAttribute("aria-live", priority);
  announcement.setAttribute("aria-atomic", "true");
  announcement.className = "sr-only";
  announcement.textContent = message;

  document.body.appendChild(announcement);

  // Remove after announcement
  setTimeout(() => {
    document.body.removeChild(announcement);
  }, 1000);
};

/**
 * Traps focus within a modal/dialog
 * @param {HTMLElement} element - Container element
 * @returns {Function} - Cleanup function
 */
export const trapFocus = (element) => {
  const focusableElements = element.querySelectorAll(
    'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'
  );

  const firstFocusable = focusableElements[0];
  const lastFocusable = focusableElements[focusableElements.length - 1];

  const handleTabKey = (e) => {
    if (e.key !== "Tab") {
      return;
    }

    if (e.shiftKey) {
      // Shift + Tab
      if (document.activeElement === firstFocusable) {
        e.preventDefault();
        lastFocusable.focus();
      }
    } else {
      // Tab
      if (document.activeElement === lastFocusable) {
        e.preventDefault();
        firstFocusable.focus();
      }
    }
  };

  element.addEventListener("keydown", handleTabKey);

  // Focus first element
  firstFocusable?.focus();

  // Cleanup function
  return () => {
    element.removeEventListener("keydown", handleTabKey);
  };
};

/**
 * Manages focus when modal opens/closes
 * @param {boolean} isOpen - Whether modal is open
 * @param {HTMLElement} modalElement - Modal element
 * @returns {Function} - Restore focus function
 */
export const manageFocusOnModal = (isOpen, modalElement) => {
  if (isOpen) {
    // Save current focused element
    const previouslyFocused = document.activeElement;

    // Trap focus in modal
    const cleanup = trapFocus(modalElement);

    // Return function to restore focus
    return () => {
      cleanup();
      previouslyFocused?.focus();
    };
  }
  return () => {};
};

/**
 * Checks if element has sufficient color contrast
 * @param {string} foreground - Foreground color (hex)
 * @param {string} background - Background color (hex)
 * @returns {Object} - Contrast ratio and WCAG compliance
 */
export const checkColorContrast = (foreground, background) => {
  const getLuminance = (color) => {
    const rgb = parseInt(color.slice(1), 16);
    const r = ((rgb >> 16) & 0xff) / 255;
    const g = ((rgb >> 8) & 0xff) / 255;
    const b = ((rgb >> 0) & 0xff) / 255;

    const [rs, gs, bs] = [r, g, b].map((c) =>
      c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4)
    );

    return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
  };

  const l1 = getLuminance(foreground);
  const l2 = getLuminance(background);
  const ratio = (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05);

  return {
    ratio: ratio.toFixed(2),
    AA: ratio >= 4.5,
    AAA: ratio >= 7,
    AALarge: ratio >= 3,
    AAALarge: ratio >= 4.5,
  };
};

/**
 * Adds keyboard navigation support
 * @param {Array} elements - Array of elements
 * @param {Function} onSelect - Callback when element is selected
 */
export const addKeyboardNavigation = (elements, onSelect) => {
  let currentIndex = 0;

  const handleKeyDown = (e) => {
    switch (e.key) {
      case "ArrowDown":
      case "ArrowRight":
        e.preventDefault();
        currentIndex = (currentIndex + 1) % elements.length;
        elements[currentIndex].focus();
        break;

      case "ArrowUp":
      case "ArrowLeft":
        e.preventDefault();
        currentIndex = (currentIndex - 1 + elements.length) % elements.length;
        elements[currentIndex].focus();
        break;

      case "Home":
        e.preventDefault();
        currentIndex = 0;
        elements[currentIndex].focus();
        break;

      case "End":
        e.preventDefault();
        currentIndex = elements.length - 1;
        elements[currentIndex].focus();
        break;

      case "Enter":
      case " ":
        e.preventDefault();
        onSelect(elements[currentIndex], currentIndex);
        break;

      default:
        break;
    }
  };

  elements.forEach((element, index) => {
    element.setAttribute("tabindex", index === 0 ? "0" : "-1");
    element.addEventListener("keydown", handleKeyDown);
    element.addEventListener("focus", () => {
      currentIndex = index;
    });
  });

  // Cleanup function
  return () => {
    elements.forEach((element) => {
      element.removeEventListener("keydown", handleKeyDown);
    });
  };
};

/**
 * Detects if user prefers reduced motion
 * @returns {boolean}
 */
export const prefersReducedMotion = () => {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
};

/**
 * Safely sets document title with fallback
 * @param {string} title - New page title
 */
export const setPageTitle = (title) => {
  if (!title) {
    return;
  }

  const baseTitle = "SSS Super Speciality Hospital";
  document.title = title.includes(baseTitle)
    ? title
    : `${title} | ${baseTitle}`;

  // Announce to screen readers
  announceToScreenReader(`Page loaded: ${title}`, "polite");
};

/**
 * Adds skip to content link functionality
 * @param {string} targetId - ID of main content element
 */
export const addSkipToContent = (targetId = "main-content") => {
  const skipLink = document.querySelector('a[href="#' + targetId + '"]');
  const target = document.getElementById(targetId);

  if (skipLink && target) {
    skipLink.addEventListener("click", (e) => {
      e.preventDefault();
      target.setAttribute("tabindex", "-1");
      target.focus();
      target.addEventListener(
        "blur",
        () => {
          target.removeAttribute("tabindex");
        },
        { once: true }
      );
    });
  }
};

/**
 * Checks if element is visible in viewport (for lazy loading)
 * @param {HTMLElement} element
 * @returns {boolean}
 */
export const isInViewport = (element) => {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

/**
 * Formats phone number for accessibility
 * @param {string} phone - Phone number
 * @returns {string} - Formatted for screen readers
 */
export const formatPhoneForA11y = (phone) => {
  // Remove non-digits
  const digits = phone.replace(/\D/g, "");

  // Format with spaces for better screen reader pronunciation
  if (digits.startsWith("91")) {
    // Indian format: +91 XXX XXX XXXX
    return `+91 ${digits.slice(2, 5)} ${digits.slice(5, 8)} ${digits.slice(8)}`;
  }

  return phone;
};

/**
 * Validates and enhances form accessibility
 * @param {HTMLFormElement} form
 */
export const enhanceFormAccessibility = (form) => {
  const inputs = form.querySelectorAll("input, textarea, select");

  inputs.forEach((input) => {
    // Ensure every input has a label
    const label = form.querySelector(`label[for="${input.id}"]`);
    if (!label && !input.getAttribute("aria-label")) {
      console.warn(`Input ${input.id} missing label or aria-label`);
    }

    // Add required indicator to label if input is required
    if (input.required && label) {
      if (!label.textContent.includes("*")) {
        label.innerHTML += ' <span aria-label="required">*</span>';
      }
    }

    // Add aria-invalid on validation errors
    input.addEventListener("invalid", () => {
      input.setAttribute("aria-invalid", "true");
    });

    input.addEventListener("input", () => {
      if (input.validity.valid) {
        input.setAttribute("aria-invalid", "false");
      }
    });
  });
};

/**
 * Improves focus visibility
 */
export const improveFocusVisibility = () => {
  // Add focus-visible polyfill behavior
  document.addEventListener("keydown", (e) => {
    if (e.key === "Tab") {
      document.body.classList.add("keyboard-navigation");
    }
  });

  document.addEventListener("mousedown", () => {
    document.body.classList.remove("keyboard-navigation");
  });
};

// Initialize on page load
if (typeof window !== "undefined") {
  improveFocusVisibility();
  addSkipToContent();
}

export default {
  announceToScreenReader,
  trapFocus,
  manageFocusOnModal,
  checkColorContrast,
  addKeyboardNavigation,
  prefersReducedMotion,
  setPageTitle,
  addSkipToContent,
  isInViewport,
  formatPhoneForA11y,
  enhanceFormAccessibility,
  improveFocusVisibility,
};
