import React from 'react';
import s from './Table.module.scss'

export const Table = () => {
    return (
        <div className={s.table}>
            <table className={s.tableWrapper}>
                <thead className={s.tableHeader}>
                <tr className={s.table__headRow}>
                    <th className={s.table__head}>
                        Name
                    </th>
                    <th className={s.table__head}>
                        Cards
                    </th>
                    <th className={s.table__head}>
                        Last Updated
                    </th>
                    <th className={s.table__head}>Created by</th>
                    <th className={s.table__head}>Actions</th>
                </tr>
                </thead>
                <tbody>

                </tbody>
            </table>
        </div>
    );
};

