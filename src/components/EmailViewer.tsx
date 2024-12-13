import { useEffect, useState } from "react";
import { EmailType } from "../types/EmailType";
import Avatar from "./Avatar";

interface EmailViewerProps {
  emailId: string;
  emails: EmailType[];
  onToggleFavorite: (id: string) => void;
  isFavorite: boolean;
}

const EmailViewer: React.FC<EmailViewerProps> = ({ emailId, emails, onToggleFavorite, isFavorite }) => {
  const [emailBody, setEmailBody] = useState(null);

  function formatDate(emailDate: any): string {
    const formattedDate = new Date(emailDate).toLocaleString();
    return formattedDate;
  }


  useEffect(() => {
    if (emailId) {
      fetch(`https://flipkart-email-mock.vercel.app/?id=${emailId}`)
        .then((res) => res.json())
        .then((data) => setEmailBody(data.body));
    }
  }, [emailId]);

  const email = emails.find((e) => e.id === emailId);

  if (!email) return <p className="p-4">Select an email to view its details.</p>;

  return (
    <div className="p-4 border-2 border-border rounded-md m-2 flex gap-4">
      <div>
        <Avatar name={email.from.name.charAt(0).toUpperCase()} />
      </div>
      <div className="pr-4" >
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-xl font-bold">{email.subject}</h1>
            <p className="my-2 text-gray-500">{formatDate(email.date)}</p>
          </div>
          <button
            onClick={() => onToggleFavorite(email.id)}
            className="px-3 py-1 text-white text-sm rounded-full border-2 border-accent bg-accent hover:bg-accent-dark transition-colors"
          >
            {isFavorite ? "Unmark Favorite" : "Mark as Favorite"}
          </button>
        </div>
        <p
          className="mt-4"
          dangerouslySetInnerHTML={{
            __html: emailBody || "Loading email body..."
          }}
        />

      </div>
    </div>
  );
};

export default EmailViewer;
