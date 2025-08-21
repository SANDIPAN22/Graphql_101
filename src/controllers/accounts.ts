import { Accounts } from "../database/models"

export const getAccountsLogic = async()=>{
    const data = await Accounts.find()
    return data
}