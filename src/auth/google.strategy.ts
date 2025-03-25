import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, VerifyCallback } from 'passport-google-oauth20';
import {cts} from 'cts';

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
    constructor() {
        super({
            clientID: cts.oAuth2.google.clientID,
            clientSecret: cts.oAuth2.google.clientSecret,
            callbackURL: cts.oAuth2.google.callbackURL,
            scope: cts.oAuth2.google.scope,
        });
    }

    async validate( // when user authenticated and gg fetch to callbackURL, this function will be called
        accessToken: string,
        refreshToken: string,
        profile: any,
        done: VerifyCallback,
    ) {
        console.log('Google Profile:::::::::::::::::', profile);
        return done(null, {...profile, accessToken, refreshToken}); // Trả về thông tin user
    }
}
