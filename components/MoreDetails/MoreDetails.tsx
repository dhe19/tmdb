import React from "react";
import Social from "./molecules/Social";
import Keywords from "./molecules/Keywords";
import Facts from "./molecules/Facts";

interface Props extends StylingProps {
  links?: MovieSocialMedia;
  status?: string;
  originalLanguage?: string;
  revenue?: string;
  keywords?: Array<string>;
  homepage?: string;
}
const MoreDetails: React.FC<Props> = ({
  className,
  links,
  status,
  originalLanguage,
  revenue,
  keywords,
  homepage,
}) => {
  return (
    <div className={className}>
      <Social links={links} homepage={homepage} />
      <Facts
        status={status}
        originalLanguage={originalLanguage}
        revenue={revenue}
      />
      <Keywords keywords={keywords} />
    </div>
  );
};

export default MoreDetails;
