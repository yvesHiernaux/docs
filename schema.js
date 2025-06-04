// Documentation-specific schema markup
const createDocumentationSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "headline": document.title,
    "description": document.querySelector('meta[name="description"]')?.content || "",
    "url": window.location.href,
    "datePublished": "2024-01-01", // Update with actual date
    "dateModified": "2024-01-01",  // Update with actual date
    "author": {
      "@type": "Organization",
      "name": "Your Company Name",
      "url": "https://yourcompany.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Your Company Name",
      "logo": {
        "@type": "ImageObject",
        "url": "https://yoursite.com/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": window.location.href
    }
  };
};

// Function to inject schema
function injectSchema(schema) {
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(schema);
  document.head.appendChild(script);
}

// Add schema when page loads
document.addEventListener('DOMContentLoaded', function() {
  const schema = createDocumentationSchema();
  injectSchema(schema);
});