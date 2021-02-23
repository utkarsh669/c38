class Box{
    constructor(x, y, width, height) {
        var options = {
            'restitution':0.4,
            'friction':1
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;

        World.add(world, this.body);
        this.Visiblity=255
      }
      display(){
         console.log(this.body.speed);
    
          push();
          translate(this.body.position.x, this.body.position.y);
          rectMode(CENTER);
          strokeWeight(2);
          stroke(0);
          rect(0, 0, this.width, this.height);
          pop();
        
      
         
       }
      
       
       
}