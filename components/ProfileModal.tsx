import React from "react";
import { AiOutlineLogout } from "react-icons/ai";

interface ProfileModalProps {
  isActive: boolean;
  name: string;
  onLogoutClick: () => void;
  setIsActive: (value: boolean) => void;
}

const ProfileModal = ({
  isActive,
  name,
  onLogoutClick,
  setIsActive,
}: ProfileModalProps) => {
  const ACTIVE_STYLE =
    "flex justify-center p-4 absolute top-16 left-0 w-full h-[180px] bg-white border-2 border-[#e8e8e8] rounded-md z-30";
  const DEFAULY_STYLE = "hidden";

  const onMouseLeave = () => {
    setTimeout(() => {
      setIsActive(false);
    }, 1000);
  };

  return (
    <div
      className={isActive ? ACTIVE_STYLE : DEFAULY_STYLE}
      onMouseLeave={onMouseLeave}
    >
      <div className="flex flex-col item-center justify-center gap-6 ">
        <p className="font-semibold text-md">{name}</p>
        <button
          type="button"
          onClick={onLogoutClick}
          className="border-[#f9c7e4] border-2 py-2 rounded-md hover:bg-[#f9c7e4]"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default ProfileModal;
