export interface Wine {
    name: string;
    imageURL: string;
    price: number;
    isOnSale: boolean;
    quantityInCart: number;
    foodPairing: Food[]
}
export interface Food {
    name: string;
    kcal: number;
    vegan: boolean;
    gluten: boolean;
}