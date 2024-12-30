import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import supabase from "../utils/supabase"; // Supabase 클라이언트

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 16px;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;

  label {
    margin-bottom: 5px;
    font-size: 14px;
    color: #333;
    text-align: left;
  }

  input {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 14px;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: ${(props) => (props.danger ? "#ff4d4d" : "#007bff")};
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: ${(props) => (props.danger ? "#cc0000" : "#0056b3")};
  }
`;

const BackButton = styled(Button)`
  background-color: #6c757d;

  &:hover {
    background-color: #5a6268;
  }
`;

export default function Detail() {
  const navigate = useNavigate();
  const { id } = useParams(); //URL에서 id값을 추출!
  const [formData, setFormData] = useState({
    date: "",
    item: "",
    amount: "",
    description: "",
  });

  // 데이터 가져오기
  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase
        .from("expenses")
        .select("*")
        .eq("id", id)
        .single(); //데이터 하나만!!

      if (data) {
        setFormData(data);
      } else {
        alert("데이터를 불러오는 데 실패했습니다.");
        navigate("/");
      }
    };
    fetchData();
  }, [id, navigate]);

  // 입력값 업데이트
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  // 수정하기
  const handleEdit = async () => {
    const { error } = await supabase
      .from("expenses")
      .update(formData)
      .eq("id", id);

    if (error) {
      alert("수정 실패");
    } else {
      alert("수정 완료");
      navigate("/");
    }
  };

  // 삭제하기
  const handleDelete = async () => {
    const { error } = await supabase.from("expenses").delete().eq("id", id);
    if (error) {
      alert("삭제 실패");
    } else {
      alert("삭제 완료");
      navigate("/");
    }
  };

  return (
    <Container>
      <InputGroup>
        <label htmlFor="date">날짜</label>
        <input
          type="text"
          id="date"
          value={formData.date}
          onChange={handleInputChange}
          placeholder="YYYY-MM-DD"
        />
      </InputGroup>
      <InputGroup>
        <label htmlFor="item">항목</label>
        <input
          type="text"
          id="item"
          value={formData.item}
          onChange={handleInputChange}
          placeholder="지출 항목"
        />
      </InputGroup>
      <InputGroup>
        <label htmlFor="amount">금액</label>
        <input
          type="number"
          id="amount"
          value={formData.amount}
          onChange={handleInputChange}
          placeholder="지출 금액"
        />
      </InputGroup>
      <InputGroup>
        <label htmlFor="description">내용</label>
        <input
          type="text"
          id="description"
          value={formData.description}
          onChange={handleInputChange}
          placeholder="지출 내용"
        />
      </InputGroup>
      <ButtonGroup>
        <Button onClick={handleEdit}>수정</Button>
        <Button danger onClick={handleDelete}>
          삭제
        </Button>
        <BackButton onClick={() => navigate("/")}>뒤로 가기</BackButton>
      </ButtonGroup>
    </Container>
  );
}
