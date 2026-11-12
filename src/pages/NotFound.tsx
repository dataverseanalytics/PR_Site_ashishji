import { Link } from "react-router-dom";
import { useSeo } from "../hooks/useSeo";
import { pageSeo } from "../config/seo";

export const NotFound = () => {
  useSeo(pageSeo.notFound);
  return (
    <div className="bg-deep-navy min-h-[60vh] flex flex-col items-center justify-center text-center px-6 py-24">
      <h1 className="text-4xl font-serif text-white mb-4">Page Not Found</h1>
      <Link to="/" className="text-gold hover:underline">Return to Home</Link>
    </div>
  );
};
