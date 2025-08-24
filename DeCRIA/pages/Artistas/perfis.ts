import { artistas } from "@/assets/images/artists/artistas";
import { useTranslation } from "react-i18next";

export const usePerfis = () => {
  const { t } = useTranslation();

  return [
    { 
      int: 1, 
      nome: "Veigh", 
      desc: t("artists.veigh.desc"), 
      banner: artistas.veighBanner 
    },
    { 
      int: 2, 
      nome: "Teto", 
      desc: t("artists.teto.desc"), 
      banner: artistas.tetoBanner 
    },
    { 
      int: 3, 
      nome: "Dricka", 
      desc: t("artists.dricka.desc"), 
      banner: artistas.drickaBanner 
    },
    { 
      int: 4, 
      nome: "Tasha & Trace", 
      desc: t("artists.tt.desc"), 
      banner: artistas.ttBanner 
    },
  ];
};
