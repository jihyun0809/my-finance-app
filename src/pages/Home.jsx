import styled from "styled-components";
import MonthNavigation from "../components/MonthNavigation";
import CreateExpense from "../components/CreateExpense";
import ExpenseList from "../components/ExpenseList";
import { useEffect, useState } from "react";
import supabase from "../utils/supabase";
import getMonth from "../utils/getMonth";

const Home = () => {
  const [expenses, setExpenses] = useState([]);
  const [month, setMonth] = useState(1);

  useEffect(() => {
    const fetchExpenses = async () => {
      let { data, error } = await supabase.from("expenses").select("*");
      console.log(data);
      if (error) {
        return alert("에러발생!", error);
      }
      setExpenses(data);
    };
    fetchExpenses();
  }, []);

  //필터
  const selectMonth = expenses.filter(
    (expense) => getMonth(expense.date) === month
  );

  return (
    <>
      <Wrapper className="Wrapper">
        <MonthNavigation setMonth={setMonth} selectMonth={selectMonth} />
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
