# kanastra-challenge
Desafio para evoluir o frontend (React + Vite) integrando com backend (Python + Django)

## Instalação

1. Clone o repositório
```
git clone https://github.com/marcusgurgel/kanastra-challenge.git
```
2. Selecionar a pasta raiz
```
cd kanastra-challenge
```
4. Executar o comando docker-compose build
```
docker-compose -p {nome do projeto} build
```
5. Executar o comando docker-compose up   
```
docker-compose up
```
## Navegação - frontend

1. Abrir o browser e acessar a url
```
http://127.0.0.1:8888/
```

## Endpoint API - backend

1. Endpoint da API para envio do arquivo
```
POST http://127.0.0.1:8000/api/upload
```
2. Endpoint da API para histórico de arquivos enviados e salvos
```
GET http://127.0.0.1:8000/api/list
```

## Storage

1. Os arquivos enviados são salvos fora do container

_kanastra-challenge/files/_
