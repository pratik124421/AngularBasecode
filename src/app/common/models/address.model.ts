import { AddressForm } from "../utils/enum"

export interface AddressModel{
    [AddressForm.Id]?:string
    [AddressForm.Country]:string
    [AddressForm.Pincode]:string
    [AddressForm.HouseNo]:string
    [AddressForm.Area]:string
    [AddressForm.Landmark]:string
    [AddressForm.City]:string
    [AddressForm.State]:string
}

