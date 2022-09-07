import { Check } from "./check";
import { ResponseModel } from "./responseModel";

export interface CheckResponseModel extends ResponseModel{
    data:Check[]
}