/*
 * Необходимо покрыть все возможные
 * и невозможные кейсы. Например,
 * convertBytesToHuman(-1) === false,
 * convertBytesToHuman(-1) !== '1 B',
 * convertBytesToHuman('string') === false
 * convertBytesToHuman(5) === '5 B'
 */

import convertBytesToHuman from './convertBytesToHuman';

test('Возвращает false для неправильного типа данных', () => {
  expect(convertBytesToHuman(convertBytesToHuman(-1))).toBe(false)
  expect(convertBytesToHuman(convertBytesToHuman('string'))).toBe(false)
});

test('Возвращает корректное значение для чисел', () => {
  expect(convertBytesToHuman(1)).toBe("1 B")
  expect(convertBytesToHuman(1024)).toBe("1 KB")
  expect(convertBytesToHuman(1025)).toBe("1 KB")
  expect(convertBytesToHuman(34924)).toBe("34.11 KB")
  expect(convertBytesToHuman(1048576)).toBe("1 MB")
  expect(convertBytesToHuman(123123123)).toBe("117.42 MB")
  expect(convertBytesToHuman(1073741824)).toBe("1 GB")
  expect(convertBytesToHuman(1033773741824)).toBe("962.78 GB")
  expect(convertBytesToHuman(1099511627776)).toBe("1 TB")
  expect(convertBytesToHuman(109952711627776)).toBe("100 TB")
  expect(convertBytesToHuman(1125899906842624)).toBe("1 PB")
  expect(convertBytesToHuman(1025839931906842624)).toBe("911.13 PB")
  expect(convertBytesToHuman(1152921504606846976)).toBe("1 EB")
  expect(convertBytesToHuman(101292150460641846976)).toBe("87.86 EB")
});

// другая группа проверок
