import React from "react";
import { EmailCardProps } from "../types/EmailType";
import Avatar from "./Avatar";

function capitalizeFirstChar(string: string): string {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const EmailCard: React.FC<EmailCardProps> = ({ email, isSelected, isRead, isfavorite, onSelect }) => {
  const formattedDate = new Date(email.date).toLocaleString();

  return (
    <li
      key={email.id}
      onClick={() => onSelect(email.id)}
      className={`p-4 m-2 flex items-center gap-4 cursor-pointer rounded-md text-text 
        ${isSelected ? "border-2 border-accent" : "border-2 border-border"} 
        ${isRead ? "bg-readBackground" : "bg-white"}`}
    >
      <Avatar name={email.from.name.charAt(0).toUpperCase()} />

      <div className="flex-1">
        <p className="text-sm">
          From: <span className="font-bold">{`${capitalizeFirstChar(email.from.name)} <${email.from.email}>`}</span>
        </p>
        <p className="text-sm">
          Subject: <span className="font-bold">{email.subject}</span>
        </p>
        <p className="text-sm">{email.short_description}</p>
        <div className="flex items-center gap-4">
          <p className="text-xs text-text">{formattedDate}</p>
          <p className="text-xs text-accent font-bold">{isfavorite ? 'Favorite' : ''}</p>
        </div>
      </div>
    </li>
  );
};


export default EmailCard;
