import {
  Wifi,
  PawPrint,
  Truck,
  ParkingCircle,
  Trees,
  Accessibility,
  Bath,
  Footprints,
  Hand,
  BookOpenText,
  Star,
  VolumeX,
  Users,
} from "lucide-react";



export const atendimentoIcons: Record<
  string,
  { icon: React.ElementType; label: string }
> = {
  // GERAIS
  wifi: { icon: Wifi, label: "Wi-Fi" },
  pet_friendly: { icon: PawPrint, label: "Pet Friendly" },
  delivery: { icon: Truck, label: "Delivery" },
  estacionamento: { icon: ParkingCircle, label: "Estacionamento" },
  area_externa: { icon: Trees, label: "Área externa" },

  // ACESSIBILIDADE
  rampa_acesso: { icon: Accessibility, label: "Rampa de acesso" },
  banheiro_acessivel: { icon: Bath, label: "Banheiro acessível" },
  piso_tatil: { icon: Footprints, label: "Piso tátil" },
  atendimento_libras: { icon: Hand, label: "Atendimento em Libras" },
  cardapio_braille: { icon: BookOpenText, label: "Cardápio em Braille" },

  // ESPECIAIS
  atendimento_prioritario: {
    icon: Star,
    label: "Atendimento prioritário",
  },
  ambiente_silencioso: {
    icon: VolumeX,
    label: "Ambiente silencioso",
  },
  acompanhante_pcd: {
    icon: Users,
    label: "Espaço para acompanhante PCD",
  },
};