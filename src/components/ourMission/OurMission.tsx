import ArtImg from '/logo.jpg'

export default function OurMission() {
  return (
    <section id="about">
      <h2 className="text-3xl mb-6 mt-8">
        Nossa missão ad Gentes conduzida pela força do Espírito Santo
      </h2>

      <div>
        <h3 className="text-2xl mb-3">Onde ocorrerá</h3>
        <p className="leading-8 mb-5  text-lg">
          Esse ano, teremos a alegria de viver na cidade de Belo Jardim - PE, a{' '}
          <strong>Campanha Missionária</strong> com a{' '}
          <strong>Paróquia de São Pedro e São Paulo Apóstolos</strong>.
        </p>

        <h3 className="text-2xl mb-3">Nosso Lema</h3>
        <p className="leading-8 mb-5 text-lg">
          <strong>Ide convidai a todos para o banquete (Mt 22,9)</strong> é o
          lema da Campanha missionária de 2024, que nos ajudará a aprofundar a
          mensagem do Papa Francisco para o Dia Mundial das Missões.
        </p>

        <h3 className="text-2xl mb-3">Nossa Arte</h3>
        <p className="leading-8 mb-3 text-lg">
          A arte da Campanha Missionária nos ajuda a contemplar a beleza do
          convite que{' '}
          <strong>cada discípulo missionário recebe de Jesus</strong>, de
          convidar todos para o banquete do reino.
        </p>
        <img
          src={ArtImg}
          className="rounded-xl mx-auto lg:max-w-[80%] "
          alt=""
        />
        <div>
          <h4 className="text-2xl mt-3 mb-3">Entendendo nossa arte</h4>
          <ul>
            <li className="leading-8 mb-3 text-lg">
              <strong>Banquete do Reino:</strong> Na construção visual desta
              Arte, temos a imagem do banquete do Reino ao centro, este
              representa a comunhão universal que o próprio Deus deseja realizar
              com cada ser humano.
            </li>
            <li className="leading-8 mb-3 text-lg">
              <strong>A Mesa:</strong> A mesa é grande, mas não está
              completamente ocupada,{' '}
              <strong>pois sempre é possível acolher mais alguém</strong>.
            </li>
            <li className="leading-8 mb-3 text-lg">
              <strong>O Pão e o Peixe:</strong> O pão e peixe, fazem referência
              clara à pessoa de Cristo, como aquele que gera a comunhão e se
              entrega para nos permitir fazer parte da festa. Além disso, o pão
              e o peixe recordam a dimensão fratena do milagre da comunhão.
            </li>
            <li className="leading-8 mb-3 text-lg">
              <strong>O Pai, o Filho e o Espírito Santo:</strong> O fundo
              dourado (Pai), a cruz estilizada (Filho) e o vento em movimento
              (Espírito) representa a força do Espiríto que convida a sermos no
              mundo testemunhas de Cristo, anunciando suas palavras tornando
              presentes os sinais do Reino, nos empenhando para construir um
              mundo que seja economicamente humanizado, politicamente
              democrático, socialmente justo e ecologicamente sustentável.
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
