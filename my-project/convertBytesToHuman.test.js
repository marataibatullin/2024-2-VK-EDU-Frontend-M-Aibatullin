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
  expect(convertBytesToHuman(-1)).toBe(false)
  expect(convertBytesToHuman('string')).toBe(false)
  expect(convertBytesToHuman('1024')).toBe(false)
  expect(convertBytesToHuman(Infinity)).toBe(false)
  expect(convertBytesToHuman(NaN)).toBe(false)
});


const units = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

test('Возвращает корректное целое значение для чисел', () => {
  for (let i = 0; i < units.length; i++) {
    expect(convertBytesToHuman(1024**i)).toBe(`1 ${units[i]}`)
    expect(convertBytesToHuman(10 * 1024**i)).toBe(`10 ${units[i]}`)
    expect(convertBytesToHuman(100 * 1024**i)).toBe(`100 ${units[i]}`)
    expect(convertBytesToHuman(1000 * 1024**i)).toBe(`1000 ${units[i]}`)
  }
});

test('Возвращает корректное нецелое значение для чисел', () => { 
  for (let i = 0; i < units.length; i++) {
    expect(convertBytesToHuman(1.5 * 1024**i)).toBe(`1.5 ${units[i]}`)
    expect(convertBytesToHuman(10.5 * 1024**i)).toBe(`10.5 ${units[i]}`)
    expect(convertBytesToHuman(100.5 * 1024**i)).toBe(`100.5 ${units[i]}`)
    expect(convertBytesToHuman(1000.5 * 1024**i)).toBe(`1000.5 ${units[i]}`)
  }
});

test('Возвращает корректное нецелое значение с точностью до сотой доли для чисел', () => { 
  for (let i = 0; i < units.length; i++) {
    expect(convertBytesToHuman(1.78 * 1024**i)).toBe(`1.78 ${units[i]}`)
    expect(convertBytesToHuman(10.78 * 1024**i)).toBe(`10.78 ${units[i]}`)
    expect(convertBytesToHuman(100.78 * 1024**i)).toBe(`100.78 ${units[i]}`)
    expect(convertBytesToHuman(1000.78 * 1024**i)).toBe(`1000.78 ${units[i]}`)
  }
});

// другая группа проверок
