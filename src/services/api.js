import axios from 'axios';

class SuperHeroAPI {
    constructor(http) {
        this.http = http;
    }

    fetchAll() {
        return this.http.get('/supers');
    }

    save(superHero) {
        return this.http.post('/supers', superHero).then(() => this.fetchAll());
    }
}

const http = axios.create({ baseURL: 'http://localhost:3000' });
const service = new SuperHeroAPI(http);
export default service;
