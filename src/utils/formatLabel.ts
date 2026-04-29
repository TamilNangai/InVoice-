/**
 * Format lowercase values for display UI
 * Maintains original lowercase values for data/logic
 * 
 * @param value - The value to format (e.g., "internship", "overdue")
 * @returns Formatted display text (e.g., "Internship", "Over Due")
 * 
 * @example
 * formatLabel("internship") // Returns "Internship"
 * formatLabel("overdue") // Returns "Over Due"
 * formatLabel("paid") // Returns "Paid"
 */
export const formatLabel = (value: string): string => {
  if (!value) return "";
  
  // Special cases mapping for multi-word formatting
  const specialCases: { [key: string]: string } = {
    "overdue": "Over Due",
  };
  
  // Check if value has special formatting
  if (specialCases[value]) {
    return specialCases[value];
  }
  
  // Default: capitalize first letter
  return value.charAt(0).toUpperCase() + value.slice(1);
};
