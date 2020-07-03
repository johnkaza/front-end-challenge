import apiService from '@/api/api';
import apiStoreService from '@/api/storeApi';

export const getGames = (params) => apiService.get('/ISteamApps/GetAppList/v0002', { params });
export const getGame = (params) => apiStoreService.get('/api/appdetails', { params });
