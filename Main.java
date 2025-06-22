// Main.java
public class Main {
    public static void main(String[] args) {
        double pv = 1000.0;  // Initial investment
        double rate = 0.05;  // 5% growth per period
        int years = 5;       // Forecast for 5 years

        double result = Forecast.futureValue(pv, rate, years);
        System.out.printf("Future Value after %d years: %.2f\n", years, result);
    }
}
