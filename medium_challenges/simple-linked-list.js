class Element {
  constructor(data, pointsTo = null) {
    this.data = data;
    this.pointsTo = pointsTo;
  }
  
  datum() {
    return this.data;
  }

  isTail() {
    return !this.next();
  }

  next() {
    return this.pointsTo;
  }

  changePointerToBe(element) {
    this.pointsTo = element;
  }
}