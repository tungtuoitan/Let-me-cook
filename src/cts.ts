export const cts = {
    connectionDB: {
        type: 'mysql' as const,
        port: 1433,
        database: 'lmk-user-dev',
        username: 'sa',
        password: '9Observe1Talk@',
        server: 'localhost',
    },
    httpStatus: {
        OK: 200,
        UNAUTHORIZED: 401,
    },
    oAuth2: {
        google: {
            clientID:
                '887853390661-ii23limq7ojqtijbpp0mfv1v30didihg.apps.googleusercontent.com',
            clientSecret: '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',
            callbackURL: 'http://localhost:5000/auth/google/getTokenFromAuthenticationServer',
            scope: ['email', 'profile'],
        },
    },

    procedure: {
        user: {
            getUser: 'sp_s_ Users',
            insertUpdateUser: '[dbo].[usp_s_Users]',
        }
    }
};
