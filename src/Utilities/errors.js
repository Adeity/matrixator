/**
 * Gets thrown when two matrices cannot be multiplied.
 */
class MatrixMultiplicationError extends Error {
    constructor(message) {
        super(message); // (1)
        this.name = "MatrixMultiplicationError"; // (2)
    }
}

/**
 * Gets thrown when a matrix can't be subtracted to another matrix due to different dimensions of these matrices.
 */
class SubtractionError extends Error {
    constructor(message) {
        super(message); // (1)
        this.name = "SubtractionError"; // (2)
    }
}

/**
 * Gets thrown when a matrix can't be added to another matrix due to different dimensions of these matrices.
 */
class AdditionError extends Error {
    constructor(message) {
        super(message); // (1)
        this.name = "AdditionError"; // (2)
    }
}

/**
 * Gets thrown when user wants to calculate a determinant of a matri that is not square
 */
class DeterminantError extends Error {
    constructor(message) {
        super(message); // (1)
        this.name = "DeterminantError"; // (2)
    }
}

class NonInvertibleMatrixError extends Error {
    constructor(message) {
        super(message); // (1)
        this.name = "NonInvertibleMatrixError"; // (2)
    }
}

class DimensionError extends Error {
    constructor(message) {
        super(message); // (1)
        this.name = "DimensionError"; // (2)
    }
}

export {DeterminantError, AdditionError, SubtractionError, MatrixMultiplicationError, NonInvertibleMatrixError, DimensionError}