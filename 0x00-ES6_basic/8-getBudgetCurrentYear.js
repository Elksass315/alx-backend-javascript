function getCurrentYear() {
  const date = new Date();
  return date.getFullYear();
}

export default function getBudgetForCurrentYear(income, gdp, capita) {
  const currentYear = getCurrentYear();

  // Use computed property names directly in the object literal
  return {
    [`income-${currentYear}`]: income,
    [`gdp-${currentYear}`]: gdp,
    [`capita-${currentYear}`]: capita,
  };
}
