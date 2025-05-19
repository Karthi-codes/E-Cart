const mongoose=require("mongoose");// this is used to show the url in the cmd prompt which is connected with the database are not
const cdbs= ()=>{
    mongoose.connect(process.env.DB_URL).then((con)=>{
        console.log("MongoDB connected succesfully:"+con.connection.host);
    })
}

module.exports=cdbs;