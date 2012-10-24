import com.rabbitmq.client.ConnectionFactory;
import com.rabbitmq.client.Connection;
import com.rabbitmq.client.Channel;

public class Send {

  private final static String EXCHANGE_NAME = "mike.demo";

  public static void main(String[] argv) throws java.io.IOException {
    ConnectionFactory factory = new ConnectionFactory();
    factory.setHost("localhost");
    Connection connection = factory.newConnection();
    Channel channel = connection.createChannel();

    channel.exchangeDeclare(EXCHANGE_NAME, "fanout");
    // String message = getMessage(argv);
    
    while (!Thread.interrupted()) {
      try {
        String message = "Rand is: " + Math.random();
        channel.basicPublish(EXCHANGE_NAME, "", null, message.getBytes());
        Thread.sleep(500);
      } catch (InterruptedException e) {
        Thread.currentThread().interrupt();
      }
    }

    channel.close();
    connection.close();
  }
}
