![image](https://ik.imagekit.io/czhooyc3x/Projeto%20Integrador%20-%20Delivery%20Food%20App/cover.png?updatedAt=1738355517866)

# PedeAí - Aplicativo de Delivery de Alimentos 



## 1. Descrição



<br>



* Este projeto é um backend para uma plataforma de delivery de alimentos. A API fornece funcionalidades para cadastro de usuários, login, cadastro e gestão de produtos por fornecedores, e uma experiência de compra para os clientes. 

  

<br>




------

## 2. Sobre esta API



<br>



* **Autenticação e Autorização:** Registro e login de usuários (fornecedores e clientes) com autenticação via email e senha;
* **Cadastro de Fornecedor e Cliente:** Diferenciação entre fornecedores (que podem cadastrar e gerenciar produtos) e clientes (que podem comprar produtos);
* **Gerenciamento de Produtos:** Cadastro, alteração, exclusão e visualização de produtos por fornecedores;
* **Nutri Score:** Classificação dos produtos com base no Nutri Score para sugerir alimentos mais saudáveis.
* **Carrinho de Compras:** Funcionalidade para clientes adicionarem produtos ao carrinho.



<br>



### 2.1. Principais Funcionalidades



<br>



1. Cadastro e autenticação de usuários (**Cliente** e **Fornecedor**);
2. Gestão de produtos (**criação, atualização e exclusão**);
3. Filtragem de produtos por categorias;
4. Carrinho de compras;
5. Endereços de entrega armazenados no banco de dados.



<br>



------

## 3. Diagrama de Classe UML



<br>



<div align="center">
	<img src="https://ik.imagekit.io/czhooyc3x/Projeto%20Integrador%20-%20Delivery%20Food%20App/Diagrama_UML.png?updatedAt=1738353438325" width=auto height="auto" />
</div>



<br>



------

## 4. Diagrama Entidade-Relacionamento (DER)



<br>



<div align="center">
<img src="https://ik.imagekit.io/czhooyc3x/Projeto%20Integrador%20-%20Delivery%20Food%20App/Der.png?updatedAt=1738352971917" width="800" height="auto" />
</div>



<br>



------

## 5. Tecnologias Utilizadas



<br>



<div align="center">



| Item                     | Tecnologia |
| ------------------------ | ---------- |
| Servidor                 | Node.js    |
| Linguagem de Programação | TypeScript |
| Framework                | Nest.js    |
| ORM                      | TypeORM    |
| Banco de dados           | MySQL      |
| Deploy                   | Render     |
| Documentação da API      | Swagger    |
| Banco de dados da nuvem  | PostgreSQL |

</div>



<br>



------

## 6. Instruções de Configuração e Execução do Projeto



<br>



1. Clone o repositório: `git clone https://github.com/Projeto-Integrador-G4-JS06/nest-food-delivery-app`;
2. Instale dependências: `npm install`;
3. Configure variáveis de ambiente;
4. Rode a aplicação: `npm run start:dev`.



<br>
