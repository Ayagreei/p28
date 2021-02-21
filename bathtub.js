class Bath{
    constructor(x,y,width,height){

        var options ={
            isStatic : true
        }
        this.image=loadImage("dustbingreen.png")
        this.body = Bodies1.rectangle(x,y,width,height,options);
        World1.add(world,this.body);
        this.width = width;
        this.height = height;
    }
    display(){
        var pos = this.body.position;
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.width,this.height);


    }
}