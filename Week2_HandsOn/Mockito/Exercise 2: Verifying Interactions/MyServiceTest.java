import static org.mockito.Mockito.*;
import org.junit.jupiter.api.Test;
import com.example.ExternalApi;
import com.example.MyService;

public class MyServiceTest {

    @Test
    public void testVerifyInteraction() {

        ExternalApi mockApi = mock(ExternalApi.class);

        // Step 2: Use the mock in service
        MyService service = new MyService(mockApi);
        service.fetchData();  // This should call mockApi.getData()

        // Step 3: Verify interaction
        verify(mockApi).getData();  // ✅ Verifies that getData() was called exactly once
    }
}
