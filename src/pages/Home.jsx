import { useState } from "react";
import styled from "styled-components";

const Home = () => {
  const [date, setDate] = useState("");
  const [item, setItem] = useState("");
  const [price, setPrice] = useState(0);
  const [content, setContent] = useState("");
  // const [expenseList, setExpenseList] = useState([]);

  const handleChangeDate = (e) => {
    setDate(e.target.value);
  };
  const handleChangeItem = (e) => {
    setItem(e.target.value);
  };
  const handleChangePrice = (e) => {
    setPrice(e.target.value);
  };
  const handleChangeContent = (e) => {
    setContent(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("항목이 추가되었습니다!");
    if(!date){
      alert("날짜를 입력해주세요")
    }return

  //   const newData={
  //     date:
  //     itme:
  //     price:
  //     content:
  // };



  }
  return (
    <>
      <Wrapper className="Wrapper">
        <Section className="month">
          <MonthContainer>
            <MonthBtn>1월</MonthBtn>
            <MonthBtn>2월</MonthBtn>
            <MonthBtn>3월</MonthBtn>
            <MonthBtn>4월</MonthBtn>
            <MonthBtn>5월</MonthBtn>
            <MonthBtn>6월</MonthBtn>
            <MonthBtn>7월</MonthBtn>
            <MonthBtn>8월</MonthBtn>
            <MonthBtn>9월</MonthBtn>
            <MonthBtn>10월</MonthBtn>
            <MonthBtn>11월</MonthBtn>
            <MonthBtn>12월</MonthBtn>
          </MonthContainer>
        </Section>
        <Section className="input">
          <InputContainer className="input-container">
            <form onSubmit={handleSubmit}>
              <label>
                날짜
                <input type="date" value={date} onChange={handleChangeDate} />
              </label>
              <label>
                항목
                <input
                  type="text"
                  value={item}
                  onChange={handleChangeItem}
                  placeholder="지출 항목"
                />
              </label>
              <label>
                금액
                <input
                  type="number"
                  value={price}
                  onChange={handleChangePrice}
                  placeholder="지출 금액"
                />
              </label>
              <label>
                내용
                <input
                  type="text"
                  value={content}
                  onChange={handleChangeContent}
                  placeholder="지출 내용"
                />
              </label>
              <button type="onsubmit">저장</button>
            </form>
          </InputContainer>
        </Section>
        <Section className="item">
          <ItemContainer>
            <h4>2024-01-11 도서 자바스크립트 딥다이브 20000원</h4>
            <h4>2024-01-01 도서 마음의 숙제 40000원</h4>
            <h4>2024-12-25 크리스마스 케이크 12000원</h4>
          </ItemContainer>
        </Section>
      </Wrapper>
    </>
  );
};

export default Home;

const MonthContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
`;
const MonthBtn = styled.div`
  text-align: center;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  display: flex;
  height: 50px;
  padding: 10px;
  width: 90px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  color: rgb(255, 255, 255);
  border-radius: 10px;
  border: none;
  cursor: pointer;
  background: rgb(46, 196, 182);
`;
const InputContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  align-items: flex-end;
`;
const ItemContainer = styled.div``;
const Section = styled.div`
  background-color: white;
  border-radius: 16px;
  padding: 20px;
`;
const Wrapper = styled.div`
  max-width: 800px;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
