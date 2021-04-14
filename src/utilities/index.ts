const convertSkillLevelToRank = (skillLevel: number): SkillRank => {
  if (isBetween(0, 29, skillLevel)) {
    return 'G'
  } else if (isBetween(30, 39, skillLevel)) {
    return 'F'
  } else if (isBetween(40, 49, skillLevel)) {
    return 'E'
  } else if (isBetween(50, 59, skillLevel)) {
    return 'D'
  } else if (isBetween(60, 69, skillLevel)) {
    return 'C'
  } else if (isBetween(70, 79, skillLevel)) {
    return 'B'
  } else if (isBetween(80, 99, skillLevel)) {
    return 'A'
  } else if (skillLevel === 100) {
    return 'S'
  } else {
    throw new Error('!!!Out of Skill range!!!')
  }
}

const isBetween = (num1: number, num2: number, val: number) => {
  return val >= num1 && val <= num2
}
export { convertSkillLevelToRank }
