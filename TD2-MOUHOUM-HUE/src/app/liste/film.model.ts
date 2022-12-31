export class film {
    title: String;
    posterUri: String; 

    constructor(title: String, posterUri: String){
        this.title = title;
        this.posterUri = posterUri;
    }

    getTitle(): String{
        return this.title;
    }

    getposterUri(): String{
        return this.posterUri;
    }
}
