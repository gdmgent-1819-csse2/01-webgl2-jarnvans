import Vector2 from '../../../Library/Math/Vector2.js'
import TestMatrix from './TestMatrix.js'

/** Class for testing the Vector2 Class. */
export default class TestVector2 extends TestMatrix {
  /**
   * Create and run the tests
   */
  constructor() {
    super()
    console.log('testing Vector2')
    this.testAdd()
    this.testSub()
    this.testScalar()
    this.testNorm()
    this.testDot()
    this.testRot()
  }

  /**
   * Test the addition method
   */

  testAdd() {
    console.info('test Vector2.add()')
    const originalVector = new Vector2(3, 6)

    const secondVector = new Vector2(2, 3)

    const expected = [5, 9]
    originalVector.add(secondVector)
    const actual = [originalVector. x, originalVector.y]
    this.checkIdentical(actual, expected)
  }

   /**
   * Test the subtraction method
   */

  testSub() {
    console.info('test Vector2.sub()')
    const originalVector = new Vector2(3, 6)

    const secondVector = new Vector2(2, 3)

    const expected = [1, 3]
    originalVector.sub(secondVector)
    const actual = [originalVector. x, originalVector.y]
    this.checkIdentical(actual, expected)
  }

  testScalar() {
    console.info('test Vector2.scalar()')
    const originalVector = new Vector2(3, 6)

    const scalarNumber = 5

    const expected = [15, 30]
    originalVector.scalar(scalarNumber)
    const actual = [originalVector. x, originalVector.y]
    this.checkIdentical(actual, expected)
  }

  testNorm() {
    console.info('test Vector2.norm()')
    const originalVector = new Vector2(3, 6)

    const expected = [7]
    
    const actual = [originalVector.norm()]
    this.checkIdenticalRounded(actual, expected)
  }

  testDot() {
    console.info('test Vector2.dot()')
    const originalVector = new Vector2(3, 6)

    const secondVector = new Vector2(2, 3)

    const expected = [24]
    originalVector.dot(secondVector)
    const actual = [originalVector.dot(secondVector)]
    this.checkIdentical(actual, expected)
  }

  testRot() {
    console.info('test Vector2.rot()')
    const originalVector = new Vector2(3, 6)

    const α = 90

    const expected = [-6, 3]
    originalVector.rot(α)
    const actual = [originalVector. x, originalVector.y]
    this.checkIdenticalRounded(actual, expected)
  }
}