### Features

- máscaras simultâneas: (99) 9999-9999||(99) 99999-9999
- quatificador: ^5>9;, ^5_1>A;, ^5_2>*; OK
- prefixo: :prfxR$ ;9999,99, ''R$ ;9999,99, ""R$ ;9999,99, ''R$ ;^10_3>9;,99
- posfixo: 9,99:psfx %;
- sentido da márcara para direita: >>999.999,99 OK
- sentido da márcara para esquerda: <<999.999,99 OK

### Mask Model
````
{
  prefix: string,
  postfix: string,
  direction: enum('right', 'left'),
  masks: []
}
````

