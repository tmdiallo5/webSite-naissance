import { Company } from "./Company"
import { Profile } from "./Profile"

export type Declarations = {
    id: string|number,
    image: string,
    status:string,
    picture: string,
    registered: string,
    company: Company,
    child: Profile,
    firstParent: Profile,
    secondParent: Profile,

}