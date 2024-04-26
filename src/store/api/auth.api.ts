

export const login = (userName:string, password: string) => {
if(userName === password && userName === 'user1234') return {
    name: 'user1234',
    role: 'user',
    token: 'qwertz'
}
if(userName === password && userName === 'admin123') return {
    name: 'admin123',
    role: 'admin',
    token: 'qwertzqwertz'
}
else
    return '404 Not Found User';
}


