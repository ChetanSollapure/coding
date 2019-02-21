import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContentService {
  pages: Object = {
    'home': {title: 'Home', subtitle: 'Welcome Home!', content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', image: 'assets/bg00.jpg','maintitle':'Our Team','mainsubtitle':'To You','maincontent':'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',img:'assets/img/intro.jpg'},
    'about': {title: 'About Us', subtitle: 'Just all about us ', content: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ', image: 'assets/bg01.jpg',src:'assets/img/about.jpg',},
    'product': {title: 'Friends', subtitle: 'Best Friends', content:'How to contact us.', img: 'assets/img/products-01.jpg',img1:"assets/img/products-02.jpg",img2:"assets/img/products-03.jpg",upper1:"Title",lower1:"Sub Title",desc1:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",desc2:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",desc3:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",upper2:"Delicious Treats, Good Eats",lower2:"Bakery &amp; Kitchen",upper3:"Title",lower3:"Sub Title",},
    'contact': {title: 'Contact', subtitle: 'Contact Us', content: 'How to contact us.', img: 'assets/img/about.jpg',upper:"Title",lower:"Sub Title",desc:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."}
  };

  constructor() { }
  
}
