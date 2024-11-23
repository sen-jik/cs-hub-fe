export type FindUserReqDtoDto = {
  id: string;
};

export type FindUserResDtoDto = {
  id: string;
  email: string;
  createdAt: string;
};

export type AuthControllerGetKakaoInfoQueryParams = {
  code: string;
};
