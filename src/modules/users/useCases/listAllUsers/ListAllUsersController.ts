import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {
    // lets ListAllUsersUseCase be used as this.listAllUsersUseCase
  }

  handle(request: Request, response: Response): Response {
    // transform id from header into a string
    try {
      const user = { user_id: request.headers.user_id.toString() };

      const list = this.listAllUsersUseCase.execute(user);

      return response.status(200).send(list);
    } catch (err) {
      return response.status(400).send({ error: err.message });
    }
  }
}

export { ListAllUsersController };
