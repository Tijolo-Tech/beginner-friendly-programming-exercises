## Docker

docker run --name postgres -e POSTGRES_USER=servermateus -e POSTGRES_PASSWORD=servidordedados -e POSTGRES_DB=heros -p 5432:5432 -d postgres


   docker ps
   
   

   docker exec -it postgres bash


   docker run 
   --name adminer 
   -p 8080:8080 
   --link postgres:postgres 
   -d adminer



## ===== MONGODB

docker run --name mongodb -p 4001:4001 -e MONGO_INITDB_ROOT_USERNAME=admin -e MONGO_INITDB_ROOT_PASSWORD=senhaadmin -d mongo:4


docker run --name mongoclient -p 4001:4001 --link mongodb -d mongoclient/mongoclient