
import { faArchive, faCheckCircle, faWalking } from '@fortawesome/free-solid-svg-icons';
 
const trafficShares = [
    { id: 1, label: "Waiting", value: 25, color: "info", icon: faArchive },
    { id: 2, label: "Ongoing", value: 10, color: "dark", icon: faWalking },
    { id: 3, label: "Completed", value: 65, color: "success", icon: faCheckCircle }
];

const totalOrders = [
    // { id: 1, label: "July", value: [1, 5, 2, 5, 4, 3], color: "primary" },
    { id: 2, label: "data", value: [280, 107, 220, 385, 238, 133, 394, 138, 111, 212, 156, 119], color: "primary" }
];

export {
    trafficShares,
    totalOrders
};