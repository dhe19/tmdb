import React from "react";

interface Props {
  credist?: Array<Cast>;
}
const Credits: React.FC<Props> = ({ credist }) => {
  return (
    <ul className="grid grid-cols-3 gap-3 items-center mt-8">
      {credist?.map((e) => (
        <li className="flex flex-col">
          <span className="font-medium text-sm">{e?.name ?? "-"}</span>
          <span className="font-light text-sm">
            {e?.knownForDepartment ?? "-"}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default Credits;
