/* eslint-disable @typescript-eslint/no-empty-object-type */
import { InputHTMLAttributes } from "react";

interface IProps extends InputHTMLAttributes<HTMLInputElement> {}

const Input = ({ ...rest }: IProps) => {
  return (
    <div>
      <label htmlFor="username"></label>
      <input
        className="w-full p-3 rounded-md border-[1px] border-gray-300 shadow-md focus:border-[#149eca] focus:outline-none"
        type="text"
        id="username"
        {...rest}
      />
    </div>
  );
};

export default Input;
