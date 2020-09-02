class Thrower{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.boy = Constraint.create(options);
        World.add(world, this.boy);
        this.boy=loadImage("boy.png");
    }
    attach(body){
        this.boy.bodyA=body
    }
    fly(){
        this.boy.bodyA = null;
    }
    display(){
        if(this.boy.bodyA){
            var pointA = this.boy.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(14);
            stroke(48,22,8);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
            image(this.boy,700,100);
        }
    }
    
}