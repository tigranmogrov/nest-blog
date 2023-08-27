// eslint-disable-next-line import/default
import jwt from 'jsonwebtoken';
import { H3Event } from 'h3';
import { NitroRuntimeConfig } from 'nitropack';
import { IUser } from '~~/types/user';
import { ITokens } from '~~/types/token';

type jwt = typeof jwt;

const config: NitroRuntimeConfig = useRuntimeConfig();

class TokenService {
  constructor(
    private readonly configService: NitroRuntimeConfig,
    private readonly jwtService: jwt
  ) {}

  generateAccessToken(user: IUser): string {
    return this.jwtService.sign(
      { userId: user._id, role: user.role },
      this.configService.jwtAccessSecret,
      {
        expiresIn: this.configService.jwtAccessExpires,
      }
    );
  }

  generateRefreshToken(user: IUser): string {
    return this.jwtService.sign(
      { userId: user._id },
      this.configService.jwtRefreshSecret,
      {
        expiresIn: this.configService.jwtRefreshExpires,
      }
    );
  }

  decodeAccessToken(token: string): string | jwt.JwtPayload | null {
    try {
      return this.jwtService.verify(token, this.configService.jwtAccessSecret);
    } catch (error) {
      return null;
    }
  }

  decodeRefreshToken(token: string): string | jwt.JwtPayload | null {
    try {
      return this.jwtService.verify(token, this.configService.jwtRefreshSecret);
    } catch (error) {
      return null;
    }
  }

  generateTokens(user: IUser): ITokens {
    const accessToken: string = this.generateAccessToken(user);
    const refreshToken: string = this.generateRefreshToken(user);

    return <ITokens>{
      accessToken,
      refreshToken,
    };
  }

  verifyExpiration(token: string) {
    console.log(token);
  }

  sendRefreshToken(event: H3Event, token: string) {
    setCookie(event, 'refresh_token', token, {
      httpOnly: true,
      sameSite: true,
      expires: new Date(new Date().getTime() + 60 * 60 * 24 * 1000),
    });
  }
}

export const tokenService = new TokenService(config, jwt);
