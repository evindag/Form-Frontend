import { Receipt } from "./receipt";
import { ResponseModel } from "./responseModel";

export interface ReceiptResponseModel extends ResponseModel{
    data:Receipt[]
}