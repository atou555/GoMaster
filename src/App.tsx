import "./App.css";

function App() {
  return (
    <>
      <header>
        <div className="header-content">
          <div className="logo">GoMaster</div>
          <nav>
            <ul>
              <li>
                <a href="#features">Fonctionnalités</a>
              </li>
              <li>
                <a href="#pricing">Tarifs</a>
              </li>
              <li>
                <a href="#about">À propos</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="language-toggle">
          <a href="https://gomaster.com/fr">FR</a>
          <a href="https://gomaster.com/en">EN</a>
        </div>
      </header>
      <main>
        <section className="hero">
          <h1>Élevez votre jeu de Go à de nouveaux sommets</h1>
          <p>
            Rejoignez des milliers de joueurs du monde entier pour maîtriser
            l'art ancien du Go
          </p>
          <a href="#signup" className="cta-button">
            Commencez votre voyage
          </a>
        </section>
        <section className="features" id="features">
          <div className="feature">
            <h3>Analyse par IA</h3>
            <p>
              Notre IA de pointe fournit une analyse approfondie de vos parties,
              identifiant les forces et les domaines à améliorer.
            </p>
          </div>
          <div className="feature">
            <h3>Tutoriels interactifs</h3>
            <p>
              Apprenez grâce à des leçons interactives conçues par des
              professionnels du Go, couvrant la tactique, la stratégie et la
              théorie du jeu.
            </p>
          </div>
          <div className="feature">
            <h3>Communauté mondiale</h3>
            <p>
              Connectez-vous avec des passionnés de Go du monde entier,
              participez à des tournois et rejoignez des groupes d'étude.
            </p>
          </div>
          <div className="feature">
            <h3>Entraînement personnalisé</h3>
            <p>
              Recevez des problèmes et des exercices pratiques personnalisés,
              adaptés à votre niveau de compétence et à vos objectifs
              d'apprentissage.
            </p>
          </div>
        </section>
      </main>
      <footer>
        <p>© 2023 GoMaster. Tous droits réservés.</p>
        <p>
          <a href="https://gomaster.com/privacy">
            Politique de confidentialité
          </a>{" "}
          | <a href="https://gomaster.com/terms">Conditions d'utilisation</a>
        </p>
      </footer>
    </>
  );
}

export default App;
