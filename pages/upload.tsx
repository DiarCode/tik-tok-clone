import { SanityAssetDocument } from "@sanity/client";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { FaCloudUploadAlt } from "react-icons/fa";
import { GiTrumpet } from "react-icons/gi";
import { MdDelete } from "react-icons/md";
import VideoDetailsInputs from "../components/VideoDetailsInputs";
import VideoUpload from "../components/VideoUpload";
import { useAuthStore } from "../store/authStore";
import { IPost } from "../types";
import { client } from "../utils/client";
import { topics } from "../utils/constants";

const Upload = () => {
  const router = useRouter();
  const { userProfile } = useAuthStore();
  const [videoAsset, setVideoAsset] = useState<SanityAssetDocument | null>(
    null
  );
  const [caption, setCaption] = useState("");
  const [category, setCategory] = useState(topics[0].name);

  const onPostUpload = async () => {
    const isValid =
      Boolean(caption) && Boolean(category) && Boolean(videoAsset?._id);

    if (!isValid) return;

    const document = {
      _type: "post",
      caption,
      video: {
        _type: "file",
        asset: {
          _type: "reference",
          _ref: videoAsset?._id,
        },
      },
      userId: userProfile?._id,
      postedBy: {
        _type: "postedBy",
        _ref: userProfile?._id,
      },
      topic: category,
    };

    await axios.post("http://localhost:3000/api/post", document);
    router.push("/");
  };

  return (
    <div className="flex w-full h-full">
      <div className="bg-white rounded-lg">
        <div>
          <p className="text-2xl font-bold">Upload Video</p>
          <p className="text-md text-gray-400 mt-1">
            Post a video to your account
          </p>
        </div>

        <div className="w-full flex mt-10 items-center justify-center gap-20 flex-wrap">
          <VideoUpload setVideoAsset={setVideoAsset} videoAsset={videoAsset} />

          <VideoDetailsInputs
            caption={caption}
            category={category}
            setCategory={setCategory}
            setCaption={setCaption}
            onPostUpload={onPostUpload}
          />
        </div>
      </div>
    </div>
  );
};

export default Upload;
