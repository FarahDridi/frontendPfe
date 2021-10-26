export class Taxe {
    constructor(public nom:string,
        public label:string,
        public type:string,
        public signe:string,
        public valeur:string,
        public taxe_tva:string,
        public utilisation:string,
        public application:string,
        public taxe_produits:string){}
}
export class Tva {
    constructor(
        public valeur:string){}
}