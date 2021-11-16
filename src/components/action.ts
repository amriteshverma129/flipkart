import { SelectedObject } from "./interface"
export const increaseQuantity = (selectedObject: SelectedObject) => {
    return {
        type: "INCREASE_QUANTITY",
        selectedObject: selectedObject
    }
}

export const decreaseQuantity = (selectedObject: SelectedObject) => {
    return {
        type: "DECREASE_QUANTITY",
        selectedObject: selectedObject
    }
}