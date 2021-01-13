---
title: "Proyecto Integrado"
author: "Mariana Ravícole"
date: "15-01-2021"
---

# Proyecto PetShop - Grupo 03

## Integrantes

- **Martín Godec**
- **Felice Torreguitar**
- **Mariana Ravícole:** Diseñadora Gráfica trabajando actualmente en Balanz como Lead Designer ux/ui.


## Temática del sitio y público objetivo.

Tienda de venta minorista de artículos para las mascotas, alimentos y accesorios varios. Con diseño simple y un proceso de compra amigable permite que un usuario, registrandose previamente, pueda adquirir de manera fácil el alimento para su mascota.

Con sólo registrarse puede adquirir con cualquier tarjeta de crédito o através de mercado pago lo que desea y recibirlo cómodo en su casa.

---
## Listado de referentes

### Otras tiendas con la misma temática. 

La mayoria usa "Tienda Nube" como servicio. 

¿Qué es Tiendanube? Tiendanube ofrece una solución tecnológica de ecommerce pensada para que micro, pequeñas, medianas y grandes empresas puedan crear su propia tienda online autogestionable, sin conocimientos técnicos.

- https://www.timoteopetshop.com/
- https://petonline.com.ar/
- https://www.natural-life.com.ar/

### Tiendas de inspiración

Por estética y por una buena experiencia de usuario en el proceso de compra y venta de sus productos

- https://tiendaplaymobil.com/
- https://balcarce.mitiendanube.com/alfajores/
- https://www.hausorganicmarket.com/?ref=tiendanube.com
- https://shop.luigibosca.com/

---

## Design

### Fonts

Colocar en el *head* el link de Google Fonts

```html
<!-- Open Sans -->

<head>
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap" rel="stylesheet">
</head>

```

```css

h2 {
    font-family: 'Open Sans', sans-serif;
    font-weight: 700;
}

h3 {
    font-family: 'Open Sans', sans-serif;
    font-weight: 400;
}

/* En descripcion de producto */

p {
    font-family: Arial, Helvetica, sans-serif;
}

```

### Fonts Icons

1. Bajar la carpeta del siguiente URL: https://fontawesome.com/v4.7.0/get-started/.

2. Descomprimirla y llevarla dentro de la carpeta **public/css**.

3. Colocar en el *head* los links a **font-awesome.css** y a **font-awesome.min.css**

```html
<!-- Font Awesome -->

<head>
    <link href="font-awesome-4.7.0/css/font-awesome.css" rel="stylesheet">
    <link href="font-awesome-4.7.0/css/font-awesome.min.css" rel="stylesheet">
</head>

<body>
    <div><i class="fa fa-search" aria-hidden="true"></i></div>
    <div><i class="fa fa-shopping-cart" aria-hidden="true"></i></div>
    <div><i class="fa fa-trash-o" aria-hidden="true"></i></div>
    <div><i class="fa fa-phone" aria-hidden="true"></i></div>
    <div><i class="fa fa-map-marker" aria-hidden="true"></i></div>
    <div><i class="fa fa-envelope-o" aria-hidden="true"></i></div>
    <div><i class="fa fa-bars" aria-hidden="true"></i></div>
    <div><i class="fa fa-times" aria-hidden="true"></i></div>
</body>

```

### Colores Generales


- blanco: #ffffff;
- gris-claro: #E9E9E9;
- gris-medio: #CDCDCD;
- gris-oscuro: #979797;
- negro: #000000;

- amarillo: #FDB440;
- naranja: #FF662A;
- marron: #471F1F;
