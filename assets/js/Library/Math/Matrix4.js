export default class Matrix4
{
  constructor(items){
    this.items = items || [
      0, 0, 0, 0,
      0, 0, 0, 0,
      0, 0, 0, 0,
    ]
  }

  /**
   * Addition of the second matrix to the current matrix
   * 
   * @param {Matrix4} secondMatrix
   */
  add(secondMatrix)
  {
    const originalMatrix = this.items
    this.items = [
      originalMatrix[0] + secondMatrix[0], originalMatrix[1] + secondMatrix[1], originalMatrix[2] + secondMatrix[2], originalMatrix[3] + secondMatrix[3],
      originalMatrix[4] + secondMatrix[4], originalMatrix[5] + secondMatrix[5], originalMatrix[6] + secondMatrix[6], originalMatrix[7] + secondMatrix[7],
      originalMatrix[8] + secondMatrix[8], originalMatrix[9] + secondMatrix[9], originalMatrix[10] + secondMatrix[10], originalMatrix[11] + secondMatrix[11],
      originalMatrix[12] + secondMatrix[12], originalMatrix[13] + secondMatrix[13], originalMatrix[14] + secondMatrix[14], originalMatrix[15] + secondMatrix[15],
    ]
  }

  /**
   * Subtraction of the second matrix from the current matrix
   * 
   * @param {Matrix4} secondMatrix
   */
  sub(secondMatrix)
  {
    const originalMatrix = this.items
    this.items = [
      originalMatrix[0] - secondMatrix[0], originalMatrix[1] - secondMatrix[1], originalMatrix[2] - secondMatrix[2], originalMatrix[3] - secondMatrix[3],
      originalMatrix[4] - secondMatrix[4], originalMatrix[5] - secondMatrix[5], originalMatrix[6] - secondMatrix[6], originalMatrix[7] - secondMatrix[7],
      originalMatrix[8] - secondMatrix[8], originalMatrix[9] - secondMatrix[9], originalMatrix[10] - secondMatrix[10], originalMatrix[11] - secondMatrix[11],
      originalMatrix[12] - secondMatrix[12], originalMatrix[13] - secondMatrix[13], originalMatrix[14] - secondMatrix[14], originalMatrix[15] - secondMatrix[15],
    ]
  }
  /**
   * Multiplication of the current matrix by the second matrix
   * 
   * @param {Matrix4} secondMatrix
   */
  mul(secondMatrix)
  {
    const originalMatrix = this.items
    const productMatrix = []
    productMatrix[0] = originalMatrix[0] * secondMatrix[0] + originalMatrix[1] * secondMatrix[4] + originalMatrix[2] * secondMatrix[8] + originalMatrix[3] * secondMatrix[12]
    productMatrix[1] = originalMatrix[0] * secondMatrix[1] + originalMatrix[1] * secondMatrix[5] + originalMatrix[2] * secondMatrix[9] + originalMatrix[3] * secondMatrix[13]
    productMatrix[2] = originalMatrix[0] * secondMatrix[2] + originalMatrix[1] * secondMatrix[6] + originalMatrix[2] * secondMatrix[10] + originalMatrix[3] * secondMatrix[14]
    productMatrix[3] = originalMatrix[0] * secondMatrix[3] + originalMatrix[1] * secondMatrix[7] + originalMatrix[2] * secondMatrix[11] + originalMatrix[3] * secondMatrix[15]
    productMatrix[4] = originalMatrix[4] * secondMatrix[0] + originalMatrix[5] * secondMatrix[4] + originalMatrix[6] * secondMatrix[8] + originalMatrix[7] * secondMatrix[12]
    productMatrix[5] = originalMatrix[4] * secondMatrix[1] + originalMatrix[5] * secondMatrix[5] + originalMatrix[6] * secondMatrix[9] + originalMatrix[7] * secondMatrix[13]
    productMatrix[6] = originalMatrix[4] * secondMatrix[2] + originalMatrix[5] * secondMatrix[6] + originalMatrix[6] * secondMatrix[10] + originalMatrix[7] * secondMatrix[14]
    productMatrix[7] = originalMatrix[4] * secondMatrix[3] + originalMatrix[5] * secondMatrix[7] + originalMatrix[6] * secondMatrix[11] + originalMatrix[7] * secondMatrix[15]
    productMatrix[8] = originalMatrix[8] * secondMatrix[0] + originalMatrix[9] * secondMatrix[4] + originalMatrix[10] * secondMatrix[8] + originalMatrix[11] * secondMatrix[12]
    productMatrix[9] = originalMatrix[8] * secondMatrix[1] + originalMatrix[9] * secondMatrix[5] + originalMatrix[10] * secondMatrix[9] + originalMatrix[11] * secondMatrix[13]
    productMatrix[10] = originalMatrix[8] * secondMatrix[2] + originalMatrix[9] * secondMatrix[6] + originalMatrix[10] * secondMatrix[10] + originalMatrix[11] * secondMatrix[14]
    productMatrix[11] = originalMatrix[8] * secondMatrix[3] + originalMatrix[9] * secondMatrix[7] + originalMatrix[10] * secondMatrix[11] + originalMatrix[11] * secondMatrix[15]
    productMatrix[12] = originalMatrix[12] * secondMatrix[0] + originalMatrix[13] * secondMatrix[4] + originalMatrix[14] * secondMatrix[8] + originalMatrix[15] * secondMatrix[12]
    productMatrix[13] = originalMatrix[12] * secondMatrix[1] + originalMatrix[13] * secondMatrix[5] + originalMatrix[14] * secondMatrix[9] + originalMatrix[15] * secondMatrix[13]
    productMatrix[14] = originalMatrix[12] * secondMatrix[2] + originalMatrix[13] * secondMatrix[6] + originalMatrix[14] * secondMatrix[10] + originalMatrix[15] * secondMatrix[14]
    productMatrix[15] = originalMatrix[12] * secondMatrix[3] + originalMatrix[13] * secondMatrix[7] + originalMatrix[14] * secondMatrix[11] + originalMatrix[15] * secondMatrix[15]
    
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
      1, 0, 0, 0,
      0, cos, -sin, 0,
      0, sin, cos, 0,
      0, 0, 0, 1
    ]
    this.items = rotationMatrix
    this.mul(originalMatrix);
  }
}