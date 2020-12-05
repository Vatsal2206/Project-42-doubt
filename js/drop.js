class Drop{
    constructor(x,y,r){
        var R_op = {
          'isStatic':false,
          'friction':0.1
        }

        this.x = x;
        this.y = y;
        this.r = r;


        this.ball = Bodies.circle(x,y,r,R_op);

        World.add(world,this.ball)

    }

    display(){

        push();

        ellipseMode(RADIUS)
        fill(14, 23, 120)
        ellipse(this.x,this.y,this.r)

        pop();

    }
}