import { useFlowers } from "./FlowerProvider.js";
import { FlowerHTML } from "./Flower.js";

const contentTarget = document.querySelector(".flowersContainer")

const render = flowersToRender => {
    const flowers = useFlowers()
    

    contentTarget.innerHTML = flowersToRender.map(
        (flowerObject) => {
            return FlowerHTML(flowerObject)
        }
    ).join("")
}



export const FlowerList = () => {
    const flowers = useFlowers()

    render(flowers)
}
        