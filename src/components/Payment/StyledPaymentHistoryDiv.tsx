import styled from '@emotion/styled';
import rem from '../../utils/style/rem';

const StyledPaymentHistoryDiv = styled.div`
  padding: ${rem(16)};

  table {
    margin: auto auto;
    border-spacing: 0;
    border: ${rem(1)} solid black;

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th,
    td {
      margin: 0;
      padding: ${rem(8)};
      border-bottom: ${rem(1)} solid black;
      border-right: ${rem(1)} solid black;

      :last-child {
        border-right: 0;
      }
    }
  }

  .pagination {
    padding: ${rem(8)};
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .pagination input {
    width: ${rem(50)};
    height: ${rem(32)};
    font-size: ${rem(18)};
    text-align: center;
  }

  .pagination > div {
    margin: 0 ${rem(32)};
  }
`;

export default StyledPaymentHistoryDiv;
