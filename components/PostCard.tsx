import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IPost } from "../types";

import PostProfile from "./PostProfile";
import VideoPlayer from "./VideoPlayer";

interface PostCardProps {
  post: IPost;
}

const PostCard: NextPage<PostCardProps> = ({ post }) => {
  return (
    <div className="flex items-center flex-col border-b-2 border-gray-200 pb-6">
      <div>
        <PostProfile
          userName={post.postedBy.userName}
          image={post.postedBy.image}
        />
        <VideoPlayer videoUrl={post.video.asset.url} />
      </div>
    </div>
  );
};

export default PostCard;
