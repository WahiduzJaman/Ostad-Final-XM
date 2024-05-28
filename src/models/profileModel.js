const mongoose = require('mongoose');
const DataSchema = new mongoose.Schema({
    cus_name:{type:String},
    cus_add:{type:String},
    cus_city:{type:String},
    cus_state:{type:String},
    cus_postCode:{type:String},
    cus_country:{type:String},
    cus_phone:{type:String},
    cus_fex:{type:String},
    ship_name:{type:String},
    ship_add:{type:String},
    ship_city:{type:String},
    ship_state:{type:String},
    ship_postCode:{type:String},
    ship_country:{type:String},
    ship_phone:{type:String},
    userID: { type: mongoose.Schema.Types.ObjectId, required: true },
}, { timestamps: true, versionKey: false });

const ProfileModel = mongoose.model('profiles', DataSchema);
module.exports = ProfileModel;
