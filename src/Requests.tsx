import { TDog } from "./types";

const BASE_URL = "http://localhost:3000";

export const Requests = {
  deleteDog: (id: number) => {
    return fetch(`${BASE_URL}/dogs/${id}`, {
      method: "DELETE",
      body: JSON.stringify({}),
      headers: {
        "Content-type": "application/json",
      },
    }).then((res) => res.json());
  },
  addDog: (dog: Omit<TDog, "id">) => {
    return fetch(`${BASE_URL}/dogs`, {
      method: "POST",
      body: JSON.stringify(dog),
      headers: {
        "Content-type": "application/json",
      },
    }).then((res) => res.json());
  },
  changeDog: (dog: Partial<TDog>, id: number) => {
    return fetch(`${BASE_URL}/dogs/${id}`, {
      method: "PATCH",
      body: JSON.stringify(dog),
      headers: {
        "Content-type": "application/json",
      },
    }).then((res) => res.json());
  },
  getDogs: () => {
    return fetch(`${BASE_URL}/dogs`, {
      method: "GET",
      body: JSON.stringify({}),
      headers: {
        "Content-type": "application/json",
      },
    }).then((res) => res.json());
  },
};
