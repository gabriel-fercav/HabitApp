import { UserProvider } from "./UserProvider";
import { HabitsProvider } from "./HabitsProvider";
import { GroupsProvider } from "./GroupsProvider";
import { GoalsProvider } from "./GoalsProvider";
import { ActivitiesProvider } from "./ActivitiesProvider";
const Providers = ({ children }) => {
  return (
  <UserProvider>
    <HabitsProvider>
      <GroupsProvider>
        <GoalsProvider>
          <ActivitiesProvider>
            {children}
          </ActivitiesProvider>
        </GoalsProvider>
      </GroupsProvider>
    </HabitsProvider>
  </UserProvider>
  )
};

export default Providers;
