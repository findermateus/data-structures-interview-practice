import { simplifyPath } from "@/lib/challenges/simplify-path";

describe('simplifyPath', () => {
  it('simplifica caminhos básicos', () => {
    expect(simplifyPath("/home/")).toBe("/home");
  });

  it('remove barras extras', () => {
    expect(simplifyPath("/home//foo/")).toBe("/home/foo");
  });

  it('lida com .. para subir diretório', () => {
    expect(simplifyPath("/home/user/Documents/../Pictures")).toBe("/home/user/Pictures");
  });

  it('não sobe além da raiz', () => {
    expect(simplifyPath("/../")).toBe("/");
  });

  it('remove . (diretório atual)', () => {
    expect(simplifyPath("/home/./user/")).toBe("/home/user");
  });

  it('lida com caminhos complexos', () => {
    expect(simplifyPath("/a/./b/../../c/")).toBe("/c");
  });
});
