import axios from "axios";

const unsplash_key =
    import.meta.env.VITE_UNSPLASH_KEY

const pexel =
    import.meta.env.VITE_PEXEL_KEY


export function fetch_phots(query, page = 1, per_page = 20) {
    const res = axios.get('https://api.unsplash.com/search/photos', {
        params: {
            query,
            page,
            per_page
        },
        headers: { Authorization: `Client-ID ${unsplash_key}` }
    })
}