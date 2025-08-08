export type FormState<T> =
  | {
      errors: Partial<Record<keyof T, string[]>>;
      message?: undefined;
    }
  | {
      message: string;
      errors?: undefined;
    }
  | {
      message: string;
      errors: unknown;
    }
  | undefined;

export type RegisterResponse = {
  token: {
    accessToken: string;
    refreshToken: string;
  };
};

export type LoginResponse = Omit<RegisterResponse, "profile">;
