export class Login {
    constructor(
        public username:string,
        public password:string,
        public stayLoggedIn?: boolean
    ){}
}