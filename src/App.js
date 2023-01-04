import 'normalize.css';
import Layout from "./components/Layout";
import Hero from "./components/Hero";

function App(props) {
  return (
    <>
      <Layout>
        <Hero title="Monty Python and the Holy Grail"
              background="https://occ-0-3933-116.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABceyNrmiu91K-cgOCmeYq641Pvgo21k7Zv-SL2qosZRZTgOs7FDVLClJBqJAEG5jdsJukKnpwQ13GtFvt_YzJvlHeWSkbxYXKTJD.webp?r=1c1"
              logo="https://occ-0-3933-116.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABcahcpTA_HeLwSrpRjIvXS-s-plhyV6kdt0jCiJ6EbSKOeNIrENDiWZAishKaE-4dnH0V5lJh3_AkOZGpRneEzBVmaH-n6Pz28fsnhXBhaU.webp?r=749"
              synopsis="The Monty Python comedy clan skewers King Arthur and his Knights of the Round Table as they quest far and wide for the Holy Grail."
        />
      </Layout>
    </>
  );
}

export default App;
