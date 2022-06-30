## pixel-react-nav4-0.4 : configuration des headers dans les composants

# Gestion des menus

Dans ce code, on étudie comment ajouter des menus avec react navigation sans dupliquer le code

Cela correspond à la vidéo 120 de la formation react native de Donkey Geek :
https://www.udemy.com/course/reactnative-fr




### Intégration du composant logo dans navigationOption


```javascript
Portfolio.navigationOptions = {
  headerTitle:  () => <Logo/>, 
  headerStyle:  {backgroundColor : "orangered"},
};

```

### J'aurai pu aussi définir le style de cette manière

```javascript
Portfolio.navigationOptions = {
  headerTitle:  "Portfolio",
  headerStyle:  {backgroundColor : "orangered"},
  headerTintColor : "yellow", /** pour changer la couleur de police */
  headerTitleStyle : {
    fontStyle: "italic"  
  }
};
```


