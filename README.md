<p align="center">
  <a href="http://romulobrasil.com">
    <img height="220" width="300" src="http://romulobrasil.com/wp-content/themes/romulobrasil.com/img/logo.png"/>
  </a>
</p>


Pure Carousel JS (purecarousel.js)
==========

Um Carousel simples com efeitos de transition do CSS3 e Javascritp PURO

## Como Utilizar

Para utilizar basta chamar o arquivo .js do plugin no footer:

```
<script src="purecarousel.min.js"></script>
```
Basta declarar qualquer class sendo que seja inicializado posteriormente e os dois arrows:

```
<div class="container-carousel">
	<a id="prev" class="prev sprite-prev" title="Anterior"></a>
	<div class="carousel-content">
		<ul 
		    class       = "carousel"
		    data-next   = "#next"
		    data-prev   = "#prev"
		    data-amount = "3"
		    data-row    = "2"
		>
			<li><img src="img/carousel.jpg" alt="" /></li>
			<li><img src="img/carousel.jpg" alt="" /></li>
			<li><img src="img/carousel.jpg" alt="" /></li>
			<li><img src="img/carousel.jpg" alt="" /></li>
			<li><img src="img/carousel.jpg" alt="" /></li>
			<li><img src="img/carousel.jpg" alt="" /></li>
			<li><img src="img/carousel.jpg" alt="" /></li>
			<li><img src="img/carousel.jpg" alt="" /></li>
			<li><img src="img/carousel.jpg" alt="" /></li>
			<li><img src="img/carousel.jpg" alt="" /></li>
		</ul>
	</div>	
  	<a id="next" class="next sprite-next" title="Próximo"></a>
</div>
```
	
E também no footer:
vamos inicializar nosso plugin declarando class e/ou seletor css do seu carousel.

```
<script>
    PureCarousel.init(".carousel"); 
</script>
```

### Atributos 'data':
Como inicializa-los:

Data-next   --> Você atribue a um seletor ID para um arrow de próximo;

Data-prev   --> Você deve atribuir a um seletor ID para um arrow anterior;

Data-amount --> Quantidade de colunas ele irar pecorrer;

Data-row    --> Quantidade de linhas irar ter o seu carousel;

```
data-next   = "selector #id"
data-prev   = "selector #id"
data-amount = "integer"
data-row    = "integer"
```
