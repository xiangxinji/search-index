export function createIdentScope(scopeKey: string) {
  let i = 0;
  return {
    getIdent: () => `${scopeKey}-${i++}`,
  };
}
