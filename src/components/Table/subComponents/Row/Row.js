// @flow

import * as React from 'react';
import classnames from "classnames";

import './Row.css';

type PropsType = {|
    index: number | string,
    variable: string,
    count: string,
    averageAge: number | string,
    isTitle?: boolean,
|};

function Row(props: PropsType): React.Element<'div'> {
    const { index, variable, count, averageAge, isTitle } = props;

    const classNames = classnames({
        'row': true,
        'title': isTitle,
    });

    const style = {
        backgroundColor: index % 2 ? '#e1e1e1' : null,
    };

    return (
        <div className={classNames} style={style}>
            <div className="index">{index}</div>
            <div className="variable">{variable}</div>
            <div className="count">{count}</div>
            <div className="averageAge">{averageAge}</div>
        </div>
    );
}

Row.defaultProps = {
    isTitle: false,
};

export default Row;
