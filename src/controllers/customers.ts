import { Customers } from "../database/models"

export const getCustomersLogic = async () =>{
    const data = await Customers.find()
    return data
}

export const getCustomerLogic = async (_:any, arg:{id: String}) =>{
    const data = await Customers.findById(arg.id)
    return data
}

export const addCustomerLogic = async(_:any, {data}: any) =>{
    try{
        const newCustomer = new Customers(data)
        await newCustomer.save()
        return "User is added!"
    }
    catch(err){
        return "Failed to add the user"
    }
}