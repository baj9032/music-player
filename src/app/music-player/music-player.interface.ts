export interface IMusicPlayerMothods {
  convertSecondToHMS(value: number): string;
  toFixed(value: number, digit: number): number;
  calculateReminingPercentage(
    totalDuration: number,
    completedDuration: number
  ): number;
}
