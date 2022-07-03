export interface IEitherPattern<TL, TR, R> {
  left: (value: TL) => R;
  right: (value: TR) => R;
}

export interface IEither<TL, TR> {
  map<TR1>(fn: (value: TR) => TR1): IEither<TL, TR1>;
  bind<TR1>(fn: (value: TR) => IEither<TL, TR1>): IEither<TL, TR1>;
  matchWith<R>(pattern: IEitherPattern<TL, TR, R>): R;
  isLeft: () => boolean;
  isRight: () => boolean;
}

export const Either = {
  Left: <TL, TR>(value: TL): IEither<TL, TR> => ({
    map: (_fn) => Either.Left(value),
    bind: (_fn) => Either.Left(value),
    matchWith: <T>({ left }: IEitherPattern<TL, TR, T>) => left(value),
    isLeft: () => true,
    isRight: () => false,
  }),
  Right: <TL, TR>(value: TR): IEither<TL, TR> => ({
    map: (fn) => Either.Right(fn(value)),
    bind: (fn) => fn(value),
    matchWith: <T>({ right }: IEitherPattern<TL, TR, T>) => right(value),
    isLeft: () => false,
    isRight: () => true,
  }),
};
