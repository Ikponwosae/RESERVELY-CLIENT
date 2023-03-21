
import moment from "moment-timezone";

export default [
    {
        "key": 1,
        "name": "Jane Doe",
        "email": "jdoes@email.com",
        "dateBooked": moment().subtract(1, "days").format("DD MMM YYYY"),
        "Service": "Hair wash",
        "start": "14:30",
        "end": "17:30",
    },
    {
        "key": 2,
        "name": "Jane Doe",
        "email": "jdoes@email.com",
        "dateBooked": moment().subtract(10, "days").format("DD MMM YYYY"),
        "Service": "Hair wash",
        "start": "14:30",
        "end": "18:30",
    },
    {
        "key": 3,
        "name": "Jane Doe",
        "email": "jdoes@email.com",
        "dateBooked": moment().subtract(3, "days").format("DD MMM YYYY"),
        "Service": "Hair wash",
        "start": "14:30",
        "end": "14:30",
    },
    {
        "key": 4,
        "name": "Jane Doe",
        "email": "jdoes@email.com",
        "dateBooked": moment().subtract(2, "days").format("DD MMM YYYY"),
        "Service": "Hair wash",
        "start": "14:30",
        "end": "14:30",
    },
];
//{
    //     "invoiceNumber": 300499,
    //     "status": "Paid",
    //     "subscription": "Platinum Subscription Plan",
    //     "price": "799,00",
    //     "issueDate": moment().subtract(2, "days").format("DD MMM YYYY"),
    //     "dueDate": moment().subtract(2, "days").add(1, "month").format("DD MMM YYYY")
    // },
    // {
    //     "invoiceNumber": 300498,
    //     "status": "Paid",
    //     "subscription": "Platinum Subscription Plan",
    //     "price": "799,00",
    //     "issueDate": moment().subtract(2, "days").format("DD MMM YYYY"),
    //     "dueDate": moment().subtract(2, "days").add(1, "month").format("DD MMM YYYY")
    // },
    // {
    //     "invoiceNumber": 300497,
    //     "status": "Paid",
    //     "subscription": "Flexible Subscription Plan",
    //     "price": "233,42",
    //     "issueDate": moment().subtract(3, "days").format("DD MMM YYYY"),
    //     "dueDate": moment().subtract(3, "days").add(1, "month").format("DD MMM YYYY")
    // },
    // {
    //     "invoiceNumber": 300496,
    //     "status": "Due",
    //     "subscription": "Gold Subscription Plan",
    //     "price": "533,42",
    //     "issueDate": moment().subtract(1, "day").subtract(1, "month").format("DD MMM YYYY"),
    //     "dueDate": moment().subtract(1, "day").format("DD MMM YYYY")
    // },
    // {
    //     "invoiceNumber": 300495,
    //     "status": "Due",
    //     "subscription": "Gold Subscription Plan",
    //     "price": "533,42",
    //     "issueDate": moment().subtract(3, "days").subtract(1, "month").format("DD MMM YYYY"),
    //     "dueDate": moment().subtract(3, "days").format("DD MMM YYYY")
    // },
    // {
    //     "invoiceNumber": 300494,
    //     "status": "Due",
    //     "subscription": "Flexible Subscription Plan",
    //     "price": "233,42",
    //     "issueDate": moment().subtract(4, "days").subtract(1, "month").format("DD MMM YYYY"),
    //     "dueDate": moment().subtract(4, "days").format("DD MMM YYYY")
    // },
    // {
    //     "invoiceNumber": 300493,
    //     "status": "Canceled",
    //     "subscription": "Gold Subscription Plan",
    //     "price": "533,42",
    //     "issueDate": moment().subtract(20, "days").subtract(1, "month").format("DD MMM YYYY"),
    //     "dueDate": moment().subtract(20, "days").format("DD MMM YYYY")
    // },
    // {
    //     "invoiceNumber": 300492,
    //     "status": "Canceled",
    //     "subscription": "Platinum Subscription Plan",
    //     "price": "799,00",
    //     "issueDate": moment().subtract(2, "months").format("DD MMM YYYY"),
    //     "dueDate": moment().subtract(3, "months").format("DD MMM YYYY")
    // },
    // {
    //     "invoiceNumber": 300491,
    //     "status": "Paid",
    //     "subscription": "Platinum Subscription Plan",
    //     "price": "799,00",
    //     "issueDate": moment().subtract(6, "days").format("DD MMM YYYY"),
    //     "dueDate": moment().subtract(6, "days").add(1, "month").format("DD MMM YYYY")
    // }