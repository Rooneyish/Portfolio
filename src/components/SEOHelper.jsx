import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

const siteUrl = "https://www.ronishprajapati.com.np";

const SEOHelper = ({ title, description, imageUrl, type = "website" }) => {
  const { pathname } = useLocation();
  const canonicalUrl = `${siteUrl}${pathname === "/" ? "/" : pathname.replace(/\/$/, "")}`;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:image" content={imageUrl} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
    </Helmet>
  );
};

export default SEOHelper;
