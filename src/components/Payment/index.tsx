import React, { FC, useMemo } from 'react';
import { connect } from 'react-redux';
import { useTable, useSortBy, usePagination, HeaderGroup } from 'react-table';
import { RenterPlusLoginState } from '../../redux/reducers/reducerCombo';
import { ConnectedProps } from '../../utils/redux/types';
import Link from '../Link';
import StyledPaymentHistoryDiv from './StyledPaymentHistoryDiv';
import { PaymentTransaction } from '../../redux/reducers/types';

/* eslint-disable react/jsx-props-no-spreading */

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
    // canPreviousPage,
    // canNextPage,
    // pageOptions,
    // pageCount,
    // gotoPage,
    // nextPage,
    // previousPage,
    // setPageSize,
    // state: { pageIndex, pageSize },
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
                    <th {...header.getHeaderProps()}>
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
        </StyledPaymentHistoryDiv>
      )}
      <Link href={redirectTo}>
        <a>back</a>
      </Link>
    </div>
  );
};

export default connect(mapStateToProps)(Payment);
