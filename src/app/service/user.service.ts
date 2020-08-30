import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
    getUserInfo() {
        return { name: "", loginId: "", userId: ""};
    }
}