import { Presenter } from "../presenter";

export const jsonPresenter: Presenter = (model: any) => {
  try {
    return JSON.stringify(model);
  } catch {
    return JSON.stringify({});
  }
};
