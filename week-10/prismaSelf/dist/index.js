import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
async function insertUser(username, password, firstName, lastName) {
    const res = await prisma.user.create({
        data: {
            email: username,
            password,
            firstName,
            lastName,
        },
    });
    console.log(res);
}
async function updateUser(username, { firstName, lastName }) {
    const res = await prisma.user.update({
        where: { email: username },
        data: {
            firstName,
            lastName,
        },
    });
    console.log(res);
}
// updateUser("user1", {
//   firstName: "2223",
//   lastName: "dasdasd",
// });
async function getUser(username) {
    const user = await prisma.user.findFirst({
        where: {
            email: username,
        },
    });
    console.log(user);
}
getUser("admin1");
