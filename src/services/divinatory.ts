import {post} from "@/untils/http";

export class DivinatoryService {

    async load() {
        let resp = await post('/divinatory/load', {})
        console.log(resp)
    }

    async readPure() {
        let resp:any = await post('/divinatory/readPure', {})
        console.log(resp)
        return resp.result.items
    }

}