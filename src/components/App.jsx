import { Profile } from './Profile/Profile';
import user from './Profile/user.json';
import { Statistics } from './Statistics/Statistics';
import data from './Statistics/data.json';
import { FriendList } from './FriendList/FriendList';
import friends from './FriendList/friends.json';
import { TransactionHistory } from './Bank/Bank';
import transactions from './Bank/transactions.json';
import { GlobalStyle } from './GlobalStyle';
import { Container } from './Layout.styled';

export const App = () => {
  return (
    <Container>
      <GlobalStyle />
      <Profile items={user} />
      <Statistics title="Uploadstats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </Container>
  );
};
