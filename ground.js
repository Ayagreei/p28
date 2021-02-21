class Ground{
    constructor(x,y,width,height){
        var options = {
            isStatic: true
            ,dentity:10000         
        }
        this.body = Bodies1.rectangle(x,y,width,height,options)
        this.width = width;
        this.height = height;
        World1.add(world, this.body); 
    }
    display(){
     var pos = this.body.position;
     rectMode(CENTER);
     fill("brown");
     rect(pos.x,pos.y,this.width,this.height);
    }
}