import java.util.Arrays;
import java.util.Comparator;

public class SearchTest {

    // Linear Search
    public static Product linearSearch(Product[] products, int id) {
        for (Product product : products) {
            if (product.productId == id) {
                return product;
            }
        }
        return null;
    }

    // Binary Search
    public static Product binarySearch(Product[] products, int id) {

        int low = 0;
        int high = products.length - 1;

        while (low <= high) {

            int mid = (low + high) / 2;

            if (products[mid].productId == id)
                return products[mid];

            if (products[mid].productId < id)
                low = mid + 1;
            else
                high = mid - 1;
        }

        return null;
    }

    public static void main(String[] args) {

        Product[] products = {
                new Product(103, "Laptop", "Electronics"),
                new Product(101, "Phone", "Electronics"),
                new Product(105, "Shoes", "Fashion"),
                new Product(102, "Watch", "Accessories"),
                new Product(104, "Book", "Education")
        };

        // Linear Search
        System.out.println("Linear Search:");
        Product p1 = linearSearch(products, 102);

        if (p1 != null)
            p1.display();
        else
            System.out.println("Product not found");

        // Sort for Binary Search
        Arrays.sort(products, Comparator.comparingInt(p -> p.productId));

        // Binary Search
        System.out.println("\nBinary Search:");
        Product p2 = binarySearch(products, 102);

        if (p2 != null)
            p2.display();
        else
            System.out.println("Product not found");

        // Time Complexity
        System.out.println("\nTime Complexity:");
        System.out.println("Linear Search : O(n)");
        System.out.println("Binary Search : O(log n)");
    }
}