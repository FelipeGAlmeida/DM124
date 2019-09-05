# 📚 Sobre o Projeto avaliativo DM124 📓🎓
Projeto final da disciplina DM124 - Desenvolvimento de Web Services com segurança sob plataforma Java e Node.js ministrada pelo prof. Ednardo David Segura.

O projeto desenvolvido foi um  módulo (apenas uma parte) de um sistema de e-commerce com logística. Esse módulo, chamado 'Provedor de Logística', consiste em uma API em Node.js a qual deveria fornecer serviços REST para obter e atualizar o status do pedido de uma determinada compra.

## ◾️ Funcionalidades ◾️
Como um provedor de logística com acompanhamento da entrega dos pedidos, as funcionalidades são:
- Gerenciar o status de entrega dos pedidos;
- Prover Web Services para cadastrar e atualizar os status dos pedidos;
- Prover instruções para o uso dos serviços do provedor de logística;

## ◾️ Requisitos gerais ◾️
#### ✅ Controle de versão
O projeto avaliativo deverá ser desenvolvido com o auxílio de um controlador de versão desde o seu início. Para esta atividade é recomendado o uso do serviço [GitHub](https://github.com).
#### ⬛️ Nome de domínio *(Requisito cancelado)*
~~Um domínio do tipo top level deverá ser registrado e configurado para o acesso dos serviços. Através do endereço [Freenon](https://my.freenom.com/) é possível obter a criação de domínios gratuitos.~~
#### ❎ Implantação *(Requisito cancelado, mas feito)*
O projeto deverá ser implantado em um provedor de Cloud Computing e deverá estar acessível através do domínio criado no item anterior. [ZEIT Now](https://zeit.co/docs/), [Windows Azure](https://docs.microsoft.com/en-us/azure/app-service/containers/quickstart-nodejs), [Google Cloud](https://cloud.google.com/nodejs/) e [Amazon Web Services](https://aws.amazon.com/getting-started/projects/deploy-nodejs-web-app/) são algumas das opções disponíveis.
#### ✅ REST APIs
O projeto deverá contemplar as operações de uma REST API tais como: [POST](https://github.com/FelipeGAlmeida/DM124/new/master?readme=1#-post), [GET](https://github.com/FelipeGAlmeida/DM124/new/master?readme=1#-get), [PATCH](https://github.com/FelipeGAlmeida/DM124/new/master?readme=1#-patch) e [DELETE](https://github.com/FelipeGAlmeida/DM124/new/master?readme=1#-delete). 

## ◾️ Requisitos específicos ◾️
O projeto deverá contemplar o desenvolvimento de web services em REST para a comunicação com diversos tipos de clientes. Os itens a seguir devem ser contemplados:

#### ✅ Criação da base de dados

| Entregas                 |
|--------------------------|
| ID                       |
| ID do pedido             |
| ID do cliente            |
| Nome recebedor           |
| CPF recebedor            |
| Recebedor é o comprador? |
| Data e hora da entrega   |
| Localização geográfica   |

#### ✅ Criação do serviço REST para manipulação da base de dados

Assim que um pedido é cadastrado no portal web, uma vez aprovado, o ID do pedido e o ID do cliente
devem ser cadastrados no provedor de logística para dar andamento ao processo de entrega.

# 📚 Sobre a API 🌎💻

Segue abaixo alguns detalhes e especificações sobre a API desenvolvida para o provedor de logística.

## ◽️ Deploy ◽️

A API está preparada para rodar tanto no ambiente local (localhost:8080) quanto no ambiente online (provedores). Atualmente a API encontra-se *deployada* no provedor [Heroku](https://www.heroku.com/), pois é um serviço excelente, extremamente fácil de se utilizar e possuí um plano gratuito. Além do que até o momento de execução deste projeto eu mesmo não o conhecia, o que aumentou a vontade de conhecer e utilizar essa ferramenta.

#### 🌐 URL base para requisições na API: https://dm124-felipe.herokuapp.com/api/

## ◽️ Métodos ◽️

## ➕ POST  
&emsp; **_/deliveries_** - Adiciona uma nova entrega ao provedor de logística  
**Headers**   
&emsp;&emsp; **Authentication:** Basic YWRtaW46cHJvdmVkb3IyMDE5  
&emsp;&emsp; **Content-Type:** Application/Json  
**Body**  
&emsp;&emsp; **orderId:**          Number - *ID da ordem*  
&emsp;&emsp; **clienteId:**        Number - *ID do cliente*  
&emsp;&emsp; **receiver:**         String - *Nome do destinatário*  
&emsp;&emsp; **receiverCpf:**      String - *CPF do destinatário*  
&emsp;&emsp; **receiverIsClient:** Boolean - *Controle destinatário ser o cliente*  
&emsp;&emsp; **location:**         String - *Localização para entrega*  
**Exemplo de body** *(raw JSON)*    
&emsp;&emsp;_{  
&emsp;&emsp;&emsp;&emsp;"orderId": 1,  
&emsp;&emsp;&emsp;&emsp;"clientId": 1,  
&emsp;&emsp;&emsp;&emsp;"receiver": "Nome",  
&emsp;&emsp;&emsp;&emsp;"receiverCpf": "000.000.000-00",  
&emsp;&emsp;&emsp;&emsp;"receiverIsclient": false,  
&emsp;&emsp;&emsp;&emsp;"location": "lat/long"  
&emsp;&emsp;}_  
  
## 📄 GET  
&emsp; **_/deliveries_** - Busca todas entregas adicionadas ao provedor de logística  
**Headers**   
&emsp;&emsp; **Authentication:** Basic YWRtaW46cHJvdmVkb3IyMDE5  
&emsp;&emsp; **Content-Type:** Application/Json  
##
&emsp; **_/deliveries/:deliveryId_** - Busca uma entrega adicionada ao provedor pelo seu ID  
**Headers**   
&emsp;&emsp; **Authentication:** Basic YWRtaW46cHJvdmVkb3IyMDE5  
&emsp;&emsp; **Content-Type:** Application/Json  
**Parâmetros**  
&emsp;&emsp; **deliveryId:**          Number - *ID da entrega a ser buscada*  
  
## 📝 PATCH  
&emsp; **_/deliveries/:deliveryId_** - Atualiza uma entrega adicionada ao provedor pelo seu ID  
**Headers**   
&emsp;&emsp; **Authentication:** Basic YWRtaW46cHJvdmVkb3IyMDE5  
&emsp;&emsp; **Content-Type:** Application/Json  
**Parâmetros**  
&emsp;&emsp; **deliveryId:**       Number - *ID da entrega a ser buscada*  
**Body**  
&emsp;&emsp; **orderId:**          Number - *Novo ID da ordem*  
&emsp;&emsp; **clienteId:**        Number - *Novo ID do cliente*  
&emsp;&emsp; **receiver:**         String - *Novo Nome do destinatário*  
&emsp;&emsp; **receiverCpf:**      String - *Novo CPF do destinatário*  
&emsp;&emsp; **receiverIsClient:** Boolean - *Novo controle destinatário-cliente*  
&emsp;&emsp; **location:**         String - *Nova Localização para entrega*  
**Exemplo de body** *(raw JSON)*    
&emsp;&emsp;_{  
&emsp;&emsp;&emsp;&emsp;"orderId": 1,  
&emsp;&emsp;&emsp;&emsp;"clientId": 1,  
&emsp;&emsp;&emsp;&emsp;"receiver": "Nome",  
&emsp;&emsp;&emsp;&emsp;"receiverCpf": "000.000.000-00",  
&emsp;&emsp;&emsp;&emsp;"receiverIsclient": false,  
&emsp;&emsp;&emsp;&emsp;"location": "lat/long"  
&emsp;&emsp;}_  
  
## ❌ DELETE  
&emsp; **_/deliveries/:deliveryId_** - Deleta uma entrega adicionada ao provedor pelo seu ID  
**Headers**   
&emsp;&emsp; **Authentication:** Basic YWRtaW46cHJvdmVkb3IyMDE5  
&emsp;&emsp; **Content-Type:** Application/Json  
**Parâmetros**  
&emsp;&emsp; **deliveryId:**       Number - *ID da entrega a ser buscada*  

## ◽️ Observações ◽️

### 🔶 Postman

Na pasta [./Postman](https://github.com/FelipeGAlmeida/DM124/tree/master/Postman) se encontram as collections de teste, sendo possível a importação das mesmas no programa para realização das requisições na API, tanto no provedor Herouk quanto local.  

### 🔷 Webpage

Existe também uma webpage criada, apenas para introdução da API e aproveitamento do endereço. Nela é possível encontrar alguns links úteis e também uma documentação bem simples sobre os métodos.

#### 🌐 URL da Webpage: https://dm124-felipe.herokuapp.com/
#### 📖 Especificação (Docs): https://dm124-felipe.herokuapp.com/docs/

###### &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; © Felipe G. Almeida - 2019