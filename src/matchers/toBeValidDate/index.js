import { matcherHint, printReceived } from 'jest-matcher-utils';

import predicate from './predicate';

const passMessage = received => () =>
  matcherHint('.not.toBeValidDate', 'received', '') +
  '\n\n' +
  'Expected value to not be a valid date received:\n' +
  `  ${printReceived(received)}`;

const failMessage = received => () =>
  matcherHint('.toBeValidDate', 'received', '') +
  '\n\n' +
  'Expected value to be a valid date received:\n' +
  `  ${printReceived(received)}`;

export function toBeValidDate(expected) {
  const pass = predicate(expected);
  if (pass) {
    return { pass: true, message: passMessage(expected) };
  }

  return { pass: false, message: failMessage(expected) };
}
