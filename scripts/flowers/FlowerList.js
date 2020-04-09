import { useFlowers } from "./FlowerProvider.js";
import { FlowerHTML } from "./Flower.js";

const contentTarget = document.querySelector(".container")

const render = flowersToRender => {
    const computers = useFlowers()
    

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
        