import Vue from 'vue';
import Snotify from 'vue-snotify';
import axios from 'axios';

Vue.use(Snotify);

let $http = axios.create({
    baseURL: `${process.env.VUE_APP_API_URL}`,
    headers: {
        'X-Requested-With' : 'XMLHttpRequest'
    },
    withCredentials: false,
    crossDomain: false,
    params: {}
});

$http.interceptors.response.use(response => {
    return response;
}, error => {
    switch (error.response.status) {
        case 500:
            Vue.prototype.$snotify.error(error.response.data.error, {
                position: 'centerCenter',
                timeout: -1,
                closeOnClick: true,
                backdrop: 0.65
            });
            break;
        case 422:
            for(let err in error.response.data.errors) {
                Vue.prototype.$snotify.error(error.response.data.errors[err][0], {
                    id: 'error',
                    position: 'centerTop',
                    timeout: -1,
                    closeOnClick: true
                });
            }
            break;

    }
});

const HttpService = {
    install(Vue) {
        Vue.prototype.$httpService = $http;
    }
};

export default (HttpService);
