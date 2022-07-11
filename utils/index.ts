import axios from "axios";
import jwtDecode from "jwt-decode";

export const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

interface IGoogleUser {
  name: string;
  picture: string;
  sub: string;
}

export const createOrGetUser = async (response: any, addUser: any) => {
  const decoded: IGoogleUser = jwtDecode(response.credential);
  const { name, picture, sub } = decoded;

  const candidate = {
    _id: sub,
    _type: "user",
    userName: name,
    image: picture,
  };

  addUser(candidate);

  await axios.post("http://localhost:3000/api/auth", candidate);
};
