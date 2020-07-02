import apiService from '@/api/api';

export const getGames = (params) => apiService.get('/ISteamApps/GetAppList/v0002', { params });
