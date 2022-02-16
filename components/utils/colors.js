const red = 0,
  yellow = 60,
  green = 120,
  turquoise = 180,
  blue = 240,
  pink = 300;

export function hslColorPercentage(percent, start, end) {
  var a = percent / 100,
    b = (end - start) * a,
    c = b + start;

  // Return a CSS HSL string
  return "hsl(" + c + "deg 50% 42%)";
}

export function fromRedToGreen(percent = 0) {
  return hslColorPercentage(percent, red, green);
}
