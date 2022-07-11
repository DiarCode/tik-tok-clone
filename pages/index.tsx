import axios from "axios";
import type { NextPage } from "next";
import NoResults from "../components/NoResults";
import PostCard from "../components/PostCard";
import { IPost } from "../types";

const BASE_URL = "http://localhost:3000/api/post";

interface HomeProps {
  posts: IPost[];
}

const Home = ({ posts }: HomeProps) => {
  const renderedPosts = posts.length ? (
    posts.map(item => <PostCard key={item._id} post={item} />)
  ) : (
    <NoResults text={"No Videos"} />
  );

  return (
    <div className="flex flex-col gap-10 videos h-full">{renderedPosts}</div>
  );
};

export const getServerSideProps = async () => {
  const { data } = await axios.get(BASE_URL);

  return { props: { posts: data } };
};

export default Home;
