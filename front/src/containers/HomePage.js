import React from 'react';
import Navbar from '../components/Navbar';
import '../css/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const paperStyle = {
  minHeight: 620,
  width: 490,
  height: '80vh',
  margin: '10vh auto',
};

const HomePageContainer = () => {
  return (
    <div>
      <Navbar/>
    <section class="page-section" id="descriptif">
        <div class="container" style={{paddingTop: '1rem'}}>
            <div class="text-center">
                <h2 class="section-heading text-uppercase">UN CONCOURS DE RECHERCHE OPÉRATIONNELLE POUR LES ÉTUDIANTS</h2>
                <h3 class="section-subheading text-muted" style={{fontSize: '1.5rem'}}>À l'École des Ponts ParisTech</h3>
            </div>
            <div class="row text-justify">
                <p> Participez à la sixième édition du KIRO, un concours organisé par le Club Informatique de l'École des Ponts, 
                    en partenariat avec l'entreprise PELICO, la Fondation des Ponts et le laboratoire CERMICS. Il s'agit d'un concours ouvert aux étudiants 
                    intéressés par la résolution effective d'un problème de recherche opérationnelle.</p>
                <p> En quelques mots, le KIRO c'est : </p>
                <ul style={{paddingLeft: '3rem'}}>
                    <li>6 heures d'épreuve par équipes de 3</li>
                    <li>L'occasion de réfléchir à une véritable problématique d'entreprise</li>
                    <li>L'opportunité de gagner des prix d'un montant total de <strong>3000 &euro;</strong></li>
                </ul>
            </div>
        </div>
    </section>
    <section class="page-section bg-light" id="partenaires">
  <div class="container">
    <div class="text-center" style={{borderRadius: '10px', padding:'1rem', backgroundColor: 'rgba(73, 73, 73, 0.356)'}}>
      <h2 class="text-white text-uppercase" style={{fontSize: '2.7em'}}>Une sixième édition</h2>
      <span class="text-white" style={{fontSize: '1.7em'}}>Sponsorisée par PELICO, la Fondation des Ponts et le CERMICS</span>
    </div>
    <div class="row h-100">
      <div class="col-lg-12" style={{marginTop: '2rem'}}>
        <div class="box">
          <a href="https://www.pelico.ai">
            <img src="assets/img/pelico.svg" width= "60%"/>
          </a>
          <p style={{marginTop: '15px'}}>La chaîne d'approvisionnement et la production sont devenues plus complexes que jamais, 
                            avec une demande volatile, des chaînes d'approvisionnement fragmentées et des produits de plus en plus complexes. 
                            Le contexte opérationnel change plus vite que la capacité des équipes à planifier. Cela conduit à une lutte constante 
                            contre les incendies et à des perturbations de la chaîne d'approvisionnement qui mettent en péril les livraisons 
                            et les ventes en temps voulu, tout en provoquant des dépassements de coûts.
                            <br/><br/>
                            <strong>Pelico</strong> offre un logiciel de management des opérations qui permet aux équipes opérationnelles en usine d'obtenir des 
                            résultats prévisibles en anticipant les blocages de production et en agissant rapidement pour les résoudre.
              </p>
            </div>
        </div>
      </div>
                <div class="row h-100">
                    <div class="col-lg-6" style={{marginTop: '2rem'}}>
                        <div class="box">
                            <a href="https://www.fondationdesponts.fr">
                                <img src="assets/img/fdp.png" height="120px"/>
                            </a>
                            <p style={{marginTop: '15px'}}>Reconnue d’utilité publique, la <strong>Fondation des Ponts</strong> est au service du 
                            développement de l’École et de ses élèves en finançant toute une série de projets, sur des thématiques allant du
                            soutien de la recherche et de l'innovation pédagogique à l'accompagnement des étudiants, en passant par la mise
                            à disposition d'équipements pour l'École et la valorisation de son patrimoine historique et scientifique.</p>
                        </div>
                    </div>
                    <div class="col-lg-6" style={{marginTop: '2rem'}}>
                        <div class="box">
                            <a href="https://cermics.enpc.fr">
                                <img src="assets/img/cermics.png" height="120px"/>
                            </a>
                            <p style={{marginTop: '15px'}}>Le <strong>CERMICS</strong> (Centre d'Enseignement et de Recherche
                                en Mathématiques et Calcul Scientifique) est le laboratoire de recherche en mathématiques
                                appliquées de l'École des Ponts ParisTech. Ses principaux domaines de recherche sont les
                                Probabilités Appliquées, La Modélisation, l'Analyse et la Simulation et L'Optimisation des
                                Systèmes.</p>
                        </div>
                    </div>
          </div>
          </div>

    </section>  
    <section class="page-section" id="annales">
        <div class="container">
            <div class="text-center">
                <h2 class="section-heading text-uppercase">Les anciens sujets</h2>
                <h3 class="section-subheading text-muted">Les sujets des années précédentes</h3>
            </div>
            <ul class="list-centered">
                <li> <a href="sujets/sujet1.pdf" target="_blank">Session 2017-2018, en partenariat avec Air France</a> et les <a href="sujets/sujet1.zip" target="_blank">instances</a></li>
                <li> <a href="sujets/sujet2.pdf" target="_blank">Session 2018-2019, en partenariat avec LocalSolver</a> et les <a href="sujets/sujet2.zip" target="_blank">instances</a></li>
                <li> <a href="sujets/sujet3.pdf" target="_blank">Session 2019-2020, en partenariat avec Renault</a> et les <a href="sujets/sujet3.zip" target="_blank">instances</a></li>
		            <li> <a href="sujets/sujet4.pdf" target="_blank">Session 2020-2021, en partenariat avec la SNCF</a> et les <a href="sujets/sujet4.zip" target="_blank">instances</a></li>
                <li> <a href="sujets/sujet5_v2.pdf" target="_blank">Session 2021-2022, en partenariat avec AirLiquide</a> et les <a href="sujets/sujet5_v2.zip" target="_blank">instances</a></li>
            </ul>
        </div>
    </section>
    <section class="page-section" id="planning" style={{borderTop: '1px solid rgba(0, 0, 0, 0.15)'}}>
        <div class="container">
            <div class="text-center">
                <h2 class="section-heading text-uppercase">Le Planning</h2>
                <h3 class="section-subheading-section text-muted">Date limite des inscriptions</h3>
                <p>Les inscriptions se termineront le mercredi 23 novembre à 23h59. Aucune inscription ne sera acceptée passé ce delai.</p>
                <h3 class="section-subheading-section text-muted">La session</h3>
                <p>Cette sixième session se déroulera au choix au sein de l'École des Ponts ParisTech à Champs-sur-Marne ou à distance sur Discord le jeudi 24 novembre 2022.</p>
                <div class="row h-100">
                    <div class="col-lg-2" style={{marginTop: '1rem'}}>
                      <div class="box"> <span><strong>13h15</strong></span>
                        <p> Accueil des participant et présentation du sujet par l'entreprise. </p>
                      </div>
                    </div>
                    <div class="col-lg-2" style={{marginTop: '1rem'}}>
                      <div class="box"> <span><strong>14h</strong></span>
                        <p> Début de l'épreuve. </p>
                      </div>
                    </div>
                    <div class="col-lg-3" style={{marginTop: '1rem'}}>
                      <div class="box"> <span><strong>19h30</strong></span>
                        <p> Dernière demie-heure, l'accès au palmarès des scores est figé. </p>
                      </div>
                    </div>
                    <div class="col-lg-2" style={{marginTop: '1rem'}}>
                      <div class="box"> <span><strong>20h</strong></span>
                        <p> Fin de l'épreuve, l'envoi des scores est bloqué. </p>
                      </div>
                    </div>
                    <div class="col-lg-3" style={{marginTop: '1rem'}}>
                      <div class="box"> <span><strong>20h30</strong></span>
                        <p>Annonce des résultats, remise des prix à l'École des Ponts et buffet convivial.</p>
                      </div>
                    </div>
                </div>
                <h3 class="section-subheading-section text-muted" id="reglement">Le règlement</h3>
                <div class="row h-100">
                    <div class="col-lg-4">
                      <div class="box-invisible">
                        <span><strong>Article 1</strong></span>
                        <p> L'inscription au concours est gratuite <br/> Aucun frais n'est pris en charge par le KI. </p>
                      </div>
                    </div>
                    <div class="col-lg-4">
                      <div class="box-invisible">
                        <span><strong>Article 2</strong></span>
                        <p> Le concours est ouvert à tous mais les lots sont réservés aux équipes remplissant les conditions évoquées plus bas. </p>
                      </div>
                    </div>
                    <div class="col-lg-4">
                      <div class="box-invisible">
                        <span><strong>Article 3</strong></span>
                        <p>La participation se fait par équipes de trois candidats. La présence physique des candidats est recommandée mais pas obligatoire, le concours pourra se faire en ligne sur Discord.</p>
                      </div>
                    </div>
                </div>
                <div class="row h-100" style={{marginTop: '20px', marginBottom: '20px'}}>
                    <div class="col-lg-4">
                      <div class="box-invisible">
                        <span><strong>Article 4</strong></span>
                        <p> Les équipes sont évaluées par un algorithme associant automatiquement aux solutions proposées un score en suivant les règles spécifiées dans le sujet délivré en début d'épreuve. </p>
                      </div>
                    </div>
                    <div class="col-lg-4">
                      <div class="box-invisible">
                        <span><strong>Article 5</strong></span>
                        <p> L'équipe gagnante est annoncée suivant les résultats automatiques, mais cette décision n'est
                          validée qu'après vérification du code de l'équipe. </p>
                      </div>
                    </div>
              
                    <div class="col-lg-4">
                      <div class="box-invisible">
                        <span><strong>Article 6</strong></span>
                        <p>En acceptant le règlement, les candidats déclarent accepter l'enregistrement de leur image dont la diffusion et l'exploitation pourront se faire par le biais de sites Internet, réseaux sociaux, presse, films et photothèque.</p>
                      </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="page-section" id="inscription" style={{borderTop: '1px solid rgba(0, 0, 0, 0.15)'}}>
        <div class="container">
            <div class="text-center section">
                <p class="byline">Chaque équipe devra fournir au cours de son inscription :</p>
                <ul class="list-centered">
                    <li> Les noms complets de chaque candidat.</li>
                    <li> Une adresse électronique pour confirmer l'inscription.</li>
                </ul>
                <br/>
                <p> 
                    Ces données sont nécessaires à la bonne organisation du concours. Les participants peuvent exercer les
                    droits prévus par la loi Informatique et Libertés du 6 janvier 1978 modifiée en écrivant à 
                    <a href="mailto:kiro.enpc@gmail.com">kiro.enpc@gmail.com</a>. 
                </p>
            </div>
            
            <div class="text-center section" style={{borderTop: '1px solid rgba(0, 0, 0, 0.15)'}}>
                <p class="byline">Le jour de l'événement : </p>
                <ul class="list-centered">
                    <li> Vous devez apporter votre ordinateur, c'est avec celui-ci que vous allez envoyer vos solutions.</li>
                    <li> Tous les langages de programmation et bibliothèques sont autorisés.</li>
                    <li> Les instances et les solutions seront au format Json. Il est donc recommandé aux participants d'apprendre à utiliser les librairies correspondantes pour le language qu'ils souhaitent utiliser.</li>
                    <li> L'équipe gagnante devra impérativement fournir l'algorithme qui a permis d'établir cette solution,
                        même si celle-ci est aléatoire.</li>
                </ul>
                <br/>
                <p> 
                    Le non-respect de l'une des conditions énoncées précédemment entrainera une disqualification automatique
                    sans recours possible. Le KI se réserve le droit de disqualifier sans réserve et sans recours possible
                    les équipes n'ayant pas des conduites respectueuses envers les organisateurs ou les autres candidats.
                </p>
            </div>
            
            <div class="text-center section" style={{borderTop: '1px solid rgba(0, 0, 0, 0.15)'}}>
                <p class="byline">Les lots</p>

                <p>Voici les prix remis aux trois premières équipes étudiantes, à partager entre les membres du groupe:
                <ul class="list-centered">
                    <li>1er : 1500€</li>
                    <li>2ème : 1000 €</li>
                    <li>3ème : 500 €</li>
                </ul>
                En plus de ces prix, la 1ère équipe composée uniquement de <strong>1A</strong> de l'École des Ponts gagnera un iPad par personne.
                </p>
                <button class="btn btn-info" onclick="self.location.href='inscription.php'">S'inscrire</button>
            </div>
            
            <div class="text-center section" style={{borderTop: '1px solid rgba(0, 0, 0, 0.15)'}}>
                <p class="byline" id="acces">Plan d'accès</p>
                <p>Plusieurs options sont disponibles pour passer le KIRO, en <strong>présentiel ou distanciel</strong>.<br/> L'édition présentielle se déroulera dans les locaux de l'Ecole des Ponts.</p>
                <br/>
                <p><strong>Cité Descartes, 6-8 Avenue Blaise Pascal, 77420 Champs-sur-Marne<br/>
                    Bâtiment Carnot, amphithéâtre Cauchy <br/>
                </strong></p>
                <br/>
                <p>Pour ceux passant l’épreuve au format distanciel, le lien du discord vous sera envoyé après inscription.
                La remise des prix aura lieu sur place.
                </p>
            </div>
        </div>
    </section>
    </div>
  );
};



export default HomePageContainer;