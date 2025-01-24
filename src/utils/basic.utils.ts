export const calculateDateRange = (period: string): { startDate: string; endDate: string } => {
  const today = new Date();
  const startDate = new Date(today);

  switch (period) {
    case '1M':
      startDate.setMonth(today.getMonth() - 1);
      break;
    case '3M':
      startDate.setMonth(today.getMonth() - 3);
      break;
    case '6M':
      startDate.setMonth(today.getMonth() - 6);
      break;
    case '12M':
      startDate.setFullYear(today.getFullYear() - 1);
      break;
    default:
      throw new Error(`Unsupported period: ${period}`);
  }

  return {
    startDate: startDate.toISOString().split('T')[0],
    endDate: today.toISOString().split('T')[0],
  };
};
