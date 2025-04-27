import axios from 'axios';
import { Platform } from 'react-native';

const baseURLs = {
  ios: 'http://192.168.45.91:3030',
  android: 'http://192.168.45.91:3030',
} as const;

const axiosInstance = axios.create({
  baseURL: baseURLs[Platform.OS as keyof typeof baseURLs],
});

export default axiosInstance;
