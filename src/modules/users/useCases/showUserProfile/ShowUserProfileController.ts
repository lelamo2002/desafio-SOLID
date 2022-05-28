import { Request, Response } from "express";

import { ShowUserProfileUseCase } from "./ShowUserProfileUseCase";

class ShowUserProfileController {
  constructor(private showUserProfileUseCase: ShowUserProfileUseCase) {
    // lets ShowUserProfileUseCase be used as this.showUserProfileUseCase
  }

  handle(request: Request, response: Response): Response {
    try {
      const user_id = { user_id: request.params.user_id };

      const user = this.showUserProfileUseCase.execute(user_id);

      return response.status(200).send(user);
    } catch (err) {
      return response.status(404).send({ error: err.message });
    }
  }
}

export { ShowUserProfileController };
