export default {
  global: {
    componenteFormativo: 'Patronaje Básico',
    descripcionCurso:
      'El presente componente aborda el desarrollo y la elaboración de moldes desde la implementación de los básicos en las diferentes líneas, el análisis de cada una de las partes que compone una prenda, pasados a planos técnicos con medidas y formas correspondientes a cada estructura.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.svg'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        titulo: 'Patronaje básico de línea infantil',
        numero: '1',
        nombreRuta: 'tema1',
        desarrolloContenidos: true,
        subMenu: [
          {
            titulo: 'Cómo hacer un patrón a escala',
            nombreRuta: 'tema1',
            numero: '1.1',
          },
          {
            numero: '1.2',
            titulo:
              'Implementación de básico superior – Desarrollo de prendas superiores',
            nombreRuta: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Trazo de cabezas mangas – Análisis de manga',
            nombreRuta: 't_1_3',
          },
          {
            numero: '1.3.1',
            titulo: 'Modificaciones de manga',
            nombreRuta: 't_1_3_1',
          },
          {
            numero: '1.4',
            titulo: 'Trazo de cuellos – Generalidades y comportamientos',
            nombreRuta: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Despiece de planos',
            nombreRuta: 't_1_5',
          },
          {
            numero: '1.6',
            titulo: 'Trazo de prendas superiores',
            nombreRuta: 't_1_6',
          },
          {
            numero: '1.7',
            titulo: 'Trazo de prendas inferiores – faldas',
            nombreRuta: 't_1_7',
          },
          {
            numero: '1.8',
            titulo: 'Trazo de prendas inferiores – pantalón',
            nombreRuta: 't_1_8',
          },
          {
            numero: '1.9',
            titulo: 'Trazo de prendas – overol',
            nombreRuta: 't_1_9',
          },
          {
            numero: '1.10',
            titulo: 'Trazo de prendas – bata o vestido',
            nombreRuta: 't_1_10',
          },
        ],
      },

      {
        titulo: 'Patronaje básico línea masculina',
        nombreRuta: 'tema2',
        numero: '2',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: ' Confección panty femenino',
            nombreRuta: 'tema_2_1',
          },
          {
            numero: '2.2',
            titulo: ' Confección bóxer masculino',
            nombreRuta: 'tema_2_2',
          },
          {
            numero: '2.3',
            titulo: ' Confección de camiseta tipo polo',
            nombreRuta: 'tema_2_3',
          },
          {
            numero: '2.4',
            titulo: ' Confección de pantalón sudadera',
            nombreRuta: 'tema_2_4',
          },
          {
            numero: '2.5',
            titulo: ' Elaboración de conjunto deportivo top y leggins',
            nombreRuta: 'tema_2_5',
          },
        ],
      },
      {
        titulo: 'Patronaje básico línea femenina',
        nombreRuta: 'tema3',
        numero: '3',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: ' Confección panty femenino',
            nombreRuta: 'tema_2_1',
          },
          {
            numero: '2.2',
            titulo: ' Confección bóxer masculino',
            nombreRuta: 'tema_2_2',
          },
          {
            numero: '2.3',
            titulo: ' Confección de camiseta tipo polo',
            nombreRuta: 'tema_2_3',
          },
          {
            numero: '2.4',
            titulo: ' Confección de pantalón sudadera',
            nombreRuta: 'tema_2_4',
          },
          {
            numero: '2.5',
            titulo: ' Elaboración de conjunto deportivo top y leggins',
            nombreRuta: 'tema_2_5',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/prueba.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '',
      referencia: '',
      tipo: '',
      link: 'https://www.google.com/',
    },
    {
      tema: '',
      referencia: '',
      tipo: '',
      descarga: '/downloads/prueba.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Término',
      significado: 'Texto de la definición',
    },
    {
      termino: '<em>Término con extranjerismo</em>',
      significado: 'Definición',
    },
  ],
  referencias: [
    {
      referencia: '',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del Ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Olga Constanza Bermúdez Jaimes',
          cargo: 'Responsable de Línea de Producción',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Nombre del rol',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Diseñador de Contenidos Digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Desarrollador Fullstack',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Nombre',
          cargo: 'Animador y Producción audiovisual',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Nombre',
          cargo: 'Actividad Didáctica',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Luis Gabriel Urueta Alvarez',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Jaime Hernan Tejada',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Margarita Marcela Medrano',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
