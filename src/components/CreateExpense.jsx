import { useState } from "react";
import styled from "styled-components";

const CreateExpense = () => {
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

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   alert("항목이 추가되었습니다!");
  //   if (!date) {
  //     alert("날짜를 입력해주세요");
  //   }
  //   return;
  // };
  return (
    <>
      <Section className="input">
        <InputRow className="input-container">
          <InputGroupInline>
            <label htmlFor="date">날짜</label>
            <input
              type="text"
              id="date"
              value={date}
              onChange={handleChangeDate}
              placeholder="YYYY-MM-DD"
            />
          </InputGroupInline>

          <InputGroupInline>
            <label htmlFor="item">항목</label>
            <input
              type="text"
              id="item"
              value={item}
              onChange={handleChangeItem}
              placeholder="지출 항목"
            />
          </InputGroupInline>

          <InputGroupInline>
            <label htmlFor="amount">금액</label>
            <input
              type="number"
              id="amount"
              value={price}
              onChange={handleChangePrice}
              placeholder="지출 금액"
            />
          </InputGroupInline>

          <InputGroupInline>
            <label htmlFor="description">내용</label>
            <input
              type="text"
              id="description"
              value={content}
              onChange={handleChangeContent}
              placeholder="지출 내용"
            />
          </InputGroupInline>
          <AddBtn type="onsubmit">저장</AddBtn>
        </InputRow>
      </Section>
    </>
  );
};

export default CreateExpense;

const Section = styled.section`
  /* 배경색 */
  background-color: #ffffff;
  /* 둥근 모서리 */
  border-radius: 16px;
  /* 내부 공간 */
  padding: 20px;
`;

const InputRow = styled.div`
  /* 가로 정렬 */
  display: flex;
  /* 화면이 줄어들 때 접힘 */
  flex-wrap: wrap;
  /* 간격 */
  gap: 10px;
  /* 교차축 정렬 */
  align-items: flex-end;
`;

const InputGroupInline = styled.div`
  /* 가로 정렬 */
  display: flex;
  /* 세로 정렬로 변경 */
  flex-direction: column;
  /* 좌우로 쫙 늘리기 */
  flex: 1;
  /* 최소 너비 */
  min-width: 120px;
  /* 라벨 */
  label {
    /* 아래 여백 */
    margin-bottom: 5px;
    /* 폰트 크기 */
    font-size: 14px;
    /* 폰트 색상 */
    color: #333;
    /* 왼쪽 정렬 */
    text-align: left;
  }
  input {
    /* 내부 공간 */
    padding: 8px;
    /* 테두리 */
    border: 1px solid #ddd;
    /* 둥근 모서리 */
    border-radius: 4px;
    /* 폰트 크기 */
    font-size: 14px;
  }
`;

const AddBtn = styled.button`
  /* 내부 공간 */
  padding: 8px 20px;
  /* 높이 */
  height: 34px;
  /* 위쪽 여백 */
  margin-top: 10px;
  /* 배경색 */
  background-color: #007bff;
  /* 폰트 색상 */
  color: white;
  /* 테두리 */
  border: none;
  /* 둥근 모서리 */
  border-radius: 4px;
  /* 폰트 크기 */
  font-size: 14px;
  /* 포인터 표시 */
  cursor: pointer;
  /* 호버 시 애니메이션 효과 */
  transition: background-color 0.2s ease-in-out;
  &:hover {
    /* 배경색 */
    background-color: #0056b3;
  }
`;
