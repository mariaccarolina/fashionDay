

export default function Linktree() {
  return (
    <main className="container">
      <section>
        <img className="logo" src="./day.png" alt="" />
        <p className="bordao">A loja mais tombadora da cidade!</p>
        <nav>
          <ul>
            <li>
              <a href="https://wa.me/5581987901785">
                <img className="whats" src="./whats.png" alt="Whats" />
                <p>Loja Ribeirão</p>
              </a>
            </li>
            <li>
              <a href="https://wa.me/5581987918380">
                <img className="whats" src="./whats.png" alt="Whats" />
                <p>Loja Escada</p>
              </a>
            </li>
            <li>
              <a href="https://wa.me/5581985348454">
                <img className="whats" src="./whats.png" alt="Whats" />
                <p>Loja Palmares</p>
              </a>
            </li>
            <li>
              <a href="https://wa.me/5581986950572">
                <img className="whats" src="./whats.png" alt="Whats" />
                <p>Loja Cabo de Santo Agostinho</p>
              </a>
            </li>
          </ul>
        </nav>
        <div className="container2">
          <img className="insta" src="./insta.png" alt="" />
          <p>@fashion.day</p>
        </div>
      </section>
    </main>
  );
}
