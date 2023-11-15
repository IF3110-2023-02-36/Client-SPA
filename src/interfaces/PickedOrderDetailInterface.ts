import OrderDetail from "./OrderDetail"

export default interface PickedOrderDetailInterface {
    address : string
    customerName : string
    salary : number
    description : string
    orderDetails : OrderDetail[];
}
