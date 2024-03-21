import { VERBS, SUBJECTS } from './arrays';

export const generate = () => {
  const verb = randomElement(VERBS);
  const subject = randomElement(SUBJECTS);

  return `Get ${verb}, ${subject}`;
};

const randomElement = <T>(array: T[]): T => {
  const index = Math.floor(Math.random() * array.length);
  return array[index];
};
