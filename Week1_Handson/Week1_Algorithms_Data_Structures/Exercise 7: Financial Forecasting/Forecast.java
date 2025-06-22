public class Forecast {

    public static double futureValue(double presentValue, double rate, int periods) {
        if (periods == 0) {
            return presentValue;
        }
        return futureValue(presentValue, rate, periods - 1) * (1 + rate);
    }
}
