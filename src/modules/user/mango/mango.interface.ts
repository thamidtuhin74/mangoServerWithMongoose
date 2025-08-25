export interface Imango {
    name:string;
    varity: string;
    unit: "KG" |"TON";
    price: number;
    stock: number;
    origin: string;
    season: "summer" | "winter";
}