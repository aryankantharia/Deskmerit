export const GRATUITY_CAP = 2000000;

/**
 * India Payment of Gratuity Act, 1972.
 * Covered: (15 × last drawn basic + DA × years) / 26. Not covered: divisor 30 and only completed years count.
 * Covered employees: service of more than 6 months in the final year rounds up.
 */
export function calculateGratuity(monthlySalary: number, years: number, months: number, covered: boolean) {
  const serviceYears = covered ? years + (months > 6 ? 1 : 0) : years;
  const raw = 15 * monthlySalary * serviceYears / (covered ? 26 : 30);
  const amount = Math.min(Math.round(raw), GRATUITY_CAP);
  return { amount, serviceYears, capped: raw > GRATUITY_CAP, eligible: years >= 5 };
}

export function formatINR(value: number) {
  return new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(value);
}