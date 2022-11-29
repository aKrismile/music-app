import http from './request'
// banner
export const api_home_banner = data => http({
    method: 'get',
    url: '/banner',
    data
})