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

    procedure: {
        user: {
            getUser: 'sp_s_ Users',
            insertUpdateUser: '[dbo].[usp_s_Users]',
        }
    }
};
