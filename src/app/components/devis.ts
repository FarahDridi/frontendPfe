import { Client } from "./client";
import { Service } from "./service";
import { Summary } from "./summary";

export class Devis {

    constructor(
        public client:Client,
        public date_document:Date,
        public projet:string,
        public note:string,
        public service:Service[],
        public summary: Summary[],
        public totalHt:Number,
        public totalFODEC:Number,
        public totalTVA:Number,
        public totalTTC:Number,
        public timbreFiscale:Number,
        public totalPayer:Number,
        public etat:string){}
}
