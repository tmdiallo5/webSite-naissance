import { Company } from "./Company"
import { Profile } from "./Profile"

export type Requests = {
    id: string|number,
    image: string,
    picture: string,
    registered: string,
    company: Company,
    child: Profile,
    parent: Profile,

}