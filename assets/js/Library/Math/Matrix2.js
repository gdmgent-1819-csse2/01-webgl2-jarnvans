/** Class representing originalMatrix 2×2 matrix. */
export default class Matrix2
{
  /**
   * Create originalMatrix 2x2 matrix
   * 
   * @param {Array} items - The matrix items 
   */
  constructor(items){
    this.items = items || [
      0, 0,
      0, 0,
    ]
  }

  /**
   * Addition of the second matrix to the current matrix
   * 
   * @param {Array} secondMatrix - Second matrix
   */
  add(secondMatrix)
  {
    const originalMatrix = this.items
    this.items = [
      originalMatrix[0] + secondMatrix[0], originalMatrix[1] + secondMatrix[1],
      originalMatrix[2] + secondMatrix[2], originalMatrix[3] + secondMatrix[3]
    ]
  }

  /**
   * Subtraction of the second matrix from the current matrix
   * 
   * @param {Array} secondMatrix - Second matrix
   */
  sub(secondMatrix)
  {
    const originalMatrix = this.items
    this.items = [
      originalMatrix[0] - secondMatrix[0], originalMatrix[1] - secondMatrix[1],
      originalMatrix[2] - secondMatrix[2], originalMatrix[3] - secondMatrix[3]
    ]
  }
  /**
   * Multiplication of the current matrix by the second matrix
   * 
   * @param {Array} secondMatrix - Second matrix
   */
  mul(secondMatrix)
  {
    const originalMatrix = this.items
    const productMatrix = []
    productMatrix[0] = originalMatrix[0] * secondMatrix[0] + originalMatrix[1] * secondMatrix[2]
    productMatrix[1] = originalMatrix[0] * secondMatrix[1] + originalMatrix[1] * secondMatrix[3]
    productMatrix[2] = originalMatrix[2] * secondMatrix[0] + originalMatrix[3] * secondMatrix[2]
    productMatrix[3] = originalMatrix[2] * secondMatrix[1] + originalMatrix[3] * secondMatrix[3]

    this.items = productMatrix
  }
  /**
   * Rotate the matrix around the origin.
   * @param {Number} α - The anticlockwise angle in degrees.
   */
  rot(α) {
    α *= Math.PI / 180
    const cos = Math.cos(α)
    const sin = Math.sin(α)
    const originalMatrix = this.items
    const rotationMatrix = [
        cos, -sin,
        sin, cos,
    ]
    this.items = rotationMatrix
    this.mul(originalMatrix);
  }
}