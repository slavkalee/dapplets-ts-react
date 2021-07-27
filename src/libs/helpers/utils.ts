export function start_and_end(str: string) {
  if (str.length > 35) {
    return str.substr(0, 5) + '...' + str.substr(str.length - 5, str.length);
  }
  return str;
}
