const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://Shreyash_Boss:Shreyash123@cluster0.suuwvcl.mongodb.net/gofoodmern?retryWrites=true&w=majority'

const mongoDB=async()=>{
    await mongoose.connect(mongoURI,{useNewUrlParser: true },async(err,result)=>{
        if(err) console.log("---",err)
        else{
            console.log("Connected hai");
            const fetched_data=await mongoose.connection.db.collection("food_items");
            fetched_data.find({}).toArray(async function(err,data){
            const foodCategory = await mongoose.connection.db.collection("foodCategory");
            foodCategory.find({}).toArray(function (err,catData){
                if(err) console.log(err);
                else {
                    global.food_items = data;
                    global.foodCategory = catData;
                }
            })
                // if(err) console.log(err);
                // else {
                //     global.food_items = data;
                //     console.log( )
                // }
            } )
        } 
    });
    


};
module.exports = mongoDB;