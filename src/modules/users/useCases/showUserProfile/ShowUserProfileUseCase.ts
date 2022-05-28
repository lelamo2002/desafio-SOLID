import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ShowUserProfileUseCase {
  constructor(private usersRepository: IUsersRepository) {
    // this.usersRepository = usersRepository;
  }

  execute({ user_id }: IRequest): User {
    const user = this.usersRepository.findById(user_id);

    if (!user) {
      throw new Error("usuário não encontrado");
    }
    return user;
  }
}

export { ShowUserProfileUseCase };
