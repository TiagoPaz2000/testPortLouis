# Boas vindas ao repositório do teste de SQL da empresa Port Louis.

### O teste consistia em escrever quatro queries SQL que retornassem determinados valores.

# Sumário

- [Boas vindas ao repositório do teste de SQL da empresa Port Louis!](#Boas vindas ao repositório do teste de SQL da empresa Port Louis)
- [Sumário](#sumário)
- [Lista de requisitos](#lista-de-requisitos)
  - [1) Escreva uma query SQL para imprimir os detalhes dos Workers cujo salário está entre 100000 e 500000.](1 - Escreva uma query SQL para imprimir os detalhes dos Workers cujo salário está entre 100000 e 500000.)
  - [2) Escreva uma query SQL para imprimir os detalhes dos Workers que incressaram em Fevereiro de 2014.](2 - Escreva uma query SQL para imprimir os detalhes dos Workers que incressaram em Fevereiro de 2014.)
  - [3) Escreva uma query SQL para imprimir os detalhes dos Workers que têm os mesmos salários.](3 - Escreva uma query SQL para imprimir os detalhes dos Workers que têm os mesmos salários.)
  - [4) Escreva uma query SQL para imprimir os detalhes dos Workers que têm o maior salário de cada departamento.](4 - Escreva uma query SQL para imprimir os detalhes dos Workers que têm o maior salário de cada departamento.)

## Lista de requisitos:

### 1 - Escreva uma query SQL para imprimir os detalhes dos Workers cujo salário está entre 100000 e 500000.

```
SELECT * FROM workers
WHERE salary BETWEEN 100000 AND 500000;
```

### 2 - Escreva uma query SQL para imprimir os detalhes dos Workers que incressaram em Fevereiro de 2014.

```
SELECT * FROM workers
WHERE joining_date BETWEEN '2014-02-01 09:00:00' AND '2014-02-28 09:00:00';
```

### 3 - Escreva uma query SQL para imprimir os detalhes dos Workers que têm os mesmos salários.

```
SELECT * FROM workers
WHERE salary = 
    (SELECT salary
     FROM workers
     GROUP BY salary
     HAVING COUNT(*) > 1);
```

### 4 - Escreva uma query SQL para imprimir os detalhes dos Workers que têm o maior salário de cada departamento.

```
SELECT A.* FROM
(
    SELECT department, MAX(salary) AS salary FROM workers
    GROUP BY department
) B
JOIN workers A
ON A.department = B.department
AND A.salary = B.salary
```
