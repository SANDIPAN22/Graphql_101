import { Customers } from "../database/models"

export const getCustomersLogic = async () =>{
    const data = await Customers.find()
    return data
}