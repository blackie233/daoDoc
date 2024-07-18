const apiGet = (url:string, params:any) => {
    let list:Array<string> = [];
    for (let key in params) {
        let str = `${key}=${params[key]}`
        list.push(str);
    }
    const data = list.join('&');
    let allUrl = `${url}?${data}`;
    // debugger
    return fetch(allUrl).then(res => {
        return res.json();
    }).catch(err => {
        console.log(err);
    });
}

const apiPost = (url:string, params:any) => {
    let formData = new FormData();
    for (let key in params) {
        formData.append(key, params[key])
    };
    return fetch(url, {
        body: formData,
        method: 'POST'
    }).then(res => {
        return res.json();
    }).catch(err => {
        console.log(err);
    })
}

const http = (url, params, method: 'GET' | 'POST' = 'POST') => {
    if (method === 'GET') {
        return apiGet(url, params);
    }
    return apiPost(url, params);
}

export default {
    http,
    apiPost,
    apiGet
}