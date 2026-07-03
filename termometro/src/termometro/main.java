package termometro;

public class main {

    public static void main(String[] args) {

        termometro t = new termometro();

        System.out.println("Temperatura inicial: " + t.getTemperatura());

        t.setTemperatura(30.0);
        System.out.println("Nova temperatura: " + t.getTemperatura());

        t.setTemperatura(70.0);
        System.out.println("Temperatura atual: " + t.getTemperatura());

    }

}
