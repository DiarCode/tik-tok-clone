import Image from "next/image";
import Link from "next/link";
import React from "react";
import { GoVerified } from "react-icons/go";

interface PostProfileProps {
  userName: string;
  image: string;
}


const PostProfile = ({ userName, image }: PostProfileProps) => {
  return (
    <div>
      <Link href="/profile">
        <div className="flex gap-3 items-center">
          <div className="w-9 h-9">
            <Image
              width={10}
              height={10}
              className="rounded-full"
              src={image}
              alt="profile photo"
              layout="responsive"
            />
          </div>

          <p className="flex gap-2 items-center md:text-md font-bold text-primary">
            {userName} <GoVerified className="text-blue-400 text-md " />
          </p>
        </div>
      </Link>
    </div>
  );
};

export default PostProfile;
