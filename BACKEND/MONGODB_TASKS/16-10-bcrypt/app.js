const bcrypt = require('bcrypt');

async function hashpassword(password){
    const hashpassword = await bcrypt.hash(password, 10);
    console.log("Hashed Password : ", hashpassword);
    return hashpassword;
}

(async () => {
    const password = '123';
    const hashpwd = await hashpassword(password)
})();