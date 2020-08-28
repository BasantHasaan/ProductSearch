let mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(`mongodb://product:pr0duct@ds127260.mlab.com:${process.env.DB_PORT || "27260"}/${process.env.DB_NAME || "products"}`, 
//{
    // reconnectTries: Number.MAX_VALUE, // Never stop trying to reconnect
    // reconnectInterval: 1000, // Reconnect every 500ms
    // poolSize: 20, // Maintain up to 20 socket connections
    // If not connected, return errors immediately rather than waiting for reconnect
//},
{ useNewUrlParser: true,
useFindAndModify:false,
useCreateIndex: true,
useUnifiedTopology: true }
)


mongoose.connection.on('error',(err)=>{
    console.log(err);
});

module.exports = {
    mongoose: mongoose
}
