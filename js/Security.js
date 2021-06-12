class Security {

    constructor(){
    this.access1 = createInput("code1")
    this.access1.position(100,90);
    this.access1.style('background' , 'white');
     
    this.button = createButton('check');
    this.button.position(100,20);
    this.button.style('background' , 'lightgrey');

 
    }

    display(){
    this.button1.mousePressed(() => {
         if(system.authenicate(accessCode1, this.access1.value())){
            this.button1.hide();
            this.access1.hide();

    
}
});
this.button1.mousePressed(() => {
    if(system.authenicate(accessCode1, this.access1.value0())){
        this.button1.hide();
        this.account.hide();
        score++;

}
});
}
}
