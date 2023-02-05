# Exercice Monade Writer

## Sujet :

Dans le cours, nous avons évoqué que la monade Identité pouvait servir d'historique.

C'était un raccourcis. Avec les affichages successifs, cette monade peut en effet servir d'historique même si la monade en elle même ne contient pas cet historique

Il existe une monade qui permet de répondre à ce besoin : Writer Monad

Vous devrez créer cette monade dans cet exercice.

Il serait cruel de vous laisser sur une page blanche sans point de départ. Les monades ne sont pas évidentes à appréhender. La pratique est une tout autre paire de manche.

Voici quelques indices :

- La monade doit avoir une valeur et un tableau de log comme propriétés
- La monade doit avoir un moyen de chainer les méthodes (respect des lois monadiques, donc loi de l'identité à droite pour celle-ci)
- Utiliser une fonction simple pour commencer (comme `add`). Essayer d'utiliser la composition de fonction à votre avantage vu que vous devrez passer 2 valeurs dans cette fonction
- N'hésitez pas à implémenter la méthode Writer.of pour instancier la monade avec plus de facilité pour vous concentrer sur l'essentiel. Elle pourra retourner une instance de Writer directement pour mettre les logs à jours au lieu de juste retourner le résultat

## Checklist

Pour résumer, vous devez :

- [ ] Développer la monade Writer
- [ ] Développer des fonctions à chainer à l'aide de la monade Writer
- [ ] Appliquer vos fonctions à chainer avec la monade que vous avez développé

## Lien du dépôt :

https://github.com/Norudah/FYC-ressources/tree/main/exercises/writerMonad
