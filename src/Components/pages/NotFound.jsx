import Footer from "../ui/Footer";
import SEO from "../ui/SEO";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Page Not Found"
        description="The page you are looking for doesn't exist."
        url="/404"
        noindex
        type="website"
      />
      <main className="flex-1 pb-16 px-6 text-center flex flex-col justify-center">
        <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
        <p className="text-gray-600">
          Please check the URL or go back to the homepage.
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
