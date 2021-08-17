import { UserProvider } from "./UserProvider";
import { HabitsProvider } from "./HabitsProvider";
import { GroupsProvider } from "./GroupsProvider";
import { GoalsProvider } from "./GoalsProvider";
const Providers = ({ children }) => {
  return (
  <UserProvider>
    <HabitsProvider>
      <GroupsProvider>
        <GoalsProvider>
          {children}
        </GoalsProvider>
      </GroupsProvider>
    </HabitsProvider>
  </UserProvider>
  )
};

export default Providers;
