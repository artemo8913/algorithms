// https://leetcode.com/problems/spiral-matrix-ii/description/

// Вывод чисел от 1 до n^2 по спирали

export function spiralMatrix(n) {
    const matrix = [];
    for (let i = 0; i < n; i++) {
        matrix[i] = [];
    }

    return matrix;
}
