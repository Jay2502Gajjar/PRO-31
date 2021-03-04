class Drops{

   constructor(x,y)
   {
       var options=
       {
            isStatic: false,
            friction: 0.1
       }
      this.drop1 = Bodies.circle(x,y,5,options)
      
      this.radius = 5;
     

      World.add(world,this.drop1)
      
     
   }


   display()
   {
      
      fill("blue");
      ellipse(this.drop1.position.x, this.drop1.position.y , this.radius,this.radius);

      if(this.drop1.position.y > height)
    {
        Matter.Body.setPosition(this.drop1, {x:random(0,400),y:random(0,400)})
    }

      

   }

}