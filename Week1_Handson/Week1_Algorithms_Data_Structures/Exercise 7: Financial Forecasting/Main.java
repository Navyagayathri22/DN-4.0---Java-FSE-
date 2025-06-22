
public class Main {
    public static void main(String[] args) {
        double pv = 1000.0;
        double rate = 0.05;
        int years = 5;

        double result = Forecast.futureValue(pv, rate, years);
        System.out.printf("Future Value after %d years: %.2f\n", years, result);
    }
}
