import bcrypt from 'bcryptjs'

const users = [
    {
        name: 'mohamed',
        email: 'admin@example.com',
        passowrd: bcrypt.hashSync('123456', 10),
        isAdmin: true
    }, {
        name: 'moatasem',
        email: 'motasem@example.com',
        passowrd: bcrypt.hashSync('123456', 10),
    }
    , {
        name: 'nagwan',
        email: 'nagwan@example.com',
        passowrd: bcrypt.hashSync('123456', 10),
    }

]


export default users