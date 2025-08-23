import { Accounts } from "../database/models"

export const getAccountsLogic = async()=>{
    const data = await Accounts.find()
    return data
}
export const getAccountsByIdsLogic = async(Customer:any)=>{
    const accountsDetails = []
    for (let acc of Customer.accounts){
        const data = await Accounts.find({account_id: acc})
        accountsDetails.push(...data)
    }
    console.log(accountsDetails)
    return accountsDetails
}