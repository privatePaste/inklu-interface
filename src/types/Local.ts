export interface Local {
  id: number;
  nome: string;
  descricao: string;
  avaliacao: number;
  imagens: string[];
  latitude: number;
  longitude: number;
  categoria: "Café" | "Restaurante" | "Padaria" | "Churrascaria" | "Bistrô";
  atendimentos: Array<
    | "wifi"
    | "acessibilidade"
    | "petFriendly"
    | "delivery"
    | "estacionamento"
  >;
}
