/**
 * @type {TypeCalcAdjacentsGridsFC}
 */
const calcAdjacentsGrids = {};

calcAdjacentsGrids.top = (gridIndexRef) => gridIndexRef - 1;

calcAdjacentsGrids.down = (gridIndexRef) => gridIndexRef + 1;

calcAdjacentsGrids.right = (gridIndexRef) => gridIndexRef * 2 - 1;

calcAdjacentsGrids.left = (gridIndexRef) => gridIndexRef / 2 - 1;

calcAdjacentsGrids.topRight = (gridIndexRef) => gridIndexRef * 2 - 2;

calcAdjacentsGrids.topLeft = (gridIndexRef) => gridIndexRef / 2 - 2;

calcAdjacentsGrids.downRight = (gridIndexRef) => gridIndexRef * 2 - 2;

calcAdjacentsGrids.downLeft = (gridIndexRef) => gridIndexRef / 2 - 2;

export default calcAdjacentsGrids;
