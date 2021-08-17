import { UserProvider } from "./UserProvider";
import { HabitsProvider } from "./HabitsProvider";
import { GroupsProvider } from "./GroupsProvider";

const Providers = ({ children }) => {
  return (
  <UserProvider>
    <HabitsProvider>
      <GroupsProvider>
        {children}
      </GroupsProvider>
    </HabitsProvider>
  </UserProvider>
  )
};

export default Providers;
