import Vector3 from '../../../Library/Math/Vector3.js'
import TestMatrix from './TestMatrix.js'

/** Class for testing the Vector3 Class. */
export default class TestVector3 extends TestMatrix {
  /**
   * Create and run the tests
   */
  constructor() {
    super()
    console.log('testing Vector3')
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
    console.info('test Vector3.add()')
    const originalVector = new Vector3(3, 6, 8)

    const secondVector = new Vector3(2, 3, 5)

    const expected = [5, 9, 13]
    originalVector.add(secondVector)
    const actual = [originalVector. x, originalVector.y, originalVector.z]
    this.checkIdentical(actual, expected)
  }

   /**
   * Test the subtraction method
   */

  testSub() {
    console.info('test Vector3.sub()')
    const originalVector = new Vector3(3, 6, 8)

    const secondVector = new Vector3(2, 3, 5)

    const expected = [1, 3, 3]
    originalVector.sub(secondVector)
    const actual = [originalVector. x, originalVector.y, originalVector.z]
    this.checkIdentical(actual, expected)
  }

  testScalar() {
    console.info('test Vector3.scalar()')
    const originalVector = new Vector3(3, 6, 8)

    const scalarNumber = 5

    const expected = [15, 30, 40]
    originalVector.scalar(scalarNumber)
    const actual = [originalVector. x, originalVector.y, originalVector.z]
    this.checkIdentical(actual, expected)
  }

  testNorm() {
    console.info('test Vector3.norm()')
    const originalVector = new Vector3(3, 6, 8)

    const expected = [10]
    
    const actual = [originalVector.norm()]
    this.checkIdenticalRounded(actual, expected)
  }

  testDot() {
    console.info('test Vector3.dot()')
    const originalVector = new Vector3(3, 6, 8)

    const secondVector = new Vector3(2, 3, 5)

    const expected = [64]
    originalVector.dot(secondVector)
    const actual = [originalVector.dot(secondVector)]
    this.checkIdentical(actual, expected)
  }

  testRot() {
    console.info('test Vector3.rot()')
    const originalVector = new Vector3(3, 6, 8)

    const α = 90

    const expected = [-6, 3, 8]
    originalVector.rot(α)
    const actual = [originalVector. x, originalVector.y, originalVector.z]
    this.checkIdenticalRounded(actual, expected)
  }
}