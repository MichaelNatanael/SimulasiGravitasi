function Objekbola(jarijari,warna) {
	this.color = warna;
	this.lineWidth=1;
	this.x=100;
	this.y=100;
	this.rotation=0;
	this.scaleX=1;
	this.scaleY=1;
	this.radius=jarijari;
	this.vx=0;
	this.vy=0;
	this.ax=0;
	this.ay=0;
	this.massa=0;
}

Objekbola.prototype.draw = function(ctx) {
	ctx.save();
	ctx.translate(this.x,this.y);
	ctx.scale(this.scaleX,this.scaleY);
	ctx.lineWidth=this.lineWidth;
	ctx.fillStyle=this.color;
	ctx.beginPath();
	ctx.arc(0,0,this.radius,0,(Math.PI*2),true);
	ctx.closePath();
	ctx.fill();
	if(this.lineWidth>0){
		ctx.stroke();
	}
	ctx.restore();
};
