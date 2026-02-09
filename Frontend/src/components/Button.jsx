import React from 'react'

const Button = ({
    children,
    type = "button",
    onClick,
    loading=false,
    disabled=false,
    className=" ",
}) => {
    return (
        <>
            <button 
            type={type}
            onClick={onClick}
            disabled={disabled||loading}
            className={`px-4 py-2 rounded-md font-medium transition duration-200 
                ${loading ? "opacity-50 cursor-not-allowed" : "hover:opacity-90"} 
                bg-black text-white ${className}`}
                >
                    {loading?"Loading...":children}
                </button>
        </>
    );
};
export default Button;
