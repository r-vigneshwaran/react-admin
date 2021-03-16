import { fetchUtils } from 'react-admin';
const apiUrl = 'https://react-admin-dashboard-js.herokuapp.com';
const httpClient = fetchUtils.fetchJson;
export default {
    getList: (resource, params) => {
        const url = `${apiUrl}/${resource}`;
            return httpClient(url).then(({ headers, json }) => ({
            data: json,
            total: 10
        }));
    }
};
