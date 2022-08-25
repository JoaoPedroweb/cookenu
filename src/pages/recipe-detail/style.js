import styled from 'styled-components';

export const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    height: 80vh;
    min-width: 50vw;
    max-width: 95vw;
    margin: 10px auto;
    p {
        width: 90%;
    }
    h1 {
        font-weight: bold;
        font-size: 1.5rem;
    }
    img {
        width: 300px;
    }
`;