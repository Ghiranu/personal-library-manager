import axios from "axios";
import { mutate } from "swr";
import { BookDetails } from "../types/book";
import { API_BASE_URL, API_BOOKS_ROUTE } from "../utils/constants";

const api = axios.create({
  baseURL: API_BASE_URL,
});

export const getBooks = async () => {
  const response = await api.get(API_BOOKS_ROUTE);
  return response.data;
};

export const addBook = async (data: BookDetails) => {
  const response = await api.post(API_BOOKS_ROUTE, data);
  mutate(API_BOOKS_ROUTE);
  return response.data;
};

export const updateBook = async (id: string, data: BookDetails) => {
  const response = await api.put(`${API_BOOKS_ROUTE}/${id}`, data);
  mutate(API_BOOKS_ROUTE);
  return response.data;
};

export const deleteBook = async (id?: string) => {
  await api.delete(`${API_BOOKS_ROUTE}/${id}`);
  mutate(API_BOOKS_ROUTE);
};

export default api;
