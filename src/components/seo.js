import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";

const Seo = ({ title }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  console.log(data);

  return (
    <title>
      {data.site.siteMetadata.title} | {title}
    </title>
  );
};

export default Seo;
