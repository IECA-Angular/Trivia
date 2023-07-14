export interface IOption {
  text: string;
  correct: boolean;
}

export interface IQuestion {
  question: string;
  category: string;
  options: IOption[];
}
