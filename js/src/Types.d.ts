type TypeEntityProps = {
  x: number;
  y: number;
  width: number;
  height: number;
  color: string;
  type: 'fill' | 'stroke';
  alive: boolean;
  nextStateAlive: boolean;
};
