import React from "react";
interface Props {
  status?: string;
  originalLanguage?: string;
  revenue?: string;
  budget?: string;
}
const Facts: React.FC<Props> = ({
  originalLanguage,
  revenue,
  status,
  budget,
}) => {
  return (
    <ul className="mb-6">
      <li className="flex flex-col my-4 font-light text-sm">
        <span className="font-semibold text-base">Status</span>
        {status ?? "-"}
      </li>
      <li className="flex flex-col my-4 font-light text-sm">
        <span className="font-semibold text-base">Original Language</span>
        {originalLanguage ?? "-"}
      </li>
      <li className="flex flex-col my-4 font-light text-sm">
        <span className="font-semibold text-base">Budget</span>
        {budget ?? "-"}
      </li>
      <li className="flex flex-col my-4 font-light text-sm">
        <span className="font-semibold text-base">Revenue</span>
        {revenue ?? "-"}
      </li>
    </ul>
  );
};

export default Facts;
