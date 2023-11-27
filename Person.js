export class Person{
    #name;
    #mail;
    #phone;
    #location;
    #image;
    #time;
    constructor(name,mail) {
        this.#name=name;
        this.#mail=mail;
    }

    get name(){
        return this.#name;
    }

    set name(name){
        this.#name=name;
    }

    get mail(){
        return this.#mail;
    }

    set mail(mail){
        this.#mail=mail;
    }

    get phone(){
        return this.#phone;
    }

    set phone(phone){
        this.#phone=phone;
    }

    get location(){
        return this.#location;
    }

    set location(location){
        this.#location=location;
    }

    get image(){
        return this.#image;
    }

    set image(image){
        this.#image=image;
    }

    
    get time(){
        return this.#time;
    }

    set time(time){
        this.#time=time;
    }

    getEntries(){
        return [["Name",this.#name],["Mail",this.#mail],["Phone",this.#phone],["Location",this.#location]];
    }
}