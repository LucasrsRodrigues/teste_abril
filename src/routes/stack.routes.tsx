import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Dashboard } from "../screens/Dashboard";
import { WebView } from "../screens/WebView";

const { Navigator, Screen } = createNativeStackNavigator();

function StackRoute() {
  return (
    <Navigator>
      <Screen name="Dashboard" component={Dashboard}
        options={{
          headerShown: false
        }}
      />
      <Screen name="WebView" component={WebView} />
    </Navigator>
  );
}

export default StackRoute;