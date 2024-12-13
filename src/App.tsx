import { useState, useEffect } from "react";
import EmailList from "./components/EmailList";
import EmailViewer from "./components/EmailViewer";
import FilterBar from "./components/FilterBar";
import Pagination from "./components/Pagination";
import { EmailType, FilterType } from "./types/EmailType";

const App = () => {
  const [emails, setEmails] = useState<EmailType[]>([]);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [filter, setFilter] = useState<FilterType>("all");
  const [readEmails, setReadEmails] = useState<string[]>([]);
  const [selectedEmail, setSelectedEmail] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, _setTotalPages] = useState(2);

  useEffect(() => {
    fetch(`https://flipkart-email-mock.now.sh/?page=${currentPage}`)
      .then((res) => res.json())
      .then((data) => setEmails(data.list));
  }, [currentPage]);

  const handleSelectEmail = (id: string): void => {
    if (!readEmails.includes(id)) {
      setReadEmails([...readEmails, id]);
    }
    setSelectedEmail(id);
  };


  const handleToggleFavorite = (id: string): void => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((favId) => favId !== id) : [...prev, id]
    );
  };

  const filteredEmails = emails.filter((email) => {
    if (filter === "favorites") return favorites.includes(email.id);
    if (filter === "read") return readEmails.includes(email.id);
    if (filter === "unread") return !readEmails.includes(email.id);
    return true;
  });

  return (
    <div>
      <FilterBar filter={filter} setFilter={setFilter} />
      <div className={`flex h-screen ${selectedEmail ? '' : 'justify-center'}`}>
        <div
          className={`transition-all duration-300 ease-in-out
             ${selectedEmail ? 'w-1/3 bg-white' : 'w-full'}`
          }
        >
          <EmailList
            emails={filteredEmails}
            onSelect={handleSelectEmail}
            readEmails={readEmails}
            selectedEmail={selectedEmail}
            favorites={favorites}
          />
          {filter === "all" && filteredEmails.length > 0 &&
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          }
        </div>

        {selectedEmail && (
          <div className="w-2/3 bg-white text-text">
            <EmailViewer
              emailId={selectedEmail}
              emails={emails}
              onToggleFavorite={handleToggleFavorite}
              isFavorite={favorites.includes(selectedEmail)}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default App;