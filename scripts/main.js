import { FlowerList } from "./flowers/FlowerList.js";
import { getFlowers } from "./flowers/FlowerProvider.js";

getFlowers()
.then(FlowerList)
