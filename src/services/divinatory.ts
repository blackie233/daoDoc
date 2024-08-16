import http from "@/untils/http";

class DivinatoryService {

    async load() {
        let resp:any = await http.post('/divinatory/load', {})
        console.log(resp)
        return resp.items
    }

    async readPure() {
        let resp:any = await http.post('/divinatory/readPure', {})
        console.log(resp)
        return resp.items
    }
}

const service = new DivinatoryService()

export default service