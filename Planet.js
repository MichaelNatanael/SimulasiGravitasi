function Planet(size) {
	this.bola=new Objekbola(size,"red");
          this.efek=new Objekbola(size*13,"white");
          this.atmosfer= new Objekbola(size*4,"cyan");
          this.gravitasi=1;
          this.range=size*13;
          this.rangeAtmosfer=size*4;
          this.gayaGesek=0.01;
}
              
Planet.prototype.draw = function(ctx) {
          this.efek.draw(ctx);
          this.atmosfer.draw(ctx);
          this.bola.draw(ctx);
          
};

Planet.prototype.start = function(x,y) {
	this.bola.x = x;
	this.bola.y = y;
	this.efek.x = x;
	this.efek.y = y;
	this.atmosfer.x = x;
	this.atmosfer.y = y;
};

Planet.prototype.change = function(size) {
	this.bola.radius=size;
          this.efek.radius=size*13;
          this.range=size*12;
          this.rangeAtmosfer=size*4;
          this.atmosfer.radius=size*4;
};