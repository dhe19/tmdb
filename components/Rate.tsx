import React from "react";
interface Props extends StylingProps {
  rate: string;
}
const Rate: React.FC<Props> = ({ rate, className }) => {
  const porcentage = Number(rate) - 100;
  return (
    <div className={className}>
      <div className="progress-card">
        <div className="progress-circle h-12 w-12 border-4 border-[#1b1b1b]">
          <div className="progress-content h-9 w-9">
            <span className="progText text-[11px]">{rate}%</span>
          </div>
          <div
            className="progress w-12 h-12"
            style={{ bottom: `${porcentage}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Rate;
