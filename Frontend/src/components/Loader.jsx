import React from "react";

const Loader = ({ fullScreen = false }) => {
    return (
        <div
            className={`${fullScreen ? "fixed inset-0" : "absolute inset-0"
                } bg-white/70 backdrop-blur-sm flex items-center justify-center z-50`}
        >
            <div className="h-12 w-12 animate-spin rounded-full border-4 border-black border-t-transparent"></div>
        </div>
    );
};

export default Loader;