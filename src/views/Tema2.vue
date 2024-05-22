<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Patronaje básico línea masculina
    
    .row.justify-content-center.align-items-center(data-aos="fade-left").py-4
      .col-lg-8
        p Antes de iniciar la implementación y transformación de básicos en masculino #[b se debe tener en cuenta la introducción y los conceptos referenciados en la unidad de pre-patronaje], con el fin de mantener claridad en el desarrollo de modelos.
        p Lo primero para tener en cuenta es el #[b manejo de cuadro de tallas y unidad de medida], en masculino el desarrollo de modelos o diseños en el manual se identifica en centímetros; sin embargo, el cuadro de tallas se encuentra en pulgadas, #[b es necesario tener el cuadro de tallas con la conversión] a centímetros para facilitar los procesos del trazo.
      .col-lg-4
        img(src='@/assets/curso/temas/tema2/img01.png', alt='')

    .row.justify-content-center.align-items-center(data-aos="fade-left").py-4
      .col-lg-4
        img(src='@/assets/curso/temas/tema2/img02.png', alt='')
      .col-lg-8
        p Otro punto para tener en cuenta es #[b el manejo de siluetas, en masculino el manual trabaja dos siluetas: una clásica y otra #[em slim fit]], si bien el desarrollo de los planos y moldes cumple con los mismos pasos o el mismo orden secuencial, #[b lo que varía son las fórmulas], específicamente para el desarrollo de los básicos.
        p Para la implementación y modificación de básicos #[b es importante tener claridad en cada uno de los conceptos de patronaje como medidas, pasos, elementos y vocabulario] técnico que se irá implementando en el desarrollo de los trazos, moldes o planos.
    p.py-2 En este punto, para la implementación de los básicos se debe tomar como referencia los pasos del patronaje de acuerdo con la metodología SENA.

    h4.py-2 Pasos del patronaje – implementación de básicos y desarrollo de modelos
    
    .row.justify-content-center
      .col-lg-10
        .border-lila
          .row.justify-content-center.align-items-center(data-aos="fade-left").py-4
            .col-lg-4
              ul.lista-ul--color.lista-ul--separador
                li 
                  i
                  | #[b 1. Básicos]
                li 
                  i
                  | #[b 2. Interpretación]
                li.pb-0
                  ul
                    li 
                      i
                      | Desahogos – contorno. Largos y anchos
                    li 
                      i
                      | Sistema de ajuste
                    li 
                      i
                      | Sistema de cierre
                li 
                  i
                  | #[b 3. Complementos]
                li 
                  i
                  | #[b 4. Señalización]
                li 
                  i
                  | #[b 5.  Despiece]
          
            .col-lg-3
              img(src='@/assets/curso/temas/tema2/img03.png', alt='')  
      p.py-4 Para esta unidad se hará la implementación del manual de patronaje básico SENA desde la página 63 hasta la página 80, incluyendo algunas imágenes de referencia.
























</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
