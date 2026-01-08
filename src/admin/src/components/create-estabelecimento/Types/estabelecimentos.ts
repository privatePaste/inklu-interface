// Tipo que REPRESENTA o que vem da API
export interface Estabelecimento {
  id: string ;
  userId: string;

  name: string;
  description: string | null;
  address: string;

  cuisine_type: string;
  price_range: number;

  rating: number | null;
  is_featured: boolean;

  latitude: number;
  longitude: number;

  image_url: string | null;

  phone: string | null;
  whatsapp: string | null;
  instagram: string | null;
  website: string | null;

  opening_hours: string | null;
  atendimento_especial: string[];

  created_at: string;
  updated_at: string;
}

// Tipo SOMENTE para criação (payload)
export interface CreateEstabelecimentoPayload {
  name: string;
  description?: string | null;
  address: string;
  cuisine_type: string;
  price_range: number;
  is_featured?: boolean;
  latitude: number;
  longitude: number;
  image_url?: string | null;
  phone?: string | null;
  whatsapp?: string | null;
  instagram?: string | null;
  website?: string | null;
  opening_hours?: string | null;
}


export const ATENDIMENTOS = {
  gerais: [
    { value: "wifi", label: "Wi-Fi" },
    { value: "pet_friendly", label: "Pet Friendly" },
    { value: "delivery", label: "Delivery" },
    { value: "estacionamento", label: "Estacionamento" },
    { value: "area_externa", label: "Área externa" },
  ],

  acessibilidade: [
    { value: "rampa_acesso", label: "Rampa de acesso" },
    { value: "banheiro_acessivel", label: "Banheiro acessível" },
    { value: "piso_tatil", label: "Piso tátil" },
    { value: "atendimento_libras", label: "Atendimento em Libras" },
    { value: "cardapio_braille", label: "Cardápio em Braille" },
  ],

  especiais: [
    { value: "atendimento_prioritario", label: "Atendimento prioritário" },
    { value: "ambiente_silencioso", label: "Ambiente silencioso" },
    { value: "acompanhante_pcd", label: "Espaço para acompanhante PCD" },
  ],
};
