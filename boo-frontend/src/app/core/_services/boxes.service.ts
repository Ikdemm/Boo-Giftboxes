import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from 'environments/environment';

@Injectable({
    providedIn: 'root'
})
export class BoxesService {

    api: string = environment.apiURL + 'coffrets/';

    constructor(private http: HttpClient) {
    }

    findAll() {
        return this.http.get<any[]>(this.api + 'findAll');
    }

    save(coffret) {
        console.log(coffret);
        return this.http.post(this.api + 'save', coffret);
    }

    delete(id) {
        return this.http.delete(this.api + 'delete/' + id);
    }

    edit(coffret) {
        return this.http.put(this.api + 'update', coffret);
    }
} 
