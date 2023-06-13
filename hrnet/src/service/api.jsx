
class API {
    constructor() {
        this.baseApi = 'http://localhost:3004'
    }


    responseHandler = async res => {
        const response = await res.json()
        if (res.status >= 200 && res.status <= 300) {
            return await response
        }
        if (res.status > 300 && res.status < 400) {
            return await response
        }
        if (res.status > 400 && res.status < 600) {
            throw await response
        }
    }

    getLazyData = async (api, start, end, search, sortField, sortOrder) => {
        const apiUrl = `${this.baseApi}/${api}`;

        let queryString = `_start=${start}&_end=${end}`;

        if (search) {
            queryString += `&q=${search}`;
        }

        if (sortField && sortOrder) {
            queryString += `&_sort=${sortField}&_order=${sortOrder}`;
        }

        const res = await fetch(`${apiUrl}?${queryString}`);
        return await this.responseHandler(res);
    };


    get = async (api) => {
        const res = await fetch(`${this.baseApi}/${api}`)
        return await this.responseHandler(res)
    }

    post = async (api, headers, body) => {
        try {
            const res = await fetch(`${this.baseApi}/${api}`, {
                method: "POST",
                headers: headers,
                body: JSON.stringify(body),
            })
            return res
        } catch (err) {
            return err
        }
    }

    put = async (api, headers, body) => {
        try {
            const res = await fetch(`${this.baseApi}/${api}`, {
                method: "PUT",
                headers: headers,
                body: JSON.stringify(body),
            })
            return res
        } catch (err) {
            console.error(err)
        }
    }


    patch = async (api, body) => {
        try {
            const res = await fetch(`${this.baseApi}/${api}`, {
                method: "PATCH",
                body: JSON.stringify(body),
            })
            return res
        } catch (err) {
            console.error(err)
        }
    }

    delete = async api => {
        try {
            const res = await fetch(`${this.baseApi}/${api}`, {
                method: "DELETE"
            })
            return await res.json()
        } catch (err) {
            console.error(err)
        }
    }
}

const api = new API()

export default api;

