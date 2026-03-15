export const getLeetCodeUrl = (problemString) => {
  const name = problemString.replace(/^\d+\.\s*/, "").trim();
  const slug = name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
  return `https://leetcode.com/problems/${slug}/`;
};

export const getGfgSearchUrl = (problemString) => {
  const name = problemString.replace(/^\d+\.\s*/, "").trim();
  return `https://www.google.com/search?q=site%3Ageeksforgeeks.org%2Fproblems+${encodeURIComponent(name)}`;
};