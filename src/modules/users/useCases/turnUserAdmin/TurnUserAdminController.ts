import { Request, Response } from "express";

import { TurnUserAdminUseCase } from "./TurnUserAdminUseCase";

class TurnUserAdminController {
  constructor(private turnUserAdminUseCase: TurnUserAdminUseCase) {
    // lets TurnUserAdminUseCase be used as this.turnUserAdminUseCase
  }

  handle(request: Request, response: Response): Response {
    try {
      const user_id = { user_id: request.params.user_id };
      const adminUser = this.turnUserAdminUseCase.execute(user_id);

      return response.status(200).send(adminUser);
    } catch (err) {
      return response.status(404).send({ error: err.message });
    }
  }
}

export { TurnUserAdminController };
