import { FlowerList } from "./flowers/FlowerList.js";
import { getFlowers } from "./flowers/FlowerProvider.js";
import { RetailerList } from "./retailers/RetailerList.js";
import { getRetailers } from "./retailers/RetailerProvider.js";
import { getDistributors } from "./distributors/DistributorProvider.js";



getRetailers()
.then(getDistributors)
.then(RetailerList)
.then(getFlowers)
.then(FlowerList)


