class drop {
    constructor(x){
        var options = {
         isStatic:false, 
         restitution:1.3, 
         friction:0.1, 
         density:3 
        }
    
        this.body = Bodies.circle(x, 1, 2, options);
    this.radius = radius;
    this.image = loadImage("images/drop.png");
    
    World.add(world, this.body);
    }
    display(){
        

        push ();
        translate(this.body.position.x, this.body.position.y);
        rotate (this.body.angle);
        ellipseMode(RADIUS)
        ellipse(0,0,this.radius,this.radius) 
        pop ();
    }
}