package GerenciamentoDePedidos;

import java.util.ArrayList;
import java.util.List;

public class Pedido {

    private int numeroPedido;
    private List<ItemPedido> itensPedido;
    private double valorTotal;

    public Pedido(int numeroPedido) {
        this.numeroPedido = numeroPedido;
        this.itensPedido = new ArrayList<>();
        this.valorTotal = 0;
    }

    // Cria o ItemPedido dentro da classe Pedido (Composição)
    public void adicionarItem(String nomePrato, double preco) {
        ItemPedido item = new ItemPedido(nomePrato, preco);
        itensPedido.add(item);
        valorTotal += preco;
    }

    public void exibirResumo() {
        System.out.println("===== RESUMO DO PEDIDO =====");
        System.out.println("Número do Pedido: " + numeroPedido);
        System.out.println();

        for (ItemPedido item : itensPedido) {
            System.out.println("Prato: " + item.getNomePrato());
            System.out.println("Preço: R$ " + item.getPreco());
            System.out.println("----------------------");
        }

        System.out.printf("Valor Total: R$ %.2f%n", valorTotal);
    }
}