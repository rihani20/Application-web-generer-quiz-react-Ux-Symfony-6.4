# Quiz Application

## Description
Cette application web permet aux utilisateurs de passer des quiz sur divers sujets tels que ReactJS, NextJS, Git, MySQL et Symfony. Elle est développée avec Symfony 6.4 côté serveur, React côté client, et Material-UI pour l'interface utilisateur. En raison des limitations de l'utilisation gratuite de l'OpenAPI, les données des quiz sont stockées dans des fichiers JSON sur le serveur.

## Technologies Utilisées
- **Backend:** Symfony 6.4
- **Frontend:** React, Material-UI
- **Base de données:** MySQL
- **Outils de Build:** Webpack Encore
- **Bundles:** OpenAIBundle, ReactBundle, WebpackEncoreBundle

## Prérequis
- PHP 8.0 ou supérieur
- Node.js et npm
- MySQL
- Composer

## Installation

1. Clonez le projet :
    ```bash
    git clone [URL_du_dépôt]
    cd [nom_du_projet]
    ```

2. Installez les dépendances Symfony :
    ```bash
    composer install
    ```

3. Installez les dépendances Node.js :
    ```bash
    npm install
    ```

4. Configurez la base de données et Stripe dans le fichier `.env` :
    ```env
DATABASE_URL="mysql://root:@127.0.0.1:3306/db-quiz-chatgpt-sf-react"
###< doctrine/doctrine-bundle ###

###> openai-php/symfony ###
# Generate your own API credentials through the OpenAI Platform portal.
# https://platform.openai.com/account/api-keys
OPENAI_API_KEY=sk-
OPENAI_ORGANIZATION=org-
###< openai-php/symfony ###


    STRIPE_API_KEY=
    STRIPE_API_SECRET=
    ```

5. Exécutez les migrations de la base de données :
    ```bash
    php bin/console doctrine:migrations:migrate
    ```

6. Démarrez le serveur de développement :
    ```bash
    symfony server:start
    npm run dev
    ```

## Contributions

Les contributions sont les bienvenues. Veuillez ouvrir une issue pour discuter de ce que vous souhaitez changer.

## Références

- [Guide de configuration de Symfony](https://symfony.com/doc/6.4/setup.html)
- [Utilisation des bundles UX React avec Symfony](https://symfony.com/bundles/ux-react/current/index.html)
- [OpenAI Symfony Bundle sur GitHub](https://github.com/openai-php/symfony)
- [Documentation du composant Serializer de Symfony](https://symfony.com/doc/6.4/components/serializer.html)
- [Site officiel de Material-UI (MUI)](https://mui.com/)