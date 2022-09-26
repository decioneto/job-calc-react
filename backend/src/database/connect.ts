import mongoose from "mongoose"

function DBConnect() {
    mongoose.connect(`${process.env.CONNECT_DB}`)
    .then(() => {
        console.log("✔ Database Connected")
    })
}

export default DBConnect