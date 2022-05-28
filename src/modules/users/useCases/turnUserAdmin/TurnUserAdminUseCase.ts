import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class TurnUserAdminUseCase {
  constructor(private usersRepository: IUsersRepository) {
    // this.usersRepository = usersRepository;
  }

  execute({ user_id }: IRequest): User {
    const userExists = this.usersRepository.findById(user_id);

    if (!userExists) {
      throw new Error("usuário não encontrado");
    }

    const user = this.usersRepository.turnAdmin(
      this.usersRepository.findById(user_id)
    );

    return user;
  }
}

export { TurnUserAdminUseCase };
