const matrix = {};

/**
 *
 * @param {[maxRow:number,maxColumn:number]} param0
 * @param {({ row: number, column: number },[maxRow:number,maxColumn:number]) => void} callback
 */
matrix.forEach = ([maxRow, maxColumn], callback) => {
  for (let i = 0; i < maxRow; i++) {
    for (let j = 0; j < maxColumn; j++) {
      callback({ row: i, column: j }, [maxRow, maxColumn]);
    }
  }
};

export default matrix;
