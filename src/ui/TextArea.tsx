/* eslint-disable @typescript-eslint/no-empty-object-type */
import { TextareaHTMLAttributes } from "react"

interface IProps extends TextareaHTMLAttributes<HTMLTextAreaElement>{}

const TextArea = ({...rest}: IProps) =>{
    return(
        <textarea className="border-[1px] w-full border-gray-300 shadow-md focus:border-[#149eca] focus:online-none focus:ring-1" 
        rows={10}
        {...rest}
        />
    )
}
export default TextArea;