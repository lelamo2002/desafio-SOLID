import { Response, Request } from "express";

import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {
    // lets CreateUserUseCase be used as this.createUserUseCase
  }

  handle(request: Request, response: Response): Response {
    try {
      const user = this.createUserUseCase.execute(request.body);

      return response.status(201).send(user);
    } catch (err) {
      return response.status(400).send({ error: err.message });
    }
  }
}

export { CreateUserController };
