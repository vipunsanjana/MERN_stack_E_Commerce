import bcrypt from "bcryptjs";

export const hashPassword = async (password) => {
    try {
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        return hashedPassword;
    } catch (error) {
        console.error("Error hashing the password:", error.message);
        throw error; // Re-throw the error to be handled where the function is called
    }
}

export const comparePassword = async (password, hashedPassword) => {
    try {
        return await bcrypt.compare(password, hashedPassword);
    } catch (error) {
        console.error("Error comparing passwords:", error.message);
        throw error; // Re-throw the error to be handled where the function is called
    }
}
