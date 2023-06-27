import prisma from './config/database';


async function find() {
    const user = await prisma.user.findMany();
    return user
}

(async () => {
    const users = await find();
    console.log(users);
})();


