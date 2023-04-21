import { LocationCollections } from "../utils/enum"

export interface LocationModel{
    [LocationCollections.location_contry]:string
    [LocationCollections.location_state]:Array<string>
    [LocationCollections._id]:string
}

