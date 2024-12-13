import React from "react";

interface AvatarProps {
    name: string;
}

const Avatar: React.FC<AvatarProps> = ({ name }) => {
    const initial = name.charAt(0).toUpperCase();

    return (
        <div className="w-12 h-12 flex items-center justify-center bg-accent text-background rounded-full">
            {initial}
        </div>
    );
};

export default Avatar;
