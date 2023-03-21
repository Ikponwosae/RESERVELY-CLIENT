
import { faArchive, faCheckCircle, faWalking } from '@fortawesome/free-solid-svg-icons';

const trafficShares = [
    { id: 1, label: "Waiting", value: 25, color: "info", icon: faArchive },
    { id: 2, label: "Ongoing", value: 10, color: "dark", icon: faWalking },
    { id: 3, label: "Completed", value: 65, color: "success", icon: faCheckCircle }
];

const totalOrders = [
    { id: 1, label: "July", value: [1, 5, 2, 5, 4, 3], color: "primary" },
    { id: 2, label: "August", value: [2, 3, 4, 8, 1, 2], color: "secondary" }
];

export {
    trafficShares,
    totalOrders
};