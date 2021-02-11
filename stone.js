class Stone{
    constructor(x,y, width,height ){
        var options={
            "friction":1,
            "restitution" :0.5,
            "density":5
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.body);
        this.width= width;
        this.height = height;
    }
    display(){
        var pos= this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        strokeWeight(4);
        stroke("black");
        fill("black");
        rect(0, 0, this.width, this.height);
        pop();
    }

}