import axios from "axios";

//BASE DA API: https://api.themoviedb.org/3/

//URL DA API: movie/now_playing?api_key=3976d2a147b98c9113783fca3aee342c&language=pt-BR
 
const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
});
 


export default api;