### Features

- máscaras simultâneas: (99) 9999-9999||(99) 99999-9999
- quatificador: ^5>9;, ^5_1>A;, ^5_2>*; OK
- prefixo: ''R$ ;9999,99, ''R$ ;^10_3>9;,99
- posfixo: 9,99,, %;
- sentido da márcara para direita: >> OK
- sentido da márcara para esquerda: << OK

### Mask Model
````
{
  prefix: string,
  posfix: string,
  direction: enum('right', 'left'),
  masks: []
}
````

