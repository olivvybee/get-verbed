import { Entry } from './types';

export const getWord = (entry: Entry) => {
  if (typeof entry === 'string') {
    return entry;
  } else {
    return entry.word;
  }
};

export const getCW = (verb: Entry, subject: Entry): string | undefined => {
  const cws = [verb, subject]
    .map((entry) => typeof entry !== 'string' ? entry.cw : undefined)
    .filter(item => !!item);

  return cws.length ? cws.join(', ') : undefined;
};

export const randomElement = <T>(array: T[]): T => {
  const index = Math.floor(Math.random() * array.length);
  return array[index];
};
