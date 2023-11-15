import OrderDetailInterface from "./OrderDetailInterface"

export default interface AvailableOrderDetailInterface {
    address : string
    customerName : string
    salary : number
    orderDetails : OrderDetailInterface[]
}
