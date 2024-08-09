import { setModal } from "@/store/uiSlice";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import BaseButton from "./button";

export const ModalButton = ({ id, children, color, size }) => {
  const dispatch = useDispatch();

  const handleOpen = () => {
    dispatch(setModal({ id, isOpen: true }));
  };
  return (
    <BaseButton color={color} size={size} onClick={handleOpen}>
      {children}
    </BaseButton>
  );
};

export const Modal = ({
  id,
  children,
  title = "Modal Header",
  align = "start",
  size = "lg",
}) => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.ui.isOpen[id]);

  const handleClose = () => {
    dispatch(setModal({ id, isOpen: false }));
  };

  if (!isOpen) return null;

  const modalPosition = () => {
    if (align === "start") {
      return "items-start";
    } else {
      return "items-center";
    }
  };

  const sizeModal = () => {
    if (size === "md") {
      return "w-96";
    } else if (size === "lg") {
      return "w-[600px]";
    } else if (size === "xl") {
      return "w-[850px]";
    } else if (size === "2xl") {
      return "w-[1000px]";
    } else if (size === "3xl") {
      return "w-[1200px]";
    } else return;
  };

  return (
    <div
      className={`fixed w-screen h-screen bg-black/60 inset-0 z-30 p-10 flex justify-center ${modalPosition()}`}
    >
      <div className={`bg-white rounded-lg h-fit text-start ${sizeModal()}`}>
        <div className={`flex justify-between p-6 ${children && 'border-b'}`}>
          <h4 className="text-gray-800 text-lg">{title}</h4>
          <button
            onClick={() => handleClose()}
            className="p-1 rounded hover:bg-gray-200 flex items-center justify-center w-6 h-6"
          >
            <FontAwesomeIcon icon={faXmark} className="text-gray-500" />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};

export const ModalFooter = ({ children }) => {
  return (
    <div className="p-6 border-t">
      <div className="flex justify-end items-center gap-3">{children}</div>
    </div>
  );
};
