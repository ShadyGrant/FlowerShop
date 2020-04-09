export const FlowerHTML = (flowerObject) => {
    return `
        <section class="flower">
            <h2>Name: ${flowerObject.name}</h2>
            <div>Color: ${flowerObject.color}</div>
        </section>
    `
}