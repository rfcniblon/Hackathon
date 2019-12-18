import React from 'react';
import '../Demo/Demo.css';

class Demo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
  
    open = () => {
        let global = document.getElementsByClassName('sidebar')[0];
        console.log(global.style.display);
        if (global.style.display === 'none') {            
            global.style.display = 'flex';
         } else {
            global.style.display = 'none';
         } 
    }


    render() {
      return (
	<div id="wrapper">
        <div id="main">
            <div className="inner">
                    <header id="header">
                        <a href="index.html" className="logo"><strong>Le Japon</strong> by WCS</a>
                        <ul className="icons">
                            <li><a href="#" className="icon brands fa-twitter"><span className="label">Twitter</span></a></li>
                            <li><a href="#" className="icon brands fa-facebook-f"><span className="label">Facebook</span></a></li>
                            <li><a href="#" className="icon brands fa-snapchat-ghost"><span className="label">Snapchat</span></a></li>
                            <li><a href="#" className="icon brands fa-instagram"><span className="label">Instagram</span></a></li>
                            <li><a href="#" className="icon brands fa-medium-m"><span className="label">Medium</span></a></li>
                        </ul>
                    </header>
                    <section id="banner">
                        <div className="content">
                            <header>
                            <input type="button" value="Menu" name="masquer" id="button_menu" onClick={this.open} />
                                <h1>Visiter le Japon</h1>
                                <p>Les bonnes raisons de partir en hiver</p>
                            </header>
                            <p>La majorité des voyageurs choisissent le printemps et l’automne pour visiter l’archipel nipponne, mais ne sous estimez pas l’intérêt de l’hiver si vous cherchez quand partir au Japon. Cette saison, souvent oubliée, constitue une occasion unique d’explorer le Japon sous un autre angle, sans les hordes de touristes agglutinés dans les principaux sites et à des tarifs beaucoup plus abordables.</p>
                            <ul className="actions">
                                <li><a href="#" className="button big">Lire plus</a></li>
                            </ul>
                        </div>
                        <span className="image object">
                            <img src="https://tripilli.com/blog/wp-content/uploads/2018/02/img-sans-titre-japon.jpg" alt="" />
                        </span>
                    </section>
                    <section>
                        <header className="major">
                            <h2>titre efface ??</h2>
                        </header>
                        <div className="features">
                            <article>
                                <span className="icon solid fas fa-thumbs-up"></span>
                                <div className="content">
                                    <h3><span className="colorWhite">Les atouts</span></h3>
                                    <p><span className="colorWhite">Visiter le </span>Japon en <span className="colorWhite">hiver vous évitera de suffoquer avec l’humidité de la </span>saison <span className="colorWhite">chaude. Même si les températures</span> varient <span className="colorWhite">beaucoup </span>entre <span className="colorWhite">le </span>Nord <span className="colorWhite">et le Sud de l’archipel, l’hiver au </span>Japon<span className="colorWhite"> est plutôt sec et </span>ensoleillé<span className="colorWhite">. Certes, vous</span> ne <span className="colorWhite">vous baladerez pas </span>en <span className="colorWhite">tee-shirt, mais vous pourrez profiter des meilleurs</span> points <span className="colorWhite">de vue </span>sans nuages, ni <span className="colorWhite">brume à l’</span>horizon. <span className="colorWhite">Le </span>Mont <span className="colorWhite">Fuji </span>en <span className="colorWhite">hiver est </span>bien <span className="colorWhite">dégagé </span>contrairement<span className="colorWhite"> au reste de l’</span>année.
                                    </p>
                                </div>
                            </article>
                            <article>
                                <span className="icon solid fas fa-phone-alt"></span>
                                <div className="content">
                                    <h3><span className="colorWhite">Les </span>bonnes <span className="colorWhite">adresses</span> </h3>
                                    <p><span className="colorWhite">Il fait froid ? Et alors ? Sortez et explorez ! Le </span>Japon<span className="colorWhite"> a</span> tellement <span className="colorWhite">à offrir </span>en <span className="colorWhite">hiver. Si vous êtes </span>fan <span className="colorWhite">de glisse, </span>rendez-vous dans <span className="colorWhite">l'</span>une<span className="colorWhite"> des </span>nombreuses stations<span className="colorWhite"> de ski de l’île d’Hokkaïdo. Plutôt ville ? Partez admirer les superbes</span> illuminations<span className="colorWhite"> des</span> grandes <span className="colorWhite">villes,</span> une <span className="colorWhite">fois la </span>nuit <span className="colorWhite">tombée les ruelles s’</span>allument <span className="colorWhite">et la vie </span>nocturne japonaise <span className="colorWhite">bat </span>son plein. Fan<span className="colorWhite"> de </span> manga <span className="colorWhite">? Allez au Comiket d’hiver, le plus</span> grand évènement <span className="colorWhite">otaku au </span>monde <span className="colorWhite">où vous croiserez de </span>nombreux <span className="colorWhite">cosplayers. Plutôt </span>nature ? Prenez <span className="colorWhite">les </span>sentiers <span className="colorWhite">balisés le temps d’</span>une randonnée exaltante en <span className="colorWhite">forêt,</span> en montagne,<span className="colorWhite"> autour des lacs ou sur la côte.</span></p>
                                </div>
                            </article>
                            <article>
                                <span className="icon solid fa-info"></span>
                                <div className="content">
                                    <h3>Info <span className="colorWhite">tarifs</span></h3>
                                    <p>On ne <span className="colorWhite">le dira jamais assez mais voyager hors</span> saison <span className="colorWhite">vous permet de faire de belles économies ! </span>En <span className="colorWhite">plus de </span>rendre <span className="colorWhite">jaloux vos collègues </span>en prenant <span className="colorWhite">vos </span>vacances en plein <span className="colorWhite">hiver, les prix des billets d’</span>avion <span className="colorWhite">et des hôtels </span>subissent une <span className="colorWhite">très forte baisse à cette période. Alors qu’au </span>printemps,<span className="colorWhite"> les prix </span>peuvent <span className="colorWhite">passer du simple au triple. Qui a dit que voyager au </span>Japon <span className="colorWhite">coûtait cher ?</span></p>
                                </div>
                            </article>
                            <article>
                                <span className="icon regular far fa-futbol"></span>
                                <div className="content">
                                    <h3><span className="colorWhite">Se déplacer au </span>Japon</h3>
                                    <p><span className="colorWhite">Le bus est </span>un moyen<span className="colorWhite"> de</span>transport <span className="colorWhite">très pratique </span>dans certaines<span className="colorWhite"> villes. À Tokyo toutefois, mieux vaut </span>prendre <span className="colorWhite">le métro et le </span>train<span className="colorWhite">.Les réseaux de bus </span>fonctionnent <span className="colorWhite">très </span>bien. <span className="colorWhite">Efficacité,</span> organisation, modernité <span className="colorWhite">et </span>sens <span className="colorWhite">du service.</span></p>
                                </div>
                            </article>
                        </div>
                    </section>
                    <section>
                        <header className="major">
                            <h2>Galerie</h2>
                        </header>
                        <div className="posts">
                            <article>
                                <a href="#" className="image"><img src="images/Torii.jpg" alt="" /></a>
                                <h3>Le torii</h3>
                                <p>Les fameux torii (portiques shinto de passage entre les mondes profane et sa<span className = "italic">c</span>ré) du san<span className = "italic">c</span>tuaire Fushimi Inari Taisha, Kyoto, Japon</p>
                                <ul className="actions">
                                    <li><a href="#" className="button">Plus</a></li>
                                </ul>
                            </article>
                            <article>
                                <a href="#" className="image"><img src="http://tontonphoto.fr/wp-content/uploads/2015/01/japon-16-koyasan-okunion-porte-shintoiste.jpg" alt="" /></a>
                                <h3>Okuno-in</h3>
                                <p>Porte d'un mémorial familial dans le san<span className = "italic">c</span>tuaire d'Okuno-in, Koyasan, Japon</p>
                                <ul className="actions">
                                    <li><a href="#" className="button">Plus</a></li>
                                </ul>
                            </article>
                            <article>
                                <a href="#" className="image"><img src="https://www.gaijinjapan.org/wp-content/uploads/2014/02/hitachi-seaside-park-kota-g.jpg" alt="" /></a>
                                <h3>Hita<span className = "italic">c</span>hi Seaside Park</h3>
                                <p><span className = "italic">C</span>e par<span className = "italic">c</span> est magique en <span className = "italic">c</span>ouleur. Ave<span className = "italic">c</span> des variétés de fleurs différentes en fleuraison, il propose toujours des <span className = "italic">c</span>ouleurs à voir et à revoir, toutes plus sublimes les unes que les autres. Il <span className = "italic">c</span>ouvre près de 200 he<span className = "italic">c</span>tares dans la préfe<span className = "italic">c</span>ture d’Ibaraki.</p>
                                <ul className="actions">
                                    <li><a href="#" className="button">Plus</a></li>
                                </ul>
                            </article>
                            <article>
                                <a href="#" className="image"><img src="https://www.gaijinjapan.org/wp-content/uploads/2014/02/arashiyama-isaac-bordas.jpg" alt="" /></a>
                                <h3>Arashiyama</h3>
                                <p>Une splendide forêt de bambous de toute beauté qui en met plein la vue d’entrée de jeu.  Elle n’est pas immense mais son passage longé de bambous géants en vaut le détour.</p>
                                <ul className="actions">
                                    <li><a href="#" className="button">Plus</a></li>
                                </ul>
                            </article>
                            <article>
                                <a href="#" className="image"><img src="https://www.gaijinjapan.org/wp-content/uploads/2014/02/kii-montagnes-eauseren.tumblr.jpg" alt="" /></a>
                                <h3><span className = "italic">C</span>haîne de montagnes Kii</h3>
                                <p>Elle se situe sur 3 préfe<span className = "italic">c</span>tures : Mie, Nara, Wakayama et est un site re<span className = "italic">c</span>onnu et protégé par l’Unes<span className = "italic"></span>o. Il y a même un <span className = "italic">c</span>ir<span className = "italic">c</span>uit de pèlerinage sur pla<span className = "italic">c</span>e.</p>
                                <ul className="actions">
                                    <li><a href="#" className="button">Plus</a></li>
                                </ul>
                            </article>
                            <article>
                                <a href="#" className="image"><img src="https://www.gaijinjapan.org/wp-content/uploads/2013/12/kyoto-tori.jpg" alt="" /></a>
                                <h3>Fushimi Inaritaisha Shrine</h3>
                                <p>1000 Torii rouge ardent avec des kanji d’un beau noir gravés dessus. Voi<span className = "italic">c</span>i <span className = "italic">c</span>e que vous pourrez voir au sein du Fushimi Inari. Un véritable tunnel de Torii, vraiment idéal pour prendre de belles photos.</p>
                                <ul className="actions">
                                    <li><a href="#" className="button">Plus</a></li>
                                </ul>
                            </article>
                        </div>
                    </section>
            </div>
        </div>
        <div id="sidebar" className="sidebar" style={{display: 'none'}}>
            <div className="inner">
                    <section id="search" className="alt">
                        <form method="post" action="#">
                            <input type="text" name="query" id="query" placeholder="Search" />
                        </form>
                    </section>
                    <nav id="menu">
                        <header className="major">
                            <h2>Menu</h2>
                        </header>
                        <ul>
                            <li><a href="index.html">Homepage</a></li>
                            <li><a href="generic.html">Generic</a></li>
                            <li><a href="elements.html">Elements</a></li>
                            <li>
                                <span className="opener">Submenu</span>
                                <ul>
                                    <li><a href="#">Lorem Dolor</a></li>
                                    <li><a href="#">Ipsum Adipiscing</a></li>
                                    <li><a href="#">Tempus Magna</a></li>
                                    <li><a href="#">Feugiat Veroeros</a></li>
                                </ul>
                            </li>
                            <li><a href="#">Etiam Dolore</a></li>
                            <li><a href="#">Adipiscing</a></li>
                            <li>
                                <span className="opener">Another Submenu</span>
                                <ul>
                                    <li><a href="#">Lorem Dolor</a></li>
                                    <li><a href="#">Ipsum Adipiscing</a></li>
                                    <li><a href="#">Tempus Magna</a></li>
                                    <li><a href="#">Feugiat Veroeros</a></li>
                                </ul>
                            </li>
                            <li><a href="#">Maximus Erat</a></li>
                            <li><a href="#">Sapien Mauris</a></li>
                            <li><a href="#">Amet Lacinia</a></li>
                        </ul>
                    </nav>
                    <section>
                        <header className="major">
                            <h2>Ante interdum</h2>
                        </header>
                        <div className="mini-posts">
                            <article>
                                <a href="#" className="image"><img src="images/pic07.jpg" alt="" /></a>
                                <p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore aliquam.</p>
                            </article>
                            <article>
                                <a href="#" className="image"><img src="images/pic08.jpg" alt="" /></a>
                                <p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore aliquam.</p>
                            </article>
                            <article>
                                <a href="#" className="image"><img src="images/pic09.jpg" alt="" /></a>
                                <p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore aliquam.</p>
                            </article>
                        </div>
                        <ul className="actions">
                            <li><a href="#" className="button">More</a></li>
                        </ul>
                    </section>
                    <section>
                        <header className="major">
                            <h2>Get in touch</h2>
                        </header>
                        <p>Sed varius enim lorem ullamcorper dolore aliquam aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin sed aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>
                        <ul className="contact">
                            <li className="icon solid fa-envelope"><a href="#">information@untitled.tld</a></li>
                            <li className="icon solid fa-phone">(000) 000-0000</li>
                            <li className="icon solid fa-home">1234 Somewhere Road #8254<br />
                            Nashville, TN 00000-0000</li>
                        </ul>
                    </section>
                    <footer id="footer">
                        <p className="copyright">&copy; Untitled. All rights reserved. Demo Images: <a href="https://unsplash.com">Unsplash</a>. Design: <a href="https://html5up.net">HTML5 UP</a>.</p>
                    </footer>

            </div>
        </div>

</div>

);
}
}

export default Demo;