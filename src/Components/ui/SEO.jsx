import { useEffect } from "react";
import PropTypes from "prop-types";
import {
  generateMetaTags,
  applyMetaTags,
  insertStructuredData,
  generateOrganizationSchema,
  generateLocalBusinessSchema,
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
  useEffect(() => {
    // Generate and apply meta tags
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

    // Add organization schema (always present)
    insertStructuredData(generateOrganizationSchema());

    // Add local business schema (always present)
    insertStructuredData(generateLocalBusinessSchema());

    // Add breadcrumbs if provided
    if (breadcrumbs && breadcrumbs.length > 0) {
      insertStructuredData(generateBreadcrumbSchema(breadcrumbs));
    }

    // Add custom schema if provided
    if (schema) {
      insertStructuredData(schema);
    }

    // Cleanup function
    return () => {
      // Meta tags will be replaced by next page
      // Structured data will be updated by next page
    };
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
