import { marcas as imagensMarcas } from "@/assets/images/marcas/marcas";
import { useTranslation } from 'react-i18next';

export const useInfos = () => {
  const { t } = useTranslation();

  return [
    { 
      int: 1, 
      nome: t('marcas.1.nome'), 
      desc: t('marcas.1.desc'), 
      banner: imagensMarcas.nikeBanner 
    },
    { 
      int: 2, 
      nome: t('marcas.2.nome'), 
      desc: t('marcas.2.desc'), 
      banner: imagensMarcas.adidasBanner 
    },
    { 
      int: 3, 
      nome: t('marcas.3.nome'), 
      desc: t('marcas.3.desc'), 
      banner: imagensMarcas.pumaBanner 
    },
    { 
      int: 4, 
      nome: t('marcas.4.nome'), 
      desc: t('marcas.4.desc'), 
      banner: imagensMarcas.jordanBanner 
    },
  ];
};
