import jwt from 'jsonwebtoken'

export const generateToken = (id) => {
    return jwt.sign({ id },"eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiQWRtaW4iLCJJc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybmFtZSI6IkphdmFJblVzZSIsImV4cCI6MTY2MzEwMTY0NywiaWF0IjoxNjYzMTAxNjQ3fQ.rbrb9WtYAkZ6cQNb3lnkB5W_5wx1_vpW1vj9SxuFbe0", {
        expiresIn : '30d'
    })
}