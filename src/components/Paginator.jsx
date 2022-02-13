import React from 'react';
import {getPages} from "../utils/paginator";
import classes from "../styles/components/Paginator.module.css";

const Paginator = ({total, currentPage, change}) => {
    let pages = getPages(total)

    return (
        <div className={classes.pages}>
            {pages.map(page => (
                <span
                    className={page === currentPage ? classes.currentPage : classes.page}
                    key={page}
                    onClick={() => change(page)}
                >
                    {page}
                </span>
            ))}
        </div>
    );
};

export default Paginator;