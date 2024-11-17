import { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  label: string; 
};

const Button = ({ label, className = '', ...props }:ButtonProps) => (
    <button
      {...props} 
      className={`px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600 disabled:bg-gray-400 disabled:cursor-not-allowed ${className}`}
    >
      {label}
    </button>)
;

export default Button;
