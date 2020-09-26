import styled from 'styled-components';

const PostTag = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 5px;
    padding: ${props => props.cover ? "0.3rem 0.85714rem" : "0.3rem 0"}
  `

export default PostTag;