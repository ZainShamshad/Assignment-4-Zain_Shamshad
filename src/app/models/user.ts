export class User {

    private id:number = 0;
    public flags:number = 0;
    public FLAG_LIMIT: number;
    private username:string = '';
    private email:string = '';
    private password:string = '';
    private designation:string = '';
    private imageUrl:string = '';
    private blocked:boolean = false;

    constructor(id?:number,username?:string,email?:string,password?:string,designation?:string,imageUrl?:string,blocked?:boolean,flagged?:number){
        
        this.FLAG_LIMIT = 3;

        if(id !== undefined){
            this.id = id;
        }

        if(username !== undefined){
            this.username = username;
        }

        if( email!== undefined){
            this.email = email;
        }

        if( password!== undefined){
            this.password =password ;
        }

        if( designation!== undefined){
            this.designation = designation;
        }
        
        if( imageUrl!== undefined){
            this.imageUrl =imageUrl ;
        }

        if(blocked !== undefined){
            this.blocked = blocked;
        }
        
        if(flagged !== undefined){
            this.flags = flagged;
        }
    }

    public getId(): number {
        return this.id;
    }

    public setId(id: number): void {
        this.id = id;
    }

    public getUsername(): string {
        return this.username;
    }

    public setUsername(username: string): void {
        this.username = username;
    }

    public getEmail(): string {
        return this.email;
    }

    public setEmail(email: string): void {
        this.email = email;
    }

    public getPassword(): string {
        return this.password;
    }

    public setPassword(password: string): void {
        this.password = password;
    }

    public getDesignation(): string {
        return this.designation;
    }

    public setDesignation(designation: string): void {
        this.designation = designation;
    }

    public getImageUrl(): string {
        return this.imageUrl;
    }

    public setImageUrl(imageUrl: string): void {
        this.imageUrl = imageUrl;
    }

    public getBlocked():boolean{
        return this.blocked;
    }
    
    public setBlocked(blocked: boolean): void {
        this.blocked = blocked;
    }

}
