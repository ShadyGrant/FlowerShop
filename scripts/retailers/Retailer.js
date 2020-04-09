export const RetailerHTML = (retailerObject, distributorObject) => {
    return `
        <section class="retailer">
            <h2>Name: ${retailerObject.name}</h2>
            <div>City: ${retailerObject.city}</div>
            <div>State: ${retailerObject.state}</div>
            <div>Distributor: ${distributorObject.name}</div>
        </section>
    `
}