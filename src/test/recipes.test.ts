import { describe, expect, it } from "vitest";
import { filterRecipes, recipes } from "@/data/recipes";
describe("filterRecipes", () => {
  it("busca por nome ignorando acentos", () => {
    expect(filterRecipes(recipes, "pao", "Todas").map((r) => r.slug)).toEqual(["pao-de-queijo"]);
  });
  it("filtra por categoria", () => {
    expect(filterRecipes(recipes, "", "Sobremesas").every((r) => r.categories.includes("Sobremesas"))).toBe(true);
    expect(filterRecipes(recipes, "", "Sobremesas")).toHaveLength(2);
  });
});
