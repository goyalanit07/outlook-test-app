export type EmailType = {
    id: string;
    from: {
        email: string;
        name: string;
    };
    date: number;
    subject: string;
    short_description: string;
};

export interface EmailCardProps {
    email: EmailType;
    isSelected: boolean;
    isRead: boolean;
    isfavorite: boolean;
    onSelect: (id: string) => void;
}

export type FilterType = "all" | "favorites" | "read" | "unread";