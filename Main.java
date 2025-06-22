// Main.java
public class Main {
    public static void main(String[] args) {
        Product[] products = {
                new Product(105, "Laptop", "Electronics"),
                new Product(101, "Shoes", "Fashion"),
                new Product(110, "Watch", "Accessories"),
                new Product(102, "Phone", "Electronics")
        };

        System.out.println("Linear Search");
        Product found1 = Search.linearSearch(products, 110);
        System.out.println(found1 != null ? found1 : "Product not found");

        System.out.println("\nBinary Search");
        Search.sortById(products);
        Product found2 = Search.binarySearch(products, 110);
        System.out.println(found2 != null ? found2 : "Product not found");
    }
}
