import { TDog, TNewDog } from "./types";

const BASE_URL = "http://localhost:3000";

const deleteDogRequest = (id: number) => {
  return fetch(`${BASE_URL}/dogs/${id}`, {
    method: "DELETE",
    body: JSON.stringify({}),
    headers: {
      "Content-type": "application/json",
    },
  }).then((res) => res.json());
};

const postDog = (dog: TNewDog) => {
  return fetch(`${BASE_URL}/dogs`, {
    method: "POST",
    body: JSON.stringify(dog),
    headers: {
      "Content-type": "application/json",
    },
  }).then((res) => res.json());
};

const patchDog = (dog: Partial<TNewDog>, id: number) => {
  return fetch(`${BASE_URL}/dogs/${id}`, {
    method: "PATCH",
    body: JSON.stringify(dog),
    headers: {
      "Content-type": "application/json",
    },
  }).then((res) => res.json());
};

const getAllDogs = () => {
  return fetch(`${BASE_URL}/dogs`, {
    method: "GET",
    body: JSON.stringify({}),
    headers: {
      "Content-type": "application/json",
    },
  }).then((res) => res.json());
};

export const Requests = {
  postDog,
  deleteDogRequest,
  patchDog,
  getAllDogs,
};
