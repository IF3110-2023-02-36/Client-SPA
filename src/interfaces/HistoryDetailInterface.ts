import OrderDetail from "./OrderDetail"

export default interface HistoryDetailInterface {
    address : string
    customerName : string
    salary : number
    rating : number
    orderDetails : OrderDetail[]
}
