import apiService from '@/api/storeApi';

export const getGame = (params) => apiService.get('/api/appdetails', { params });
