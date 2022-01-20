import styled from "styled-components";

export const Container = styled.div`
    margin-top: 4rem;

    table {
        width: 100%;
        border-spacing: 0 0.5rem;

        th {
            color: var(--text-body);
            font-weight: 400;
            padding: 1rem 2rem;
            text-align: left;
            line-height: 1.5rem;
        }

        td {
            padding: 1rem 2rem;
            border: 0;
            background: var(--shape);
            color: var(--text-body);
            border-radius: 0.25rem;

            &:first-child {
                color: var(--text-title);
            }
            &.deposit {
                color: var(--green);
            }
            &.withdraw {
                color: var(--red);
            }
        }
    }

`

export const ItemMobile = styled.div`
    header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 16px;
        color: var(--text-body);
        h2 {
            color: var(--text-title);
            font-weight: 400;
        }
    }
    > div {
        background: var(--shape);
        padding: 17px 28px 17px 24px;
        border-radius: 0.25rem;
        color: var(--text-body);
        &:not(:last-child) {
            margin-bottom: 8px;
        }
        h4 {
            color: var(--text-title);
            font-weight: 400;
            font-size: 1.1rem;
            margin-bottom: 2px;
        }
        > span {
            font-size: 1.4rem;
            margin-bottom: 19px;
            display: inline-block;
            &:first-child {
                color: var(--text-title);
            }
            &.deposit {
                color: var(--green);
            }
            &.withdraw {
                color: var(--red);
            }
        }

        footer {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
    }
`