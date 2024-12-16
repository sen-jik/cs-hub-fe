export type FindUserReqDto = {
  id: string;
};

export type FindUserResDto = {
  id: string;
  email: string;
  createdAt: string;
};

export type ToggleLikeResDto = {
  /**
   * 좋아요 상태
   * @example true
   */
  isLiked: boolean;
};

export type ToggleLikeReqDto = {
  /**
   * 좋아요 대상 타입
   * @example "interview"
   */
  type: 'interview' | 'quiz';
  /**
   * 좋아요 대상 ID
   * @example 1
   */
  targetId: number;
};

export type CreateSubCategoryReqDto = {
  /**
   * 서브 카테고리
   * @example "NETWORK"
   */
  subCategory: string;
  /**
   * 메인 카테고리
   * @example "COMMON"
   */
  mainCategory: string;
};

export type CreateInterviewReqDto = {
  /**
   * 질문
   * @example "질문"
   */
  question: string;
  /**
   * 답변
   * @example "답변"
   */
  answer: string;
  /**
   * 키워드
   * @example ["키워드1","키워드2"]
   */
  keywords: string[];
  /**
   * 서브 카테고리
   * @example "NETWORK"
   */
  subCategory: string;
};

export type CreateInterviewResDto = {
  /**
   * 인터뷰 ID
   * @example 1
   */
  id: number;
};

export type FindInterviewResDto = {
  /**
   * 인터뷰 ID
   * @example 1
   */
  id: number;
  /**
   * 질문
   * @example "HTTP와 HTTPS의 차이점은 무엇인가요?"
   */
  question: string;
};

export type FindInterviewByCategoryResDto = {
  /**
   * 메인 카테고리명
   * @example "COMMON"
   */
  mainCategoryName: string;
  /**
   * 서브 카테고리명
   * @example "NETWORK"
   */
  subCategoryName: string;
  /** 인터뷰 목록 */
  interviews: FindInterviewResDto[];
};

export type FindAllInterviewResDto = {
  /** 카테고리별 인터뷰 목록 */
  items: FindInterviewByCategoryResDto[];
};

export type FindInterviewInfoResDto = {
  /**
   * 인터뷰 ID
   * @example 1
   */
  id: number;
  /**
   * 서브 카테고리 정보
   * @example {"id":1,"name":"NETWORK","main_category":"COMMON"}
   */
  subCategory: object;
  /**
   * 질문
   * @example "HTTP와 HTTPS의 차이점은 무엇인가요?"
   */
  question: string;
  /**
   * 답변
   * @example "HTTP는 암호화되지 않은 평문 통신이며, HTTPS는 SSL/TLS를 통해 암호화된 통신을 합니다."
   */
  answer: string;
  /**
   * 키워드 목록
   * @example ["HTTP","HTTPS","SSL","TLS","보안"]
   */
  keywords: string[];
  /**
   * 생성일시
   * @format date-time
   */
  createdAt: string;
};

export type FindInterviewInfoWithLikeResDto = {
  /**
   * 인터뷰 ID
   * @example 1
   */
  id: number;
  /**
   * 서브 카테고리 정보
   * @example {"id":1,"name":"NETWORK","main_category":"COMMON"}
   */
  subCategory: object;
  /**
   * 질문
   * @example "HTTP와 HTTPS의 차이점은 무엇인가요?"
   */
  question: string;
  /**
   * 답변
   * @example "HTTP는 암호화되지 않은 평문 통신이며, HTTPS는 SSL/TLS를 통해 암호화된 통신을 합니다."
   */
  answer: string;
  /**
   * 키워드 목록
   * @example ["HTTP","HTTPS","SSL","TLS","보안"]
   */
  keywords: string[];
  /**
   * 생성일시
   * @format date-time
   */
  createdAt: string;
  /**
   * 좋아요 여부
   * @example true
   */
  isLiked: boolean;
};

export type AuthControllerGetKakaoInfoQueryParams = {
  code: string;
};
