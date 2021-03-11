import styled from 'styled-components';

export default {
  ArrayContainer: styled.div`
    /* display: flex; */
    margin: 0 auto;
    width: fit-content;
    height: 710px;
  `,

  Bar: styled.div`
    display: inline-block;
    background-color: pink;
    width: ${(props) => `${props.width}px`};
    margin: 0 1px;
  `,

  SortButton: styled.button`
    height: 30px;
  `,

  ButtonContainer: styled.div`
    display:flex;
    width: fit-content;
    margin: 0 auto;
  `,

  NewArrayForm: styled.form`
    height: 30px;
  `,

  FormInputButton: styled.input`
    height: 30px;
  `,

  FormInputText: styled.input`
    height: 30px;
  `,
};
