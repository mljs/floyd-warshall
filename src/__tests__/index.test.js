import { Matrix } from 'ml-matrix';

import floydWarshall from '..';

describe('Floyd Warshall test', () => {
  it('Directed graph', () => {
    let adjMatrix = new Matrix([
      [1, 1, 1, 0],
      [1, 1, 0, 0],
      [1, 0, 1, 0],
      [0, 0, 0, 1],
    ]);
    let distMatrix = floydWarshall(adjMatrix);
    expect(distMatrix.to2DArray()).toStrictEqual([
      [0, 1, 1, -1],
      [1, 0, 2, -1],
      [1, 2, 0, -1],
      [-1, -1, -1, 0],
    ]);
  });
});
