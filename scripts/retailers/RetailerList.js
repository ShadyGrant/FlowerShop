import { useRetailers } from "./RetailerProvider.js"
import { RetailerHTML } from "./Retailer.js"

const contentTarget = document.querySelector(".retailersContainer")

const render = retailersToRender => {
    const retailers = useRetailers()
    

    contentTarget.innerHTML = retailersToRender.map(
        (retailerObject) => {
            return RetailerHTML(retailerObject)
        }
    ).join("")
}



export const RetailerList = () => {
    const retailers = useRetailers()

    render(retailers)
}
        