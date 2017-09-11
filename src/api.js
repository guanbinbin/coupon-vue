import Vue from 'vue'
import axios from 'axios'
axios.interceptors.request.use(config => {
    return config
}, error => {
    return Promise.reject(error)
})
axios.interceptors.response.use(response => response, error => Promise.resolve(error.response))
Vue.prototype.base_url="http://119.29.254.72:8001"
function checkStatus(response) {
    if (response.status === 200 || response.status === 304) {
        return response
    }
    return {
        data: {
            code: -404,
            message: response.statusText,
            data: response.statusText,
        }
    }
}

function checkCode(res) {
    if (res.data.err) {
        alert(res.data.err)
    }
    return res
}
export default {
    post(url, data) {
        return axios({
            method: 'post',
            url,
            data: JSON.stringify(data),
            timeout: 30000,
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
                'Content-Type': 'application/json; charset=UTF-8'
            }
        }).then(checkStatus).then(checkCode)
    },
    get(url, params) {
        return axios({
            method: 'get',
            url,
            params,
            timeout: 30000,
            headers: {
                'X-Requested-With': 'XMLHttpRequest'
            }
        }).then(checkStatus).then(checkCode)
    }
}