import React, { useState } from "react";
import { GoogleLogin, googleLogout } from "@react-oauth/google";
import { createOrGetUser } from "../utils";
import { useAuthStore } from "../store/authStore";
import Link from "next/link";
import { IoMdAdd } from "react-icons/io";
import Image from "next/image";
import { AiOutlineLogout } from "react-icons/ai";
import ProfileModal from "./ProfileModal";

const NavbarProfile = () => {
  const { userProfile, addUser, removeUser } = useAuthStore();
  const [isModalActive, setIsModalActive] = useState(false);

  const onMouseEnter = () => {
    setIsModalActive(true);
  };

  const onLogoutClick = () => {
    googleLogout();
    removeUser();
  };

  return (
    <div>
      {userProfile ? (
        <div className="flex gap-5 items-center md:gap-9 relative">
          <Link href="/upload">
            <button className="border-2 p-2 md:px-4 text-md font-semibold flex items-center gap-2 rounded">
              <IoMdAdd className="text-xl" />
              <span className="hidden md:block">Upload</span>
            </button>
          </Link>

          {Boolean(userProfile.image) && (
            <Link href="/">
              <div className="w-[33px] h-[33px]" onMouseEnter={onMouseEnter}>
                <Image
                  width={33}
                  height={33}
                  className="rounded-full cursor-pointer"
                  src={userProfile.image}
                  alt="profile photo"
                />
              </div>
            </Link>
          )}

          <ProfileModal
            isActive={isModalActive}
            setIsActive={setIsModalActive}
            name={userProfile.userName}
            onLogoutClick={onLogoutClick}
          />
        </div>
      ) : (
        <GoogleLogin onSuccess={res => createOrGetUser(res, addUser)} />
      )}
    </div>
  );
};

export default NavbarProfile;
