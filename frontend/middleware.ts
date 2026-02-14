export const config = {
    matcher: '/',
};

export default function middleware(request: Request) {
    const env = process.env.VERCEL_ENV;

    if (env === 'production') {
        return;
    }

    const authorization = request.headers.get('authorization');

    if (authorization) {
        const basicAuth = authorization.split(' ')[1];
        const [username, password] = atob(basicAuth).split(':');

        if (username === process.env.BASIC_AUTH_USERNAME && password === process.env.BASIC_AUTH_PASSWORD) {
            return;
        }
    }
    return new Response('Auth Required', {
        status: 401,
        headers: {
            'WWW-Authenticate': 'Basic realm="Secure Area"',
        },
    });
}