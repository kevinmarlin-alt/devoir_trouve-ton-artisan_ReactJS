# 🛠️ Trouve Ton Artisan

Application web permettant de consulter un annuaire d’artisans.  
Le projet repose sur une architecture **frontend React** et **backend Node.js (Express)** connecté à une base de données MySQL.



# 📌 Fonctionnalités

- 🔍 Consultation d’une liste d’artisans
- 📍 Filtrage par critères (ex : Nom)
- 📄 Accès aux fiches détaillées
- 🌐 API REST **en lecture seule (GET uniquement)**



# 🧱 Stack technique

## Frontend
- React
- React Router

## Backend
- Node.js
- Express
- Sequelize (ORM)

## Base de données
- MySQL



# 🚀 Installation

1. Cloner le projet
```bash
git clone <url-du-repo>
```

2. Accéder au dossier du projet :
```bash
cd devoir_trouve-ton-artisan_ReactJS
```

## 2. Création de la base de donnée MySQL
1. Executer le fichier `artisan_db.sql` pour créer la base de donnée
2. Puis executer le fichier `artisans_data.sql` pour alimenter la base de donnée

## 3. Lancer le server (backend)
1. Accéder au dossier du projet :
```bash
cd server
``` 
2. Installer les dépendances :
```bash
npm install
```

3. Créer un fichier `.env` à la racine du dossier

4. Ajouter les variables suivantes :
- PORT=`3000`
- DB_HOST=`localhost`
- DB_PORT= (indiquer le PORT utilisé par votre serveur MySQL)
- DB_NAME=`trouve_ton_artisan`
- DB_USER=`client`
- DB_PWD=`MotDePasseFort123!`

5. Lancer le server en mode développement :
```bash
npm run dev
```

## 4. Lancer l'application web (frontend)
1. Accéder au dossier du projet :
```bash
cd frontend
``` 
2. Installer les dépendances :
```bash
npm install
```

3. Créer un fichier `.env` à la racine du dossier

4. Ajouter la variable suivante :
- REACT_APP_API_URL=http://localhost:3000

5. Lancer le server en mode développement :
```bash
npm run dev
```

6. React lancera l'application Web sur le PORT disponible en validant avec `Y`