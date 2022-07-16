import { verify } from "jsonwebtoken";
import z from "zod";

import { AccessTokenManager } from "@/application/security/accessTokenManager";

const jwtSecret = process.env.JWT_SECRET as string;

export const createAccessTokenManager = (): AccessTokenManager => {
  return {
    verify(accessToken) {
      const extracted = verify(accessToken, jwtSecret);

      const validator = z.object({
        iss: z.string(),
        sub: z.string(),
      });

      const tokenInfo = validator.parse(extracted);
      const userId = Number(tokenInfo.sub.split("|")[1]);

      if (isNaN(userId)) {
        throw new Error(`Not a valid user ID (${userId})`);
      }

      return {
        userId,
      };
    },
  };
};
