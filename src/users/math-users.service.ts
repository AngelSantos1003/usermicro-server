import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { UsersService } from './users.service';
@Injectable()
export class MathServiceUsers {
    constructor(private service: UsersService) { }
    public accumulate(data: number[]): number {
        return (data || []).reduce((a, b) => Number(a) + Number(b));
    }
    public Add(data: User[]) {
        const dataResult = data.map((item) => {
            const userInfo = {
                Name: item[0],
                Email: item[1],
                Code: item[2]
            }
            return userInfo;
        })
            // this.service.createdUsers(prueba);
        return dataResult;
    }
}
