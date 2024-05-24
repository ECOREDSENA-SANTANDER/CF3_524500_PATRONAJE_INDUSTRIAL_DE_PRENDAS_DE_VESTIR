<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Patronaje básico línea femenina
    
    .row.justify-content-center(data-aos="fade-left")
      .col-lg-12
        p Todas las unidades que se han trabajado se van articulando en el #[b fortalecimiento técnico del manejo de vocabulario, comprensión de patronaje y manejo de elementos como curvas y formas del cuerpo]; sin embargo, cada vez más se irá subiendo el nivel de dificultad frente al desarrollo y complejidad del análisis de las prendas. 
        p En femenino #[b el manejo de volúmenes es uno de los principales factores diferenciadores], en el desarrollo de prendas son las pinzas y sistemas de ajustes, los cuales #[b se convierten en protagonistas principales de esta unidad], debe tener en cuenta que sin importar la línea que se trabaje la metodología del manual y los pasos siempre serán los mismos, #[b este orden secuencial le permite tener una mayor y mejor apropiación de la metodología].
    .py-4
    .row.justify-content-center(data-aos="fade-left")
      .col-lg-10
        h5 Pasos del patronaje – implementación de básicos y desarrollo de modelos
    .py-3
    .row.justify-content-center(data-aos="fade-left")
      .col-lg-10
        .border-lila
          .row.justify-content-center.align-items-center(data-aos="fade-left")
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
          
            .col-lg-6
              img.desborde2(src='@/assets/curso/temas/tema3/img01.svg', alt='')  

    Separador  
    #t_3_1.titulo-segundo.color-primario
      h2 3.1 Traslados de pinza correctiva de talles
    
    .row.justify-content-center(data-aos="fade-left")
      .col-lg-12
        p El básico superior está compuesto #[b por parte delantera y parte posterior, la unión de estos básicos por línea de cintura genera o permite identificar desniveles anatómicos], los cuales van acorde al comportamiento del cuerpo, en #[b la parte del delantero por los desniveles de cintura se identifica una pinza], dicha pinza recibe el nombre de pinza correctiva de talle o pinza de talle, #[b esta pinza es un punto de referencia principal para generar volúmenes] o ajustes sobre el cuerpo.
    .py-2
    .row.justify-content-center(data-aos="fade-left")
      .col-lg-8
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img.imgsize(src='@/assets/curso/temas/tema3/img02.svg' alt='AvatarTop')
          .tarjeta.bglila
            .p-3
              p En general, todas las bases superiores sin importar la línea que maneja dicha pinza, la diferencia en la base femenina es por el volumen de busto, el cual permite que dicha pinza sea más notoria.
     
    p #[b En algunos casos por construcción dicha pinza queda invisible o imperceptible al ojo en el producto final]; sin embargo, en algunos otros casos se identifica o se hace más notorio el manejo de dicha pinza. #[b La pinza correctiva de talle permite ser trasladada o llevada a diferentes puntos del cuerpo], permitiendo así acentuar volúmenes, generar siluetas o estructuras que permiten modificar diseños.

    .py-4
    .row.justify-content-center.align-items-center(data-aos="fade-left") 
      .col-lg-8
        .tarjeta.color-acento-botones.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-4.col-sm-2.col-lg-2
              img.desborde(src='@/assets/curso/temas/tema3/img03.svg')
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p.mb-1 PPT de referencia en los anexos 
                .col-sm-auto
                  a.boton.color-secundario(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")
                    span.text-white Descargar
                    i.text-white.fas.fa-download




























</template>

<script>
export default {
  name: 'Tema3',
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
