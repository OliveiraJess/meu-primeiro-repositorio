# AULA-10

## CSS

> **[estilização em texto](https://developer.mozilla.org/en-US/docs/Learn/CSS/Styling_text/Fundamentals)**
> * color
>   * nomeada (black)
>   * hexadecimal (#123456)
>   * rgb (255,255,255)
>   * rgba (255,255,255, 0.00~1)
> * font-size: 32px;
> * font-family: myfont;
> * font-weight: 900;
> * font-style: italic;
> * text-transform: uppercase;
> * text-align: center;
> * text-decoration: underline;
> * text-shadow: 1px 1px 1px red
> * list-style-type:none
> * font: forma abreviada para juntar todos ( font-style, font-variant, font-weight, font-stretch, font-size, line-height, and font-family.)
 ---
> **[background](https://developer.mozilla.org/en-US/docs/Web/CSS/background)**
> * background-color: #ffffff
> * background-image: url(./assets/img/background.png);
> * background-repeat:
> * background-size:
>   * auto
>   * contain
>   * cover
>   * xx xx
> * background-position: center;
> * background-attachment:
>   * fixed
>   * scroll
> * background: linear-gradient(0deg, blue, red, yellow)
> * background: linear-gradient(0deg, blue, red, yellow)
 ---
> **[caixas]()**
> * height: 300px;
> * width: 500px;
> * margin: auto;
> * padding: 10px 40px 10px 50px;
> * border: 10px dashed red;
> * border-radius: 10px 20px 30px 40px;
> * box-shadow: 20px -10px 8px 10px rgba(0, 0, 0, 0.7);
> * transition: property time;
> * opacity: 0~1
 ---
> **[Seletores]()**
> * \* seletor universal
> * E seletor de tag
> * . seletor de class
> * \# seletor de Id
> *  E > F seletor do elemento F filhos de E
> *  E + F seletor de primeiro elemento após E
> *  E ~ F seltor do elemento F precedido de E
 ---
 **[display]()**
> * inline\
> ocupa todo o tamanho de uma linha, não levando em conta altura e ou largura definida
> * block\
> ocupa todo todo o tamanho da linha, mesmo que seu conteudo possa ser definido uma largura e altura\
> * inline-block\
> ocupa somente espaço definido, podendo assim ter mais de um elemento na mesma "linha"
> * none\
> o elemento não é exibido
> * flex\
> esse é o mais flexível, portanto o mais complexo, mas mesmo com sua complexidade é um dos mais usados recentemente.
vou reservar um tempo ao final exclusivamente para ele
 ---
> **[position]()**
> * static\
> propriedade padrão, segue o fluxo normal, um abaixo do outros
> * relative\
> propriedade que define a posição de acordo com a posicao da tag pai {static}, permitindo o uso das propriedades de posicao
>   * top
>   * left
>   * right
>   * bottom
> * absolute\
> propriedade que define o valor absoluto da posição, independente de sua posição no html, sobrebondo-se sobre as demais tags
> * fixed\
> propriedade que define um valor fixo de posição, independente de sua posição no html e independente do scroll do mouse
> * float
>   * top
>   * left
>   * right
>   * bottom
> * overflow:
> * scroll
> * fixed
