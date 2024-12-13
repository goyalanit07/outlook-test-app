import React from "react";
import EmailCard from "./EmailCard";
import { EmailType } from "../types/EmailType";


interface EmailListProps {
  emails: EmailType[];
  onSelect: (id: string) => void;
  readEmails: string[];
  favorites: string[];
  selectedEmail: string | null;
}

const EmailList: React.FC<EmailListProps> = ({ emails, onSelect, readEmails, selectedEmail, favorites }) => {
  return (
    <ul>
      {emails.map((email) => (
        <EmailCard
          key={email.id}
          email={email}
          isSelected={selectedEmail === email.id}
          isRead={readEmails.includes(email.id)}
          isfavorite={favorites.includes(email.id)}
          onSelect={onSelect}
        />
      ))}
    </ul>
  );
};

export default EmailList;