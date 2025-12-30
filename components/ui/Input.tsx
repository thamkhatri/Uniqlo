import { InputHTMLAttributes } from "react";
interface InputProps extends InputHTMLAttributes<HTMLInputElement> { }
export default function Input(props: InputProps) {
    return (
        <input
            className="border px-3 py-2 rounded w-full"
            {...props}
        />
    );
}
