import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Layout } from "@/components/site/Layout";
import { SEO } from "@/components/site/SEO";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <Layout>
      <SEO
        title="Page Not Found — Websbond"
        description="The page you are looking for does not exist."
        path="/404"
      />
      <div className="flex min-h-[60vh] items-center justify-center">
        <div className="text-center">
          <div className="font-display font-extrabold text-8xl text-accent">404</div>
          <h1 className="mt-4 text-2xl font-bold">Page not found</h1>
          <p className="mt-2 text-muted-foreground">The page you're looking for doesn't exist or was moved.</p>
          <Link
            to="/"
            className="mt-8 inline-flex items-center gap-2 bg-accent text-accent-foreground font-semibold px-6 py-3 rounded-2xl hover:shadow-float transition"
          >
            Return to Home
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
