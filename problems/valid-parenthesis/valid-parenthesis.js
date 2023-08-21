// https://leetcode.com/problems/valid-parentheses/
const charSet = {
  "(": ")",
  "{": "}",
  "[": "]",
};
export function isValid(str) {
  if (str.length % 2 !== 0) {
    return false;
  }
  const stack = [];
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (char in charSet) {
      stack.push(char);
      continue;
    }
    const lastOpenChar = stack.pop();
    if (char !== charSet[lastOpenChar]) {
      return false;
    }
  }
  return true;
}
