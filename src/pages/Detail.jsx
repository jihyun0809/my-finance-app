import styled from "styled-components";

const Detail = () => {
  return (
    <Wrapper>
      <label>
        날짜:
        <input />
      </label>
      <label>
        날짜:
        <input />
      </label>
      <label>
        날짜:
        <input />
      </label>
      <label>
        날짜:
        <input />
      </label>
      <button>수정</button>
      <button>삭제</button>
      <button>뒤로가기</button>
    </Wrapper>
  );
};

export default Detail;

const Wrapper = styled.div`
  max-width: 800px;
  margin: 0px auto;
  padding: 20px;
  background-color: rgb(255, 255, 255);
  border-radius: 16px;
`;
