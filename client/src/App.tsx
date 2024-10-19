import AppRouter from "./AppRouter";
import AuthProvider from "./modules/auth/providers/AuthProvider";

function App() {
  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  );
}

export default App;
