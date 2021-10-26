export class Facture {

    constructor(
        public client:string,
        public date_document:string,
        public projet:string,
        public note:string,
        public designation:string,
        public quantite:string,
        public prix_ht:string,
        public unite:string,
        public tva:string,
        public total_ht:string,
        public etat:string){}
        
}
