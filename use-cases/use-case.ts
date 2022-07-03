export interface UseCase<RequestModel, ResponseModel> {
  execute(request: RequestModel): Promise<ResponseModel>;
}

export interface ResponseOnlyUseCase<ResponseModel> {
  execute(): Promise<ResponseModel>;
}
