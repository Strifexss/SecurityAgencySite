import Cabecalho from "./Cabecalho";
import Business from "./Business";
import TrustedLiders from "./TrustedLiders";
import PersonalSecurity from "./PersonalSecurity";
import BusinessChose from "./BusinessChose";
import WhatWeDo from "./WhatWeDo";
import HowItWorks from "./HowItWorks";
function App() {
  return (
    <div>
      <Business/>
      <TrustedLiders/>
      <PersonalSecurity/>
      <BusinessChose/>
      <WhatWeDo/>
      <HowItWorks/>
      <Cabecalho/>
    </div>
  );
}

export default App;
