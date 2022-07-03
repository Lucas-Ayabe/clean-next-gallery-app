import { Presenter } from "./presenter";

export type Controller<Payload> = (input: {
  payload: Payload;
}) => Promise<ReturnType<Presenter>>;
