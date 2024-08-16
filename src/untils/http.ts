// import axios from "axios";

// 可以根据不同环境配置 baseURL
import Taro from "@tarojs/taro";

// const baseUrl = 'http://192.168.1.20:8889';

class Http {
    private baseUrl: string;
    private defaultHeaders: Record<string, string>;

    constructor(baseUrl: string) {
        this.baseUrl = baseUrl;
        this.defaultHeaders = {
            'Content-Type': 'application/json',
        };
    }

    // 请求拦截器
    private requestInterceptor(config: Taro.request.Option): Taro.request.Option {
        // 在发送请求之前做些什么，比如添加 token
        // config.header['Authorization'] = 'Bearer token';
        return config;
    }

    // 响应拦截器
    private responseInterceptor(response: Taro.request.SuccessCallbackResult<any>): any {
        // 对响应数据做点什么
        if (response.statusCode !== 200 || !response.data.success) {
            // 根据需要处理错误
            Taro.showToast({
                title: response.data.message || '请求失败',
                icon: 'none',
            });
            return Promise.reject(response);
        }
        return response.data.data;
    }

    // GET 请求封装
    public get(url: string, params: Record<string, any> = {}): Promise<any> {
        const config: Taro.request.Option = {
            url: `${this.baseUrl}${url}`,
            method: 'GET',
            header: this.defaultHeaders,
            data: params,
        };
        return this.request(config);
    }

    // POST 请求封装
    public post(url: string, data: Record<string, any> = {}): Promise<any> {
        const config: Taro.request.Option = {
            url: `${this.baseUrl}${url}`,
            method: 'POST',
            header: this.defaultHeaders,
            data: data,
        };
        return this.request(config);
    }

    // 统一的请求方法
    private request(config: Taro.request.Option): Promise<any> {
        config = this.requestInterceptor(config);
        return Taro.request(config)
            .then(this.responseInterceptor)
            .catch((error) => {
                // 处理请求或响应错误
                Taro.showToast({
                    title: error.message || '请求出错',
                    icon: 'none',
                });
                return Promise.reject(error);
            });
    }
}

// 使用示例
const http = new Http('http://192.168.1.20:8889');

export default http;
