class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        this.sling1 = loadImage("sprites/sling1.png");
        this.sling2 = loadImage("sprites/sling2.png");
        this.sling3 = loadImage("sprites/sling3.png");
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        image(this.sling1,200,20);
        image(this.sling2,170,15)
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            stroke(48, 23, 7);
            push();
            if (pointA.x > 250) {
                strokeWeight(1.5);
                line(pointA.x, pointA.y, pointB.x, pointB.y);
                line(pointA.x, pointA.y, pointB.x + 45, pointB.y - 1);
                image(this.sling3,pointA.x - 30,pointA.y - 10, 15, 30);  
            } else {
                strokeWeight(4);
                line(pointA.x, pointA.y, pointB.x, pointB.y);
                line(pointA.x, pointA.y, pointB.x + 45, pointB.y - 1);
                image(this.sling3,pointA.x - 30,pointA.y - 10, 15, 30);
            }
            pop();
        }

    }
    
}