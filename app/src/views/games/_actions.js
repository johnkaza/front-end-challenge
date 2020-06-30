import apiService from '../../api/api';

export const getData = (params) => apiService.get('/ISteamApps/GetAppList/v0002', { params });
