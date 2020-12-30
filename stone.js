class Stone{
        constructor(x, y, width, height){
            var options = {
                isStatic: false,
                restitution: 0,
                friction: 1.0,
                density: 1.2
            }
            this.body = Bodies.rectangle(x, y, width, height, options);
            this.width = width;
            this.height = height;
            this.x = x;
            this.y = y;
            this.image = loadImage("sprites/stone.png")
            World.add(world, this.body);
        }
        display(){
            var pos = this.body.position;
            imageMode(CENTER);
            fill("brown");
            image(this.image, this.x, this.y, this.width, this.height);
        }
}