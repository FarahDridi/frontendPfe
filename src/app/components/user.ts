export class User {

    constructor(
        public nom:string,
        public prenom:string,
        public email:string,
        public password:string,
        public num:string,
        public target : string,
        public ent:string,
        public role:string,
        public _id:string,
        public mobile :string,
        public site :string,
        public matricule :string,
        public devise :string,
        public adresse :string,
        public ville :string,
        public code_postal :string,
        public pays :string)
        {}
        
}
export class Condition{
    constructor(
        public act:string,
        public taille:string,
        public pays:string,
        public dev:string)
        {}
}
