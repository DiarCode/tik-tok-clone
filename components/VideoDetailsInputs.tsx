import { NextPage } from "next";
import React from "react";
import { topics } from "../utils/constants";

interface VideoDetailsInputsProps {
  caption: string;
  category: string;
  setCaption: (value: string) => void;
  setCategory: (value: string) => void;
  onPostUpload: () => void;
}

const VideoDetailsInputs: NextPage<VideoDetailsInputsProps> = ({
  caption,
  setCaption,
  category,
  setCategory,
  onPostUpload,
}) => {
  return (
    <div className="flex flex-col gap-3 pb-10">
      <div className="flex flex-col gap-2">
        <label className="text-md font-medium" htmlFor="captionInput">
          Caption
        </label>
        <input
          type="text"
          placeholder="Enter a caption"
          className="rounded outline-none text-md border-2 border-gray-200 p-2"
          name="captionInput"
          value={caption}
          onChange={e => setCaption(e.target.value)}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-md font-medium" htmlFor="selectInput">
          Category
        </label>
        <select
          name="selectInput"
          className="outline-none border-2 border-gray-200 text-md capitalize lg:p-4 p-2 rounded cursor-pointer"
          value={category}
          onChange={e => setCategory(e.target.value)}
        >
          {topics.map(item => (
            <option
              key={item.name}
              value={item.name}
              className="outline-none capitalize bg-white text-gray-700 text-md p-2 hover:bg-slate-300"
            >
              {item.name}
            </option>
          ))}
        </select>

        <div className="flex gap-6 mt-6">
          <button
            type="button"
            className=" border-2 text-md font-medium p-2 rounded w-28 lg:w-44 outline-none"
          >
            Discard
          </button>

          <button
            type="button"
            className=" bg-[#F51997] text-white bg-whitetext-md font-medium p-2 rounded w-28 lg:w-44 outline-none"
            onClick={onPostUpload}
          >
            Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoDetailsInputs;
