import styled from "styled-components";

export const Container = styled.div`
    margin-top: -10rem;  

    & .slick-list { 
        margin: 0 -13px; 

        & .slick-slide > div {
             padding: 0 10px; 
        }
    } 
`

export const SliderItem = styled.div`
    background: var(--shape);
    padding: 1.5rem 2rem;
    border-radius: 0.25rem;
    color: var(--text-title);   

    strong {
        display: block;
        margin-top: 1rem;
        font-size: 2rem;
        font-weight: 500;
        line-height: 3rem;
    }
`