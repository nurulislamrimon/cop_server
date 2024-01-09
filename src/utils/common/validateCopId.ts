export function validateMemberCopId(copId: string) {
  return /COP\d{3}[A-Z][A-Z]/.test(copId);
}
