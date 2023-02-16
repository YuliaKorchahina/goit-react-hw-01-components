import { Profile } from './Profile/Profile';
import user from './Profile/user.json';
import { Statistics } from './Statistics/Statistics';
// import { Section } from './Statistics/Statistics';
import data from './Statistics/data.json';

export const App = () => {
  return (
    <div>
      <Profile items={user} />
      <>
        <Statistics title="Uploadstats" stats={data} />
        {/* <Statistics stats={data} /> */}
      </>
    </div>
  );
};
