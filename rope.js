class Rope{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness:0.01,
            length:400
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
   //   if (rope.body.length<400)
    }

    

    display(){
     line (this.sling.bodyA.position.x,this.sling.bodyA.position.y,
        this.sling.pointB .x,this.sling.pointB.y)
    
}}