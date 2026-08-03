package GerenciamentoDePedidos;

public class Main {

    public static void main(String[] args) {

        Pedido pedido = new Pedido(101);

        pedido.adicionarItem("Hambúrguer", 28.90);
        pedido.adicionarItem("Batata Frita", 12.50);
        pedido.adicionarItem("Refrigerante", 7.00);

        pedido.exibirResumo();
    }
}