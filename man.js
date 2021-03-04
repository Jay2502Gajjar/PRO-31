class man{

    constructor(x,y)
    {
        var options=
        {
             isStatic: true,
             
        }
       this.man1 = Bodies.circle(x,y,30,options)
       
       this.radius = 40;
       this.image = loadImage("walking_1.png");

      
 
       World.add(world,this.man1)
       
      
    }
 
 
    display()
    {
       
        push()
		fill(255,0,255)
		imageMode(CENTER);
		ellipseMode(CENTER);
		image(this.image, 200,510,200)
		pop()
    }
 
 }