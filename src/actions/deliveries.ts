import { action } from "typesafe-actions";

import * as actionTypes from "../consts/actionTypes";
import { Delivery } from "../reducers/deliveries";

export const addNewDelivery = (delivery: Delivery) => action(actionTypes.ADD_NEW_DELIVERY, delivery);
export const addAvailibleResources = (res: number | string) => action(actionTypes.ADD_AVAILIBLE_RES, res);
