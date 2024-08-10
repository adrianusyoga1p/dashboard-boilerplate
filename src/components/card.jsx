import { useFormatter } from "@/utils/useFormatter";
import { ModalButton } from "./modal";

const Card = ({ title, subtitle, children, action = false, className }) => {
  const { cn } = useFormatter();
  return (
    <div className={cn("rounded-xl shadow-md bg-white p-6", className)}>
      {title && (
        <div className="flex items-center justify-between border-b border-gray-200 mb-4">
          <div className="space-y-1.5">
            <h2 className="text-gray-800 text-lg font-semibold">{title}</h2>
            <p className="text-gray-400 pb-2 text-sm">{subtitle}</p>
          </div>
          {action && (
            <ModalButton color="dark" size="md" id="addData">
              Add New
            </ModalButton>
          )}
        </div>
      )}
      <div>{children}</div>
    </div>
  );
};

export default Card;
