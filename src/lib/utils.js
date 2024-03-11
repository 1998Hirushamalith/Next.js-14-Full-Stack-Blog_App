// import mongoose from "mongoose"

// const connection = {};

//if we don't have any coonection i'm creating a new one
// and after creating we should have to update our connection
// next if it connect to db it's gonna check the connection since it's not empty
// it's gonna used to exissting one

// export const connectToDb = async () => {
//     try {
//         if (connection.isConnected){
//             console.log("Using existing connection");
//             return;
//         }
//         const db = await mongoose.connect(process.env.MONGO);
//         connection.isConnected =db.connection[0].readyState;
//       } catch (error) {
//         console.log(error);
//         throw new Error(error);
//       }
// };

import mongoose from "mongoose";

const connection = {
    isConnected: false
};

export const connectToDb = async () => {
    try {
        if (connection.isConnected) {
            console.log("Using existing connection");
            return;
        }
        const db = await mongoose.connect(process.env.MONGO);
        connection.isConnected = db.connection.readyState;
        console.log("Database connected");
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
};