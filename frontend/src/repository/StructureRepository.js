import axios from "axios";
import { createContext, useState } from "react";

export const api = axios.create({ baseURL: "http://127.0.0.1:8000/api" });

export const getStructures = (keyword, page, size) => {
 return api.get(`/structures`);
 //return api.get(`/structures?name_like=${keyword}&_page=${page}&_limit=${size}`);
};
export const getProductById = (id) => {
  return api.get(`/products/${id}`);
};
export const saveProduct = (product) => {
  return api.post("/products", product);
};
export const updateProduct = (product) => {
  return api.put(`/products/${product.id}`, product);
};
export const checkProduct = (product) => {
  return api.patch(`/products/${product.id}`, { checked: !product.checked });
};
export const deleteProduct = (product) => {
  return api.delete(`/products/${product.id}`);
};

export const useAppState = () => {
  const initialStat = {
    keyword: "aaa",
    currentPage: 1,
    pageSize: 4,
    totalPages: 0,
    structures: [],
  };
  const appState = useState(initialStat);
  return appState;
};
