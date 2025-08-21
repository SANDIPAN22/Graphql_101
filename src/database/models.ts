import mongoose from "mongoose"
const customersSchema = new mongoose.Schema({
    name: {type: String},
    email: {type: String},
    username: {type: String},
    address: {type: String},
    active: {type: Boolean},
    accounts: [Number],
})

const accountsSchema = new mongoose.Schema({
    account_id: Number,
    limit: Number,
    products: [String]
})


export const Customers = mongoose.models?.Customers || mongoose.model("customers", customersSchema)
export const Accounts = mongoose.models?.Accounts || mongoose.model("accounts", accountsSchema)