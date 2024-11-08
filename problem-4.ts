{
  type Circle = { shape: string; radius: number };
  type Rectangle = { shape: string; width: number; height: number };

  const calculateShapeArea = (shape: Circle | Rectangle): number | string => {
    if ("radius" in shape) {
      return Math.PI * Math.pow(shape.radius, 2);
    } else if ("width" in shape && "height" in shape) {
      return shape.height * shape.width;
    } else {
      return `${shape} it not shape`;
    }
  };
  const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });
  console.log(circleArea);
  const rectangleArea = calculateShapeArea({
    shape: "rectangle",
    width: 4,
    height: 6,
  });
  // console.log(rectangleArea);
}
