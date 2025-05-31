import { Injectable } from '@nestjs/common';
import { CreateUserType } from 'utils/types/types';

@Injectable()
export class UsersService {
    private fakeUsers = [
        {id: 0, username: "em", email: "g@gmail.com"},
        {id: 1, username: "em", email: "g@gmail.com"},
        {id: 2, username: "em", email: "g@gmail.com"}
    ]

    fetchUsers() {
        return this.fakeUsers
    }

    createUser(userDetails: CreateUserType) {
        this.fakeUsers.push(userDetails)
        return;
    }

    fetchUserById(id: number){
        return this.fakeUsers.filter(user => user.id === id)
    }
}
