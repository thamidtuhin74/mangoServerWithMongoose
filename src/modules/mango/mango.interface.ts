export interface Imango {
    name:string;
    varity: string;
    quality: "A-Grade"|"B-Grade"|"C-Grade";
    unit: "KG" |"TON";
    price: number;
    stock: number;
    origin: string;
    season: "summer" | "winter";
}