import Cabecalho from "./Cabecalho";
import Business from "./Business";
import TrustedLiders from "./TrustedLiders";
import PersonalSecurity from "./PersonalSecurity";
import BusinessChose from "./BusinessChose";
import WhatWeDo from "./WhatWeDo";
import HowItWorks from "./HowItWorks";
import CabecalhoMobile from "./CabecalhoMobile";

function App() {
  return (
    <div>
      <Business/>
      <BusinessChose/>
      <PersonalSecurity/>
      <HowItWorks/>
      <WhatWeDo/>
      <TrustedLiders/>
      <Cabecalho/>
      <CabecalhoMobile/>
    </div>
  );
}

export default App;
