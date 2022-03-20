# Node.js API com Typescript

## #CalculatorPaintWall

Esta api foi criada para ajudar o usuário a calcular a quantidade de tinta necessária para pintar uma sala.
A aplicação considera que a sala é composta de 4 paredes e deve permitir que o usuário escolha qual a medida de cada parede e quantas janelas e portas possuem cada parede.
Com base na quantidade necessária o sistema deve apontar tamanhos de lata de tinta que o usuário deve comprar, sempre priorizando as latas maiores.

## Tecnologias utilizadas

---

Principais tecnologias utilizadas no código.

💻 [Node.js](https://nodejs.org/)

🧰 [Typescript](https://www.typescriptlang.org/)

## Como rodar a pagina web

---

1. Clone o repositorio https://gitlab.com/fabiohigoralm/node-typescript-api-calculatorpaintwall.git ,logo em seguida entre na pasta do projeto.

2. No terminal dentro do repositorio raiz execute `npm install` para instalar as dependencias.

3. Em seguida `npm run build` para compilar o projeto em javaScript.

4. E `npm start` executar o projeto que por padrão vai ficar disponível em [http://localhost:3000](http://localhost:3000),mais pode ser alterada no arquivo .env como como variavel global.

## #Api CalculatorPaintWall

1 - Aplicação contem o endpoint POST `/calculadora`

- O `Body` da requisição deverá ter o seguinte formato:

  ```json
  [
    {
      "widthWall": 5,
      "wallHeight": 3,
      "quantityDoor": 1,
      "quantityWindow": 0
    },
    {
      "widthWall": 5,
      "wallHeight": 3,
      "quantityDoor": 0,
      "quantityWindow": 1
    },
    {
      "widthWall": 5,
      "wallHeight": 3,
      "quantityDoor": 0,
      "quantityWindow": 0
    },
    {
      "widthWall": 4,
      "wallHeight": 3,
      "quantityDoor": 1,
      "quantityWindow": 0
    }
  ]
  ```

- O `Header` da requisição deverá conter:

`json{ Content-Type: application/json }`

- O array representa a sala que deseja ser pintada e cada objeto dentro do array representa uma parede .

- O array deve conter 4 objetos sendo obrigatorio conter todas as chaves:
  1.widthWall = number
  2.wallHeight = number
  3.quantityDoor = number
  4.quantityWindow = number

2 - A aplicação retoranar um status http `400` Bad Resquest caso encontre algum erro,com suas respectivas mensagens de aviso.

- Exemplo 1:Erro ao validar os campos de entrada.

```json
{
  "Error": "Os objetos devem conter a chave widthWall."
}
```

- Exemplo 1:Erro ao validar os dados de entrega.

```json
{
  "Errors": [
    {
      "Wall1": [
        "A altura das paredes deve ser no minimo 30cm maior que a altura da porta."
      ]
    },
    {
      "Wall2": [
        "Nenhuma parede pode ter menos de 1 metro quadrado nem mais de 15 metros quadrados"
      ]
    },
    {
      "Wall3": [
        "O total de área das portas e janelas deve ser no máximo 50% da área de parede."
      ]
    }
  ]
}
```
