import React from 'react';
import '../Demo/Demo.css';
import Modal from 'react-modal';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};
//Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)

Modal.setAppElement('#root')

class Demo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dispBlock: false,
            modalIsOpen: false,
            message1: "",
            message2: "",
            message3: "",
            indiceUn: "",
            indiceDeux: "",
            indiceTrois: "",
            indiceQuatres: "",
            indiceCinq: ""
        }
        this.openModal = this.openModal.bind(this);
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
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

    openModal() {
        this.setState({ modalIsOpen: true });
    }

    afterOpenModal() {
        // references are now sync'd and can be accessed.
        this.subtitle.style.color = '#f00';
    }

    closeModal() {
        this.setState({ modalIsOpen: false });
    }
    verificationUn() {
        let indice = document.getElementById("indice-1").value;
        if (indice === "green") {
            this.setState(
                {
                    modalIsOpen: true,
                    message1: ("Bravo tu as trouver l'indice ,ci-dessous tu trouveras un coup de pouce pour la suite ;)"),
                    indiceUn: (" ... + ... + i + ...")
                }
            )
        } else {
            this.setState(
                {
                    modalIsOpen: true,
                    message1: ("Désolé ce n'est pas le bonne indice")

                }
            )
        }
    }
    verificationDeux() {
        let indice = document.getElementById("indice-2").value;
        let dispNone = document.getElementsByClassName("dispNone")
        if (indice === "i") {
            this.setState(
                {
                    dispBlock: true
                }
            )

            alert("Bravo tu as trouver l'indice , il te reste plus cas trouver le point commun")

            for (let i = 0, len = dispNone.length; i < len; i++) {
                dispNone[i].style.display = 'none';
            }
            

        } else {
            this.setState(
                {
                    message2: ("Désolé ce n'est pas la bonne réponse")

                }
            )
        }
    }
    verificationTrois() {
        let indice = document.getElementById("indice-2").value;

        if (indice === "n"){
            this.setState(
                {
                message3: ("Bravo tu as trouver l'indice")
                }
            )
        }else{
            this.setState(
                {
                message3: ("Désolé ce n'est pas la bonne réponse")
                }
            )
        }
    }

    render() {
        return (
            <div id="wrapper">
                <div id="main">
                    <div className="inner">
                        <header id="header">
                            <input type="button" value="Menu" name="masquer" id="button_menu" onClick={() => this.open()} />
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
                            </header>
                            <div className="features">
                                <article>
                                    <span className="icon solid fas fa-thumbs-up"></span>
                                    <div className="content">
                                        <h3><span className="dispNone">Les atouts</span></h3>
                                        <p><span className="dispNone">Visiter le </span>Japon en <span className="dispNone">hiver vous évitera de suffoquer avec l’humidité de la </span>saison <span className="dispNone">chaude. Même si les températures</span> varient <span className="dispNone">beaucoup </span>entre <span className="dispNone">le </span>Nord <span className="dispNone">et le Sud de l’archipel, l’hiver au </span>Japon<span className="dispNone"> est plutôt sec et </span>ensoleillé<span className="dispNone">. Certes, vous</span> ne <span className="dispNone">vous baladerez pas </span>en <span className="dispNone">tee-shirt, mais vous pourrez profiter des meilleurs</span> points <span className="dispNone">de vue </span>sans nuages, ni <span className="dispNone">brume à l’</span>horizon. <span className="dispNone">Le </span>Mont <span className="dispNone">Fuji </span>en <span className="dispNone">hiver est </span>bien <span className="dispNone">dégagé </span>contrairement<span className="dispNone"> au reste de l’</span>année.
                                    </p>
                                    </div>
                                </article>
                                <article>
                                    <span className="icon solid fas fa-phone-alt"></span>
                                    <div className="content">
                                        <h3><span className="dispNone">Les </span>bonnes <span className="dispNone">adresses</span> </h3>
                                        <p><span className="dispNone">Il fait froid ? Et alors ? Sortez et explorez ! Le </span>Japon<span className="dispNone"> a</span> tellement <span className="dispNone">à offrir </span>en <span className="dispNone">hiver. Si vous êtes </span>fan <span className="dispNone">de glisse, </span>rendez-vous dans <span className="dispNone">l'</span>une<span className="dispNone"> des </span>nombreuses stations<span className="dispNone"> de ski de l’île d’Hokkaïdo. Plutôt ville ? Partez admirer les superbes</span> illuminations<span className="dispNone"> des</span> grandes <span className="dispNone">villes,</span> une <span className="dispNone">fois la </span>nuit <span className="dispNone">tombée les ruelles s’</span>allument <span className="dispNone">et la vie </span>nocturne japonaise <span className="dispNone">bat </span>son plein. Fan<span className="dispNone"> de </span> manga <span className="dispNone">? Allez au Comiket d’hiver, le plus</span> grand évènement <span className="dispNone">otaku au </span>monde <span className="dispNone">où vous croiserez de </span>nombreux <span className="dispNone">cosplayers. Plutôt </span>nature ? Prenez <span className="dispNone">les </span>sentiers <span className="dispNone">balisés le temps d’</span>une randonnée exaltante en <span className="dispNone">forêt,</span> en montagne,<span className="dispNone"> autour des lacs ou sur la côte.</span></p>
                                    </div>
                                </article>
                                <article>
                                    <span className="icon solid fa-info"></span>
                                    <div className="content">
                                        <h3>Info <span className="dispNone">tarifs</span></h3>
                                        <p>On ne <span className="dispNone">le dira jamais assez mais voyager hors</span> saison <span className="dispNone">vous permet de faire de belles économies ! </span>En <span className="dispNone">plus de </span>rendre <span className="dispNone">jaloux vos collègues </span>en prenant <span className="dispNone">vos </span>vacances en plein <span className="dispNone">hiver, les prix des billets d’</span>avion <span className="dispNone">et des hôtels </span>subissent une <span className="dispNone">très forte baisse à cette période. Alors qu’au </span>printemps,<span className="dispNone"> les prix </span>peuvent <span className="dispNone">passer du simple au triple. Qui a dit que voyager au </span>Japon <span className="dispNone">coûtait cher ?</span></p>
                                    </div>
                                </article>
                                <article>
                                    <span className="icon regular far fa-futbol"></span>
                                    <div className="content">
                                        <h3><span className="dispNone">Se déplacer au </span>Japon</h3>
                                        <p><span className="dispNone">Le bus est </span>un moyen<span className="dispNone"> de</span>transport <span className="dispNone">très pratique </span>dans certaines<span className="dispNone"> villes. À Tokyo toutefois, mieux vaut </span>prendre <span className="dispNone">le métro et le </span>train<span className="dispNone">.Les réseaux de bus </span>fonctionnent <span className="dispNone">très </span>bien. <span className="dispNone">Efficacité,</span> organisation, modernité <span className="dispNone">et </span>sens <span className="dispNone">du service.</span></p>
                                    </div>
                                </article>
                                <input type="text" name="indice" id="indice-2"/>
                                <button className="dispNone" onClick={() => this.verificationDeux()}>Valider</button>
                                <p className="dispNone">{this.state.message2}</p>

                                <button id={this.state.dispBlock ? "dispBlock":"dispNone"} onClick={() => this.verificationTrois()}>Valider</button>
                                <p id="dispBlock">{this.state.message3}</p>
                                <p id="dispBlock">{this.state.indiceTrois}</p>
                            </div>
                        </section>
                        <section>
                            <header className="major">
                                <h2>Galerie</h2>
                            </header>
                            <div className="posts">
                                <article>
                                    <a href="#" className="image"><img src="https://i.ytimg.com/vi/uHbUT-K5dsw/maxresdefault.jpg" alt="" /></a>
                                    <h3>Le torii</h3>
                                    <p>Les fameux torii (portiques shinto de passage entre les mondes profane et sa<span className="italic">c</span>ré) du san<span className="italic">c</span>tuaire Fushimi Inari Taisha, Kyoto, Japon</p>
                                    <ul className="actions">
                                        <li><a href="#" className="button">Plus</a></li>
                                    </ul>
                                </article>
                                <article>
                                    <a href="#" className="image"><img src="http://tontonphoto.fr/wp-content/uploads/2015/01/japon-16-koyasan-okunion-porte-shintoiste.jpg" alt="" /></a>
                                    <h3>Okuno-in</h3>
                                    <p>Porte d'un mémorial familial dans le san<span className="italic">c</span>tuaire d'Okuno-in, Koyasan, Japon</p>
                                    <ul className="actions">
                                        <li><a href="#" className="button">Plus</a></li>
                                    </ul>
                                </article>
                                <article>
                                    <a href="#" className="image"><img src="https://www.gaijinjapan.org/wp-content/uploads/2014/02/hitachi-seaside-park-kota-g.jpg" alt="" /></a>
                                    <h3>Hita<span className="italic">c</span>hi Seaside Park</h3>
                                    <p><span className="italic">C</span>e par<span className="italic">c</span> est magique en <span className="italic">c</span>ouleur. Ave<span className="italic">c</span> des variétés de fleurs différentes en fleuraison, il propose toujours des <span className="italic">c</span>ouleurs à voir et à revoir, toutes plus sublimes les unes que les autres. Il <span className="italic">c</span>ouvre près de 200 he<span className="italic">c</span>tares dans la préfe<span className="italic">c</span>ture d’Ibaraki.</p>
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
                                    <h3><span className="italic">C</span>haîne de montagnes Kii</h3>
                                    <p>Elle se situe sur 3 préfe<span className="italic">c</span>tures : Mie, Nara, Wakayama et est un site re<span className="italic">c</span>onnu et protégé par l’Unes<span className="italic"></span>o. Il y a même un <span className="italic">c</span>ir<span className="italic">c</span>uit de pèlerinage sur pla<span className="italic">c</span>e.</p>
                                    <ul className="actions">
                                        <li><a href="#" className="button">Plus</a></li>
                                    </ul>
                                </article>
                                <article>
                                    <a href="#" className="image"><img src="https://www.gaijinjapan.org/wp-content/uploads/2013/12/kyoto-tori.jpg" alt="" /></a>
                                    <h3>Fushimi Inaritaisha Shrine</h3>
                                    <p>1000 Torii rouge ardent avec des kanji d’un beau noir gravés dessus. Voi<span className="italic">c</span>i <span className="italic">c</span>e que vous pourrez voir au sein du Fushimi Inari. Un véritable tunnel de Torii, vraiment idéal pour prendre de belles photos.</p>
                                    <ul className="actions">
                                        <li><a href="#" className="button">Plus</a></li>
                                    </ul>
                                </article>
                            </div>
                        </section>
                    </div>
                </div>
                <div id="sidebar" className="sidebar" style={{ display: 'none' }}>
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
                                <li><a href="#" className="a">Homepage</a></li>
                                <li><a href="#" className="b">Generic</a></li>
                                <li><a href="#" className="c">Xavier Ansaidéy</a></li>
                                <li><a href="#" className="d">Etiam Dolore</a></li>
                                <li><a href="#" className="e">Adipiscing</a></li>
                                <li><a href="#" className="f" onClick={() => this.openModal()}>Maximus Cornulius</a></li>
                                <Modal
                                    isOpen={this.state.modalIsOpen}
                                    onAfterOpen={this.afterOpenModal}
                                    onRequestClose={this.closeModal}
                                    style={customStyles}
                                    contentLabel="Example Modal"
                                >
                                    <h2 ref={subtitle => this.subtitle = subtitle}>Quel été le 1 ère indice</h2>
                                    <div>Rentre le première indice pour passer au suivant (in english please)</div>
                                    <input type="text" name="indice" id="indice-1" />
                                    <p className="">{this.state.message}</p>
                                    <p className="modal-p">{this.state.indiceUn}</p>
                                    <button onClick={() => this.verificationUn()}>Valider</button>
                                    <button onClick={() => this.closeModal()}>Close</button>
                                </Modal>
                                <li><a href="#" className="g">Sapien Mauris</a></li>
                                <li><a href="#" className="h">Nico-La</a></li>
                            </ul>
                        </nav>
                        <section>
                            <header className="major">
                                <h2>Le Rébut</h2>
                            </header>
                            <div className="mini-posts">
                                <article>
                                    <a href="#" className="image"><img src="images/pic07.jpg" alt="" /></a>
                                    <p></p>
                                </article>
                                <article>
                                    <a href="#" className="image"><img src="images/pic08.jpg" alt="" /></a>
                                    <p>Jeu d'esprit qui consiste à exprimer des mots ou des phrases par des lettres, des mots, des chiffres, des dessins et des signes dont la lecture phonétique révèle ce que l'on veut faire entendre.</p>
                                </article>
                                <ul className="actions">
                                    <li><a href="#" className="button">More</a></li>
                                </ul>
                            </div>
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