import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {
    // this.usersRepository = usersRepository;
  }

  execute({ email, name }: IRequest): User {
    const emailTaken = this.usersRepository.findByEmail(email);

    if (emailTaken) {
      throw new Error("email já cadastrado");
    }

    const user = this.usersRepository.create({ email, name });

    return user;
  }
}

export { CreateUserUseCase };
