import { CreatePostDto } from '@/types/index';
import axiosInstance from './axios';

export async function createPost(body: CreatePostDto) {
  const { data } = await axiosInstance.post('/post', body);

  return data;
}
