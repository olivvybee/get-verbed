import { describe, it, expect } from 'vitest';

import { VERBS, SUBJECTS } from './arrays';
import { getWord } from './utils';

expect.extend({
  toContainNoDuplicates<T>(array: T[]) {
    const duplicates = array.filter(
      (item, index) => array.indexOf(item) !== index
    );

    const arrayAsString =
      array.length > 5
        ? `[ ${array.slice(0, 5).join(', ')}, ... ]`
        : `[ ${array} ]`;

    if (duplicates.length === 0) {
      return {
        pass: true,
        message: () => `${array} contains no duplicates`,
      };
    } else {
      return {
        pass: false,
        message: () =>
          `expected ${arrayAsString} to contain no duplicates, but found duplicates:\n\n${duplicates.join(
            ', '
          )}`,
      };
    }
  },
});

describe('arrays', () => {
  it('has no duplicates in the verbs array', () => {
    const verbs = VERBS.map(getWord).map((word) => word.toLowerCase());
    expect(verbs).toContainNoDuplicates();
  });

  it('has no duplicates in the subjects array', () => {
    const subjects = SUBJECTS.map(getWord).map((word) => word.toLowerCase());
    expect(subjects).toContainNoDuplicates();
  });
});
