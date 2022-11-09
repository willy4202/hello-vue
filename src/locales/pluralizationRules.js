function ruRule(choice, choicesLength) {
  if (choice === 0) {
    return 0;
  }

  const teen = choice > 10 && choice < 20;
  const endsWithOne = choice % 10 === 1;
  if (!teen && endsWithOne) {
    return 1;
  }
  if (!teen && choice % 10 >= 2 && choice % 10 <= 4) {
    return 2;
  }

  return choicesLength < 4 ? 2 : 3;
}

function arRule(choice) {
  let remainder = choice % 100;
  if (choice === 0) {
    return 0;
  }
  if (choice === 1) {
    return 1;
  }
  if (choice === 2) {
    return 2;
  }
  if (remainder >= 3 && remainder <= 10) {
    return 3;
  }
  if (remainder >= 11 && remainder <= 99) {
    return 4;
  }
  return 5;
}

export { ruRule, arRule };
