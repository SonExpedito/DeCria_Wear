import { categoriaImg } from "./imagens";
import { useTranslation } from "react-i18next";

export const useCategorias = () => {
  const { t, i18n } = useTranslation();

  return [
    {
      id: 1,
      nome: t("categorias.1.nome"),
      imagem: i18n.language === "pt" ? categoriaImg.artistas : categoriaImg.artists,
    },
    {
      id: 2,
      nome: t("categorias.2.nome"),
      imagem: i18n.language === "pt" ? categoriaImg.lancamentos : categoriaImg.releases,
    },
    {
      id: 3,
      nome: t("categorias.3.nome"),
      imagem: i18n.language === "pt" ? categoriaImg.ofertas : categoriaImg.deals,
    },
  ];
};
