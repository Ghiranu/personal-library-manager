import useSWR from "swr";
import { getBooks } from "../services/api";
import { BookDetails } from "../types/book";
import { API_BOOKS_ROUTE } from "../utils/constants";

export const useBooks = () => {
  const { data, error, isLoading } = useSWR<BookDetails[]>(
    API_BOOKS_ROUTE,
    getBooks
  );

  return {
    books: data || [],
    isLoading,
    error,
  };
};
