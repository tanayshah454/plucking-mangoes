class Mangoes
{
	constructor(x,y,r)
	{
		var options={
			isStatic:true,
			restitution:1,
			friction:0,
			density:0.8
			}
		this.x=x;
		this.y=y;
		this.r=r;		
		this.body=Bodies.circle(this.x, this.y, (this.r)/2, options)
		World.add(world, this.body);
		this.image=loadImage("mango.png");
	}
	display()
	{
			var stonepos=this.body.position;
			var angle = this.body,angle;
			push()
			translate(stonepos.x, stonepos.y);
			rotate(angle)
			fill(255,0,255)
			imageMode(CENTER);
			image(this.image, 0,0,this.r, this.r)
			pop()		
	}

}