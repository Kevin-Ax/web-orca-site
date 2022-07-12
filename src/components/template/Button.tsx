
interface ButtomProps {
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
}

export function Button({ children, onClick, className }: ButtomProps) {
    return (
        <button
            className={`  ${className}`}
            onClick={onClick}>
            {children}
        </button>
    );
}