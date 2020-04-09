import { useRetailers } from "./RetailerProvider.js"
import { RetailerHTML } from "./Retailer.js"
import { useDistributors } from "../distributors/DistributorProvider.js"


const contentTarget = document.querySelector(".retailersContainer")

const render = retailersToRender => {
    // const retailers = useRetailers()
    const distributors = useDistributors()

    contentTarget.innerHTML = retailersToRender.map(
        (retailerObject) => {
            const foundDistributor = distributors.find(
                (distributor) => {
                    return distributor.id === retailerObject.distributorId
                }
            )
            return RetailerHTML(retailerObject, foundDistributor)
        }
    ).join("")
}



export const RetailerList = () => {
    const retailers = useRetailers()

    render(retailers)
}
        