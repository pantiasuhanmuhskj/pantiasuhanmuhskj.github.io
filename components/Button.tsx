"use client";

type ButtonProps = {
  type: "button" | "submit";
  title: string;
  icon?: React.ReactNode;
  variant: "btn_green" | "btn_dark_green";
};
const Button = ({ type, title, icon, variant }: ButtonProps) => {
  return (
    <button
      className={`flexCenter gap-3 rounded-full border ${variant}`}
      type={type}>
      {icon}
      <label className="bold-16 whitespace-nowrap cursor-pointer">
        {title}
      </label>
    </button>
  );
};

export default Button;
