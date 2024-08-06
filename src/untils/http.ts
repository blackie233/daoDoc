import axios from "axios";

const baseUrl = 'http://54.159.42.67:8889'

const http = axios.create({
    // baseURL: process.env.TARO_APP_API,  // 你的API地址
    baseURL: baseUrl,
    timeout: 10000,  // 请求超时时间
    headers: {
        'Content-Type': 'application/json',  // 设置默认的Content-Type
    }
});

// 请求拦截器
http.interceptors.request.use(
    config => {
        // 在发送请求之前做些什么：例如添加token
        // config.headers['Authorization'] = '你的token';
        return config;
    },
    error => {
        // 对请求错误做些什么
        return Promise.reject(error);
    }
);

// 响应拦截器
http.interceptors.response.use(
    response => {
        // 对响应数据做点什么
        const res = response.data;
        // 根据你的业务处理回调
        if (res.code !== 200) {
            // 处理错误
            // ...
            return Promise.reject(new Error(res.message || 'Error'));
        } else {
            return res;
        }
    },
    error => {
        // 对响应错误做点什么
        console.log('err' + error);  // for debug
        return Promise.reject(error);
    }
);

/**
 * 封装get方法
 * @param url  请求url
 * @param params  请求参数
 * @returns {Promise}
 */
export const get = (url, params = {}) => {
    return new Promise((resolve, reject) => {
        http.get(url, {
            params: params,
        }).then((response) => {
            // landing(url, params, response.data);
            resolve(response.data);
        })
            .catch((error) => {
                reject(error);
            });
    });
}

/**
 * 封装post请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export const post = (url, data) => {
    return new Promise((resolve, reject) => {
        console.log(url)
        url = url.startsWith('http') ? url : baseUrl + url
        http.post(url, data).then(
            (response) => {
                //关闭进度条
                resolve(response.data);
            },
            (err) => {
                reject(err);
            }
        );
    });
}

// export default http;