import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, getConnection} from 'typeorm';
import { User } from './user.entity';
import { CrearUser } from './dto/created-user'

@Injectable()
export class UsersService {
    constructor(@InjectRepository(User) private usersRepository: Repository<User>) { }
    // async createdUser(userDto: User): Promise<User> {
    //     console.log(userDto);
    //     const user = new User();
    //     user.Name = userDto.Name;
    //     user.Email = userDto.Name;
    //     return this.usersRepository.save(user);
    // }
    async createdUsers(userDto: CrearUser[]): Promise<CrearUser[]> {
        try {
        console.log(userDto);
        // await getConnection()
        // .createQueryBuilder()
        // .insert()
        // .into(User)
        // .values(userDto)
        // .execute()
            await this.usersRepository.save(userDto)
            .catch((err: any) => {
                console.log(err);
            });
        return userDto;
        } catch (error) {
            
        }
        
    }
    // async uploadUsers(nameFile: string) {
    //     try {

    //         let path = __dirname + "/files/" + nameFile;
    //         console.log('Path');
    //         console.log(path);
    //         const workSheetsFile = xlsx.parse(path);
    // //   console.log(workSheetsFile[0].data);
    //   const dataXLSX = workSheetsFile[0].data;
    //   dataXLSX.shift();
    //   return dataXLSX;
    //         // });
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }
}
