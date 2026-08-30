import { useEffect } from "react";
import PropTypes from "prop-types";
import {
  generateMetaTags,
  applyMetaTags,
  insertStructuredData,
  generateOrganizationSchema,
  generateHospitalSchema,
  generateBreadcrumbSchema,
} from "../../utils/seo";

/**
 * SEO Component - Manages meta tags and structured data for each page
 * Usage: <SEO {...pageData} />
 */
const SEO = ({
  title,
  description,
  keywords = [],
  image,
  url,
  type = "website",
  breadcrumbs = [],
  schema = null,
  noindex = false,
}) => {
  // Synchronous execution for SSG pre-rendering (Puppeteer captures DOM immediately during build)
  if (typeof document !== "undefined") {
    const metaTags = generateMetaTags({
      title,
      description,
      image,
      url,
      type,
      noindex,
    });

    applyMetaTags(metaTags);

    // Always inject organization + hospital schemas on every page
    // AI crawlers (ChatGPT, Claude, Gemini) and Googlebots may visit any page directly,
    // so every page must carry the hospital's authoritative entity data (name, address, hours, rating, phone)
    insertStructuredData(generateOrganizationSchema());
    insertStructuredData(generateHospitalSchema());

    if (breadcrumbs && breadcrumbs.length > 0) {
      insertStructuredData(generateBreadcrumbSchema(breadcrumbs));
    }

    if (schema) {
      insertStructuredData(schema);
    }
  }

  useEffect(() => {
    const metaTags = generateMetaTags({
      title,
      description,
      image,
      url,
      type,
      noindex,
    });

    applyMetaTags(metaTags);

    // Always inject organization + hospital schemas on every page
    insertStructuredData(generateOrganizationSchema());
    insertStructuredData(generateHospitalSchema());

    if (breadcrumbs && breadcrumbs.length > 0) {
      insertStructuredData(generateBreadcrumbSchema(breadcrumbs));
    }

    if (schema) {
      insertStructuredData(schema);
    }
  }, [
    title,
    description,
    keywords,
    image,
    url,
    type,
    breadcrumbs,
    schema,
    noindex,
  ]);

  // This component doesn't render anything
  return null;
};

SEO.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  keywords: PropTypes.arrayOf(PropTypes.string),
  image: PropTypes.string,
  url: PropTypes.string,
  type: PropTypes.string,
  breadcrumbs: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ),
  schema: PropTypes.object,
  noindex: PropTypes.bool,
};

export default SEO;
