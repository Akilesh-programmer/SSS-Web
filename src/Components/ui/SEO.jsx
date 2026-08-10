import { useEffect } from "react";
import PropTypes from "prop-types";
import {
  generateMetaTags,
  applyMetaTags,
  insertStructuredData,
  generateOrganizationSchema,
  generateLocalBusinessSchema,
  generateHospitalWithRatingSchema,
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
  includeGlobalSchemas = false,
}) => {
  // Synchronous execution for SSG pre-rendering (Puppeteer captures DOM immediately during build)
  if (typeof document !== "undefined") {
    const metaTags = generateMetaTags({
      title,
      description,
      keywords,
      image,
      url,
      type,
      noindex,
    });

    applyMetaTags(metaTags);

    // Only inject global organization/hospital schemas on the homepage
    if (includeGlobalSchemas) {
      insertStructuredData(generateOrganizationSchema());
      insertStructuredData(generateLocalBusinessSchema());
      insertStructuredData(generateHospitalWithRatingSchema());
    }

    if (breadcrumbs && breadcrumbs.length > 0) {
      insertStructuredData(generateBreadcrumbSchema(breadcrumbs));
    }

    if (schema) {
      insertStructuredData(schema);
    }
  }

  useEffect(() => {
    // Generate and apply meta tags on client-side route changes
    const metaTags = generateMetaTags({
      title,
      description,
      keywords,
      image,
      url,
      type,
      noindex,
    });

    applyMetaTags(metaTags);

    // Only inject global organization/hospital schemas on the homepage
    if (includeGlobalSchemas) {
      insertStructuredData(generateOrganizationSchema());
      insertStructuredData(generateLocalBusinessSchema());
      insertStructuredData(generateHospitalWithRatingSchema());
    }

    // Add breadcrumbs if provided
    if (breadcrumbs && breadcrumbs.length > 0) {
      insertStructuredData(generateBreadcrumbSchema(breadcrumbs));
    }

    // Add custom schema if provided
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
    includeGlobalSchemas,
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
  includeGlobalSchemas: PropTypes.bool,
};

export default SEO;
