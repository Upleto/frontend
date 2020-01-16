import React, { FC, useMemo } from 'react';
import { connect } from 'react-redux';
import { useTable, useSortBy, usePagination, HeaderGroup } from 'react-table';
import { css } from '@emotion/core';
import { RenterPlusLoginState } from '../../redux/reducers/reducerCombo';
import { ConnectedProps } from '../../utils/redux/types';
import Link from '../Link';
import StyledPaymentHistoryDiv from './StyledPaymentHistoryDiv';
import { PaymentTransaction } from '../../redux/reducers/types';
import rem from '../../utils/style/rem';

/* eslint-disable react/jsx-props-no-spreading */

const PageButtonStyle = (disabled: boolean) => css`
  border: ${rem(1)} ${disabled ? 'lightgray' : 'black'} solid;
  width: ${rem(32)};
  height: ${rem(32)};
  margin: 0 ${rem(4)};
  ${disabled ? '' : 'cursor: pointer'};
  font-size: ${rem(18)};
`;

const mapStateToProps = (state: RenterPlusLoginState) => ({
  redirectTo: state?.payment?.redirectTo ?? '',
  paymentHistory: state?.payment?.paymentHistory ?? {},
  paymentAccountsInvolved: state?.payment?.paymentAccountsInvolved ?? {},
});

type Props = ConnectedProps<typeof mapStateToProps>;

const Payment: FC<Props> = ({ redirectTo, paymentHistory, paymentAccountsInvolved }) => {
  const columns = React.useMemo(
    () => [
      {
        Header: 'Payment History',
        columns: [
          {
            Header: 'Time Stamp',
            accessor: (row: PaymentTransaction) => row.timeStamp.calendar(),
            id: 'date',
          },
          {
            Header: 'Amount',
            accessor: (row: PaymentTransaction) => `$${row.amount.toFixed(2)}`,
            id: 'amount',
          },
          {
            Header: 'From',
            accessor: (row: PaymentTransaction) =>
              paymentAccountsInvolved[row.fromPaymentAccountId].displayName,
            id: 'fromAccountName',
          },
          {
            Header: 'To',
            accessor: (row: PaymentTransaction) =>
              paymentAccountsInvolved[row.toPaymentAccountId].displayName,
            id: 'toAccountName',
          },
          {
            Header: 'Description',
            accessor: 'description',
          },
        ],
      },
    ],
    [paymentAccountsInvolved]
  );

  const data = useMemo(() => Object.values(paymentHistory), [paymentHistory]);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable<PaymentTransaction>(
    // @ts-ignore
    { columns, data, initialState: { pageIndex: 0, pageSize: 2 } },
    useSortBy,
    usePagination
  );

  return (
    <div>
      <h2>Payment</h2>
      {page.length > 0 && (
        <StyledPaymentHistoryDiv>
          <table {...getTableProps()}>
            <thead>
              {headerGroups.map((headerGroup: HeaderGroup<PaymentTransaction>) => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((header: any) => (
                    <th {...header.getHeaderProps(header.getSortByToggleProps())}>
                      {header.render('Header')}
                      <span>{(header.isSorted && (header.isSortedDesc ? 'ᐁ' : 'ᐃ')) || ''}</span>
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()}>
              {page.map((row: any) => {
                prepareRow(row);
                return (
                  <tr {...row.getRowProps()}>
                    {row.cells.map((cell: any) => {
                      return <td {...cell.getCellProps()}>{cell.value}</td>;
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div className="pagination">
            <button
              type="button"
              onClick={() => gotoPage(0)}
              disabled={!canPreviousPage}
              css={PageButtonStyle(!canPreviousPage)}
            >
              {'<<'}
            </button>
            <button
              type="button"
              onClick={() => previousPage()}
              disabled={!canPreviousPage}
              css={PageButtonStyle(!canPreviousPage)}
            >
              {'<'}
            </button>
            <div>
              {'Page '}
              <input
                type="number"
                defaultValue={pageIndex + 1}
                onChange={e => {
                  const newPageIndex = e.target.value ? parseInt(e.target.value, 10) - 1 : 0;
                  gotoPage(newPageIndex);
                }}
              />
              {` of ${pageOptions.length}`}
            </div>
            <div>
              {'Show '}
              <input
                type="number"
                defaultValue={pageSize}
                onChange={e => {
                  const newPageSize = e.target.value ? parseInt(e.target.value, 10) : 1;
                  setPageSize(newPageSize);
                }}
              />
              {' rows'}
            </div>
            <button
              type="button"
              onClick={() => nextPage()}
              disabled={!canNextPage}
              css={PageButtonStyle(!canNextPage)}
            >
              {'>'}
            </button>
            <button
              type="button"
              onClick={() => gotoPage(pageCount - 1)}
              disabled={!canNextPage}
              css={PageButtonStyle(!canNextPage)}
            >
              {'>>'}
            </button>
          </div>
        </StyledPaymentHistoryDiv>
      )}
      <Link href={redirectTo}>
        <a>back</a>
      </Link>
    </div>
  );
};

export default connect(mapStateToProps)(Payment);
