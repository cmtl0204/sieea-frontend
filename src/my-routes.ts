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
        base: 'pages',
        users: {
            absolute: 'pages/users',
            base: 'users',
            profile: 'profile',
            profileAbsolute: '/pages/users/profile',
        },
        validationGuides: {
            absolute: 'pages/validation-guide',
            base: 'validation-guide',
        },
        trainings: {
            absolute: 'pages/trainings',
            base: 'trainings',
        },
        activities: {
            absolute: 'pages/activities',
            base: 'activities',
        },
        states: {
            absolute: 'pages/states',
            base: 'states',
        },
    },
    auth: {
        base: 'auth'
    },
    login: 'auth/login',
    dashboard: {
        base: ''
    }
};
