import axios from "axios";
import create from "zustand";
import { persist } from "zustand/middleware";
import { IUser } from "../types";

const authStore = (set: any) => ({
  userProfile: null as IUser | null,

  addUser: (user: IUser) => set({ userProfile: user }),
  removeUser: () => set({ userProfile: null }),
});

export const useAuthStore = create(persist(authStore, { name: "auth" }));
