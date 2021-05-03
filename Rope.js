class Rope {
  constructor(bodyA, pointB) {
    //json - javascript object notation
    var options = {
      bodyA: bodyA,
      pointB: pointB,
      stiffness: 1.2,
      lenght: 250
    };
    this.rope = Constraint.create(options);
    this.pointB = pointB;
    World.add(world, this.rope);

  };
  display() {
    var pointA = this.rope.bodyA.position;
    var pointB = this.pointB;
    push();
    stroke("blue");
    strokeWeight(6);
    line(pointB.x, pointB.y, pointA.x, pointA.y);

    pop();
  }
}