<p align="center">
  <a href="http://romulobrasil.com">
    <img height="220" width="300" src="http://romulobrasil.com/wp-content/themes/romulobrasil.com/img/logo.png"/>
  </a>
</p>


Pure CAROUSEL JS (purecarousel.js)
==========

Um Carousel simples com efeitos de transition do CSS3 e Javascritp PURO

## Como Utilizar

Para utilizar basta chamar o arquivo .js do plugin no footer:

```
<script src="purecarousel.min.js"></script>
```
Por enquanto tem fazer desse modo pois ainda não está todo pronto pra criar as divs dinamicamente:

```
<div class="container-carousel">
		<a id="prev" class="prev sprite-prev" title="Anterior"></a>
		
		<div class="carousel">
			<div class="overflow">
				<ul 
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
		</div>
		
  	<a id="next" class="next sprite-next" title="Próximo"></a>
  </div>
```
	
E também no footer:
vamos inicializar nosso plugin declarando class e/ou seletor css do seu carousel.

```
<script>
    PureCarousel.init(".carousel ul"); 
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
