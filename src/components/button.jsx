const BaseButton = ({ size = "sm", color = "blue", children, onClick, type }) => {
  const sizeButton = () => {
    if (size == "sm") {
      return "text-xs py-1.5 px-3 rounded";
    } else if (size == "md") {
      return "py-2 text-sm px-4 rounded-md";
    } else if (size == "lg") {
      return "py-3 px-6 rounded-lg text-lg";
    } else if (size == "xl") {
      return "py-4 px-8 rounded-lg text-xl";
    } else {
      return (size = "md");
    }
  };

  const colorButton = () => {
    if (color == "blue") {
      return "bg-sky-600 text-white";
    } else if (color == "yellow") {
      return "bg-yellow-500 text-white";
    } else if (color == "red") {
      return "bg-red-500 text-white";
    } else if (color == "green") {
      return "bg-green-500 text-white";
    } else if (color == "dark" || color == "black") {
      return "bg-gray-800 text-white";
    } else if (color == "light" || color == "white") {
      return "bg-gray-100 text-gray-800";
    } else {
      return (color = "blue");
    }
  };
  return (
    <button
      onClick={onClick}
      type={type}
      className={`font-medium ${sizeButton()} ${colorButton()}`}
    >
      {children}
    </button>
  );
};

export default BaseButton;
