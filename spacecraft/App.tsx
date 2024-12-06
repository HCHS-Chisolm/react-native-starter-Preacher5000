

import React from "react";
import  LoginScreen  from "./src/screens/LoginScreen";
import { TermsScreen } from "./src/screens/TermsScreen";
import { PaperProvider } from "react-native-paper";
import { StarshipFeedScreen } from "./src/screens/StarshipFeedScreen";

function App() {
  return (
    <PaperProvider>
      {/* <LoginScreen /> */}
      <StarshipFeedScreen />
      {/*<TermsScreen /> */}
    </PaperProvider>
  );
};

// always export default App otherwise Expo is not happy
export default App;