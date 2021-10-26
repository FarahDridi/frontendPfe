import { Client } from "./client";
import { Service } from "./service";

export class Commande {

    constructor(
        public client:Client,
        public date_document:Date,
        public projet:string,
        public note:string,
        public service:Service,
        public quantite:string,
        public etat:string){}
}

