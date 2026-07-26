public class FinancialForecast {

    // Recursive method to calculate future value
    public static double futureValue(double amount, double growthRate, int years) {

        if (years == 0) {
            return amount;
        }

        return futureValue(amount * (1 + growthRate), growthRate, years - 1);
    }

    public static void main(String[] args) {

        double currentAmount = 10000;
        double growthRate = 0.10; // 10%
        int years = 5;

        double result = futureValue(currentAmount, growthRate, years);

        System.out.println("Current Amount : " + currentAmount);
        System.out.println("Growth Rate    : " + (growthRate * 100) + "%");
        System.out.println("Years          : " + years);
        System.out.println("Future Value   : " + result);

        System.out.println("\nTime Complexity : O(n)");
        System.out.println("Space Complexity: O(n)");
        System.out.println("Optimization    : Memoization or Iteration can reduce recursive overhead.");
    }
}