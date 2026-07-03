package ordem_de_precedencia;

public class Main {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Carro carro = new Carro();
        Moto moto = new Moto();

        carro.aumentarVelocidade(50);
        moto.aumentarVelocidade(30);

        System.out.println("Velocidade do carro: " + carro.velocidade);
        System.out.println("Velocidade da moto: " + moto.velocidade);
	}

}
