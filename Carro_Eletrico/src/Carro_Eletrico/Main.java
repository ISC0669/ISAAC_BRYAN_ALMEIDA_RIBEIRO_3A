package Carro_Eletrico;

public class Main {

    public static void main(String[] args) {

        CarroEletrico carro = new CarroEletrico("Tesla Model 3");

        System.out.println("Modelo: " + carro.getModelo());

        // Tenta acelerar várias vezes
        for (int i = 1; i <= 8; i++) {
            System.out.println("\nTentativa de acelerar " + i);
            carro.acelerar();

            System.out.println("Velocidade: " + carro.getVelocidadeAtual() + " km/h");
            System.out.println("Bateria: " + carro.getCargaBateria() + "%");
        }

        // Tenta carregar em movimento
        System.out.println("\nTentando carregar em movimento...");
        carro.carregarBateria();

        // Freia até parar
        System.out.println("\nFreando o carro...");
        while (carro.getVelocidadeAtual() > 0) {
            carro.frear();
            System.out.println("Velocidade: " + carro.getVelocidadeAtual() + " km/h");
        }

        // Carrega corretamente
        System.out.println("\nCarregando bateria...");
        carro.carregarBateria();

        System.out.println("Bateria: " + carro.getCargaBateria() + "%");
    }
}
