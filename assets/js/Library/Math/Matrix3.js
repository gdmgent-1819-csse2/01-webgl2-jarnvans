/** Class representing originalMatrix 3×3 matrix. */
export default class Matrix3
{
  /**
   * Create originalMatrix 3x3 matrix
   * 
   * @param {Array} secondMatrix - The matrix items 
   */
  constructor(items){
    this.items = items || [
      0, 0, 0,
      0, 0, 0,
      0, 0, 0,
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
      originalMatrix[0] + secondMatrix[0], originalMatrix[1] + secondMatrix[1], originalMatrix[2] + secondMatrix[2],
      originalMatrix[3] + secondMatrix[3], originalMatrix[4] + secondMatrix[4], originalMatrix[5] + secondMatrix[5],
      originalMatrix[6] + secondMatrix[6], originalMatrix[7] + secondMatrix[7], originalMatrix[8] + secondMatrix[8],
    ]
  }

  /**
   * Subtraction of the second matrix from the current matrix
   * 
   * @param {Matrix3} secondMatrix
   */
  sub(secondMatrix)
  {
    const originalMatrix = this.items
    this.items = [
      originalMatrix[0] - secondMatrix[0], originalMatrix[1] - secondMatrix[1], originalMatrix[2] - secondMatrix[2],
      originalMatrix[3] - secondMatrix[3], originalMatrix[4] - secondMatrix[4], originalMatrix[5] - secondMatrix[5],
      originalMatrix[6] - secondMatrix[6], originalMatrix[7] - secondMatrix[7], originalMatrix[8] - secondMatrix[8],
    ]
  }
  /**
   * Multiplication of the current matrix by the second matrix
   * 
   * @param {Matrix3} secondMatrix
   */
  mul(secondMatrix)
  {
    const originalMatrix = this.items
    const productMatrix = []
    productMatrix[0] = originalMatrix[0] * secondMatrix[0] + originalMatrix[1] * secondMatrix[3] + originalMatrix[2] * secondMatrix[6]
    productMatrix[1] = originalMatrix[0] * secondMatrix[1] + originalMatrix[1] * secondMatrix[4] + originalMatrix[2] * secondMatrix[7]
    productMatrix[2] = originalMatrix[0] * secondMatrix[2] + originalMatrix[1] * secondMatrix[5] + originalMatrix[2] * secondMatrix[8]
    productMatrix[3] = originalMatrix[3] * secondMatrix[0] + originalMatrix[4] * secondMatrix[3] + originalMatrix[5] * secondMatrix[6]
    productMatrix[4] = originalMatrix[3] * secondMatrix[1] + originalMatrix[4] * secondMatrix[4] + originalMatrix[5] * secondMatrix[7]
    productMatrix[5] = originalMatrix[3] * secondMatrix[2] + originalMatrix[4] * secondMatrix[5] + originalMatrix[5] * secondMatrix[8]
    productMatrix[6] = originalMatrix[6] * secondMatrix[0] + originalMatrix[7] * secondMatrix[3] + originalMatrix[8] * secondMatrix[6]
    productMatrix[7] = originalMatrix[6] * secondMatrix[1] + originalMatrix[7] * secondMatrix[4] + originalMatrix[8] * secondMatrix[7]
    productMatrix[8] = originalMatrix[6] * secondMatrix[2] + originalMatrix[7] * secondMatrix[5] + originalMatrix[8] * secondMatrix[8]

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
        cos, -sin, 0,
        sin, cos, 0,
        0, 0, 1
    ]
    this.items = rotationMatrix
    this.mul(originalMatrix);
  }
}