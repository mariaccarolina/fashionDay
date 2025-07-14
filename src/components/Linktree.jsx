

export default function Linktree() {
  return (
    <main className="container">
      <section>
        <img className="logo" src="./day.png" alt="" />
        <p className="bordao">A loja mais tombadora da cidade!</p>
        <nav>
          <ul>
            <li>
              <a href="">
                <img className="whats" src="./whats.png" alt="" />
                <p>Loja Ribeirão</p>
              </a></li>
              <li>
                <a href="">
                <img className="whats" src="./whats.png" alt="" />
                <p>Loja Escada</p>
              </a>
              </li>
              <li>
                <a href="">
                <img className="whats" src="./whats.png" alt="" />
                <p>Loja Palmares</p>
              </a>
              </li>
              <li>
                 <a href="">
                <img className="whats" src="./whats.png" alt="" />
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
