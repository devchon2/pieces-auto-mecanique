// Récupération des pièces depuis le fichier JSON
const reponse = await fetch('pieces-autos.json');
const pieces = await reponse.json();
// Création des balises 
for (let i=0; i < pieces.length; i++){
const sectionFiches = document.querySelector(".fiches");
const article = pieces[i];
const pieceElement = document.createElement("article");
const imageElement = document.createElement("img");
imageElement.src = article.image;
const nomElement = document.createElement("h2");
nomElement.innerText = article.nom;
const prixElement = document.createElement("p");
prixElement.innerText = `Prix: ${article.prix} € (${article.prix < 35 ? "€" : "€€€"})`;
const categorieElement = document.createElement("p");
categorieElement.innerText = article.categorie ?? "(aucune catégorie)";

//Création des élements pour l'exercice
const descriptionElement = document.createElement("p");
descriptionElement.innerText = article.description ?? "Pas de description pour le moment.";

const stockElement = document.createElement("p");
stockElement.innerText = `Disponibilité: ${article.disponibilité != "non" ? "En stock" : "Rupture de stock"}`;

//Rattachement de nos balises au DOM
sectionFiches.appendChild(pieceElement)
pieceElement.appendChild(imageElement);
pieceElement.appendChild(nomElement);
pieceElement.appendChild(prixElement);
pieceElement.appendChild(categorieElement);
pieceElement
//Rattachement des èléments au DOM pour l'exercice
pieceElement.appendChild(descriptionElement);
pieceElement.appendChild(stockElement)
}