import OrderDetail from "./OrderDetail"

export default interface AvailableOrderDetailInterface {
    address : string
    customerName : string
    salary : number
    orderDetails : OrderDetail[]
}
