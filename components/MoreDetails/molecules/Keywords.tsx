import React from "react";

interface Props {
  keywords?: Array<string>;
}
const Keywords: React.FC<Props> = ({ keywords }) => {
  return (
    <div>
      <h3 className="font-semibold text-lg">Keywords</h3>
      <ul className="flex flex-wrap gap-1 text-sm">
        {keywords?.map((e, i) => (
          <li
            key={i}
            className="bg-gray-300 rounded-lg px-2 py-1 border border-gray-400"
          >
            {e}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Keywords;
