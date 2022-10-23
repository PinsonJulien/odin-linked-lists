export function fibonacci(n: number, seq?: number[]): number[] {
  if (!seq) seq = [0, 1];

  const len = seq.length;

  if (len >= n) 
    return seq.slice(0, n);
  
  const fibNumber = seq[len-1] + seq[len-2];
  seq.push(fibNumber);

  return fibonacci(n, seq);
}