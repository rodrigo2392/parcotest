import {useQuery} from '@tanstack/react-query';
import apiClient from './api.service';

const getCategories = async (product: string | undefined) => {
  const res = await apiClient.get(`${product}.json`);
  return res.data;
};

export function useGetCategories(product: string | undefined) {
  return useQuery(['getCategories'], () => getCategories(product), {
    enabled: !!product,
  });
}
