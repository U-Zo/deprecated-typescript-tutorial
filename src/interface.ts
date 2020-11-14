// Shpae interface
interface Shape {
  getArea(): number; // getArea() 함수 강제, return 타입 number
}

class Circle implements Shape {
  // implements 키워드를 사용하여 해당 클래스가 Shape interface 조건 충족
  // radius: number; // 멤버 변수 radius 값 설정

  // 생성자
  constructor(public radius: number) {
    this.radius = radius;
  }

  // interface에 정의된 함수 정의
  getArea() {
    return this.radius * this.radius * Math.PI;
  }
}

class Rectangle implements Shape {
  // width: number;
  // height: number;

  constructor(private width: number, private height: number) {
    this.width = width;
    this.height = height;
  }

  getArea() {
    return this.width * this.height;
  }
}

const circle = new Circle(5);
const rectangle = new Rectangle(10, 5);

console.log(circle.radius);
// console.log(rectangle.width);

const shapes: Shape[] = [new Circle(5), new Rectangle(10, 5)];

shapes.forEach((shape) => {
  console.log(shape.getArea());
});
