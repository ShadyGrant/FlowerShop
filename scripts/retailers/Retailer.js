export const RetailerHTML = (retailerObject) => {
    return `
        <section class="retailer">
            <h2>Name: ${retailerObject.name}</h2>
            <div>City: ${retailerObject.city}</div>
            <div>State: ${retailerObject.state}</div>
        </section>
    `
}