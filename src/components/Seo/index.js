import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";
import { useLocation } from "@reach/router";
import favicon from "assets/imgs/favicon-48.png";

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        title
        titleTemplate
        description
        siteUrl
        lang
      }
    }
  }
`;

const SEO = ({ pageTitle, articleDescription, imageUrl }) => {
  const { site } = useStaticQuery(query);
  const { pathname } = useLocation();

  const { title, titleTemplate, description, lang, siteUrl } =
    site.siteMetadata;

  const metaDescription = articleDescription || description;
  const metaImage = imageUrl;

  return (
    <Helmet
      defaultTitle={title}
      title={pageTitle}
      titleTemplate={titleTemplate}
      htmlAttributes={{ lang }}
      link={[{ rel: "icon", type: "image/png", href: favicon }]}
      meta={[
        {
          name: `google-site-verification`,
          content: "aLk2ouZ5Z0wTnhGaYSU_g2GuzM4ri4GIocbuVa2wotU",
        },
        {
          name: `description`,
          content: description,
        },
        {
          property: `og:title`,
          content: pageTitle,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:url`,
          content: siteUrl + pathname,
        },
        {
          property: `og:image`,
          content: metaImage,
        },
        {
          name: `twitter:title`,
          content: pageTitle,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: "twitter:card",
          content: "summary_large_image",
        },
      ]}
    />
  );
};

export default SEO;

SEO.propTypes = {
  title: PropTypes.string,
  titleTemplate: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  article: PropTypes.bool,
};
SEO.defaultProps = {
  title: null,
  titleTemplate: null,
  description: null,
  image: null,
  article: false,
};
