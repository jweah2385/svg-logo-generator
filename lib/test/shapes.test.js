const { square, triangle, circle } = require('../shapes');

const tryShapes = describe('shapes', () => {
  test('Print a svg file string of a square', () => {
    const squareObj = new square('blue', 'svg', 'square');
    const result = squareObj.render();
    const expectedString = `
    <svg
            version="1.1"
            width="300"
            height="200"
            xmlns="http://www.w3.org/2000/svg"
          > +
            <rect x="50" y="50" width="200" height="200" fill="blue" /> + 
            <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">
              svg
            </text>
          </svg>`;
    // expect(result).toMatch(new RegExp(expectedString));
    const finalResult = result.replace(/\s/g, '');
    const finalExpected = expectedString.replace(/\s/g, '');
    expect(finalResult).toEqual(finalExpected);
  });

  test('Print a svg file string of a square', () => {
    const triangleObj = new triangle('green', 'svg', 'triangle');
    const result = triangleObj.render();
    const expectedString = `
    <svg
        version="1.1"
        width="300"
        height="200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <polygon points="150,20 50,180 250,180" fill="green" />
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">
          svg
        </text>
      </svg>`;
    // expect(result).toMatch(new RegExp(expectedString));
    const finalResult = result.replace(/\s/g, '');
    const finalExpected = expectedString.replace(/\s/g, '');
    expect(finalResult).toEqual(finalExpected);
  });

  test('Print a svg file string of a circle', () => {
    const circleObj = new circle('yellow', 'svg', 'circle');
    const result = circleObj.render();
    const expectedString = `
    <svg
    version="1.1"
    width="300"
    height="200"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="150" cy="100" r="80" fill="yellow" />
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">
      svg
    </text>
  </svg>`;
    // expect(result).toMatch(new RegExp(expectedString));
    const finalResult = result.replace(/\s/g, '');
    const finalExpected = expectedString.replace(/\s/g, '');
    expect(finalResult).toEqual(finalExpected);
  });
});
