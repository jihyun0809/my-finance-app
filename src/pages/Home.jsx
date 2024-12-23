import styled from "styled-components";
import MonthNavigation from "../components/MonthNavigation";
import CreateExpense from "../components/CreateExpense";
import ExpenseList from "../components/ExpenseList";

const Home = () => {
  return (
    <>
      <Wrapper className="Wrapper">
        <MonthNavigation />
        <CreateExpense />
        <ExpenseList />
      </Wrapper>
    </>
  );
};

export default Home;

const Wrapper = styled.div`
  max-width: 800px;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 0 auto;
`;
