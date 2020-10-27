import { Injectable } from '@nestjs/common';
import { User } from './user.entity';
import { CrearUser }from './dto/created-user'
@Injectable()
export class MathService {
    // constructor(@InjectRepository(User) private usersRepository: Repository<User>) { }
    public accumulate(data: number[]): number {
        return (data || []).reduce((a, b) => Number(a) + Number(b));
    }
    public Add(data: CrearUser[]) {
        const dataResult = data.map((item) => {
            const userInfo = {
                Name: item[0],
                Email: item[1],
                Code: item[2]
            }
            return userInfo;
        })
            let prueba = [
                {
                    ID: 4,
                    Name:'Angel',
                    Email:'angel@hotmail.com',
                    Code:'ADC'
                },
                {
                    ID: 5,
                    Name:'Isaac',
                    Email:'angel@hotmail.com',
                    Code:'ADC'
                }
            ];
            // this.service.createdUsers(prueba);
        return prueba;
    }
}
