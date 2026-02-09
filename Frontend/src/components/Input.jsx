import React from 'react'

import { forwardRef } from 'react'

const Input = forwardRef(({
    label,
    type = "text",
    name,
    placeholder,
    error,
    disabled = false,
    className = " ",
    ...props
}, ref
) => {
    return (
        <>
            <div className="flex flex-col gap-1 w-full">
                {label && (
                    <label className="text-sm font-medium text-gray-700">
                        {label}
                    </label>
                )}

                <input
                    ref={ref}
                    type={type}
                    name={name}
                    placeholder={placeholder}
                    disabled={disabled}
                    className={`px-3 py-2 border rounded-md outline-none transition 
            focus:ring-2 focus:ring-black 
            ${error ? "border-red-500" : "border-gray-300"} 
            ${disabled ? "bg-gray-100 cursor-not-allowed" : ""} 
            ${className}`}
                    {...props}
                />
                {error && (
                    <p className="text-sm text-red-500">{error}</p>
                )}
            </div>
        </>
    );
}
);

export default Input;