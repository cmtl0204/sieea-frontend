export const MY_ROUTES = {
    home: '',
    layout: {
        base: 'layout'
    },
    errorPages: {
        base: 'errors',
        unauthorized: {
            absolute: 'errors/401',
            base: '401'
        },
        forbidden: {
            absolute: 'errors/403',
            base: '403'
        },
        notFound: {
            absolute: 'errors/404',
            base: '404'
        },
        unavailable: {
            absolute: 'errors/503',
            base: '503'
        }
    },
    pages: {
        base: 'pages'
    },
    auth: {
        base: 'auth'
    },
    login: 'auth/login',
    dashboard: {
        base: ''
    }
};
