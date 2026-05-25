import styled from "styled-components";

export const Wrapper = styled.section`
  width: 100%;
  padding: 80px 5%;
  background: #f8f8f8;
`;

export const TopText = styled.div`
  text-align: center;
  margin-bottom: 50px;

  span {
    font-size: 14px;
    color: #777;
    letter-spacing: 1px;
  }

  h1 {
    font-size: 42px;
    margin: 12px 0;
    font-weight: 700;
    color: #111;
  }

  p {
    max-width: 750px;
    margin: auto;
    color: #666;
    line-height: 1.8;
  }

  @media (max-width:768px) {
    h1{
      font-size:28px;
    }
  }
`;

export const ButtonWrap = styled.div`
  display:flex;
  justify-content:center;
  gap:15px;
  margin-top:25px;
  flex-wrap:wrap;
`;

export const PrimaryButton = styled.button`
  padding:12px 35px;
  border:none;
  background:#243b9f;
  color:white;
  font-weight:600;
  cursor:pointer;
  border-radius:6px;
`;

export const SecondaryButton = styled.button`
  padding:12px 35px;
  border:1px solid #ddd;
  background:white;
  font-weight:600;
  cursor:pointer;
  border-radius:6px;
`;

export const MainGrid = styled.div`
  display:grid;
  grid-template-columns:300px 1fr 350px;
  gap:50px;
  align-items:center;
  margin-top:60px;

  @media(max-width:992px){
    grid-template-columns:1fr;
  }
`;

export const FormBox = styled.div`
  background:#2d46b9;
  padding:35px;
  border-radius:20px;
`;

export const Input = styled.input`
  width:100%;
  background:transparent;
  border:none;
  outline:none;
  border-bottom:1px solid rgba(255,255,255,.3);
  padding:16px 0;
  color:white;
  margin-bottom:15px;

  &::placeholder{
    color:rgba(255,255,255,.8);
  }
`;

export const TextArea = styled.textarea`
  width:100%;
  background:transparent;
  border:none;
  outline:none;
  border-bottom:1px solid rgba(255,255,255,.3);
  padding:16px 0;
  color:white;
  resize:none;
  margin-bottom:25px;

  &::placeholder{
    color:rgba(255,255,255,.8);
  }
`;

export const SubmitButton = styled.button`
  width:100%;
  padding:15px;
  border:none;
  border-radius:10px;
  font-weight:600;
  cursor:pointer;
  background:white;
`;

export const Content = styled.div`
  h2{
    margin-bottom:20px;
    font-size:32px;
  }

  p{
    color:#666;
    line-height:1.8;
  }

  ul{
    list-style:none;
    padding:0;
    margin-top:30px;
  }

  li{
    margin-bottom:20px;
    line-height:1.7;
    color:#555;
  }
`;

export const MobileImage = styled.div`
  display:flex;
  justify-content:center;

  @media(max-width:992px){
    order:-1;
  }
`;

export const PhoneImage = styled.img`
  width:100%;
  max-width:300px;
`;

export const BottomGrid = styled.div`
  display:grid;
  grid-template-columns:repeat(3,1fr);
  gap:30px;
  margin-top:80px;

  @media(max-width:768px){
    grid-template-columns:1fr;
  }
`;

export const Card = styled.div`
  text-align:center;
  padding:20px;

  h3{
    font-size:18px;
    margin:15px 0;
  }

  p{
    color:#666;
    line-height:1.7;
  }
`;