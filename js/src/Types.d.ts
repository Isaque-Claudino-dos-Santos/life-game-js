type TypeGridProps = {
  width: number;
  column: number;
  row: number;
  x: number;
  y: number;
  height: number;
  row: number;
  column: number;
  color: string;
  type: 'fill' | 'stroke';
};

type TypeCalcAdjacentsGridsFC = {
  top: (gridIndexRef: number) => number;
  down: (gridIndexRef: number) => number;
  left: (gridIndexRef: number) => number;
  right: (gridIndexRef: number) => number;
  topLeft: (gridIndexRef: number) => number;
  topRight: (gridIndexRef: number) => number;
  downLeft: (gridIndexRef: number) => number;
  downRight: (gridIndexRef: number) => number;
};
