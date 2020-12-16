class Slings
{
    constructor(bodyA, pointB)
    {
        var options = 
        {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB=pointB;

        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    display()
    {
        if(this.sling.bodyA)
        {
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            stroke(245,244,0);
            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
    
    attach(bodyA)
    {
        this.sling.bodyA = bodyA;
    }

    fly()
    {
        this.sling.bodyA = null;
    }
}
