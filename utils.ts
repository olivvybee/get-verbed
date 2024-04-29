import { Subject, Verb } from './types';

export const getWord = (word: Verb | Subject) => {
  if (typeof word === 'string') {
    return word;
  } else {
    return word.word;
  }
};

export const getCW = (verb: Verb, subject: Subject): string | undefined => {
  let cw: string | undefined = undefined;

  if (typeof verb !== 'string') {
    cw = verb.cw;
  }

  if (typeof subject !== 'string') {
    if (typeof cw !== 'undefined') {
      cw += ', ' + subject.cw;
    } else {
      cw = subject.cw;
    }
  }

  return cw;
};

export const randomElement = <T>(array: T[]): T => {
  const index = Math.floor(Math.random() * array.length);
  return array[index];
};
