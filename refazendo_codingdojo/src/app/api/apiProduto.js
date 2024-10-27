import axios from "axios";

const apiProduto = axios.create({
    baseURL : 'https://dummyjson.com/products'
})

export default apiProduto