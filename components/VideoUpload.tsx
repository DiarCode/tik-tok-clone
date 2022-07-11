import React, { SetStateAction, useState } from "react";
import { FaCloudUploadAlt } from "react-icons/fa";
import { client } from "../utils/client";
import { SanityAssetDocument } from "@sanity/client";
import { NextPage } from "next";

interface VideoUploadProps {
  videoAsset: SanityAssetDocument | null;
  setVideoAsset: (data: SanityAssetDocument) => void;
}

const VideoUpload: NextPage<VideoUploadProps> = ({
  videoAsset,
  setVideoAsset,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [wrongFileType, setWrongFileType] = useState(false);

  const uploadVideo = async (e: any) => {
    setIsLoading(true);
    const selectedFile = e.target.files[0];
    const fileTypes = [
      "video/mp4",
      "video/webm",
      "video/ogg",
      "video/quicktime",
    ];
    const isValid = fileTypes.includes(selectedFile.type);

    if (!isValid) {
      setIsLoading(false);
      setWrongFileType(true);
      return;
    }

    setWrongFileType(false);

    client.assets
      .upload("file", selectedFile, {
        contentType: selectedFile.type,
        filename: selectedFile.name,
      })
      .then(data => {
        setVideoAsset(data);
        setIsLoading(false);
      });
  };
  return (
    <div
      className="border-dashed rounded-xl border-4 border-gray-200 flex 
          justify-center items-center outline-none flex-col w-[260px] h-[460px] 
          p-10 cursor-pointer hover:border-red-300 hover:bg-gray-100"
    >
      {isLoading ? (
        <p>Uploading...</p>
      ) : (
        <div>
          {videoAsset ? (
            <div className="w-[260px] h-[460px]">
              <video
                src={videoAsset.url}
                loop
                controls
                className="rounded-xl bg-black"
              ></video>
            </div>
          ) : (
            <label className="cursor-pointer">
              <div className="flex flex-col items-center justify-center h-full">
                <div className="flex flex-col items-center justify-center">
                  <p className="font-bold text-xl">
                    <FaCloudUploadAlt className="text-gray-300 text-6xl" />
                  </p>
                  <p className="text-center mt-3 font-semibold text-xl text-gray-600">
                    Select video to upload
                  </p>
                </div>
                <p className="text-center mt-10 text-sm text-gray-400 leading-7">
                  MP4 or WebM or Ogg <br />
                  720x1080 or higher <br />
                  Up to 10 minutes <br />
                  Less than 2GB
                </p>
                <p className="bg-[#F51997] text-center mt-10 rounded text-white text-md font-medium p-2 w-52 outline-none">
                  Select File
                </p>
              </div>
              <input
                type="file"
                name="upload-video"
                className="w-0 h-0"
                onChange={uploadVideo}
              />
            </label>
          )}
        </div>
      )}

      {wrongFileType && (
        <p className="text-sm mt-4 text-red-400 font-semibold text-center">
          Please select a video file
        </p>
      )}
    </div>
  );
};

export default VideoUpload;
