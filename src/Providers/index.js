import { UserProvider } from "./UserProvider";
import { HabitsProvider } from "./HabitsProvider";

const Providers = ({ children }) => {
  return (
  <UserProvider>
    <HabitsProvider>
      {children}
    </HabitsProvider>
  </UserProvider>
  )
};

export default Providers;
