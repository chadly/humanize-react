import React, { Fragment } from "react";

const humanizeReactList = (list, options) => {
	if (!Array.isArray(list)) {
		throw new TypeError("humanize-react expected an array");
	}

	options = options || {};
	options.conjunction = options.conjunction || "and";
	options.oxfordComma =
		options.oxfordComma === undefined ? true : options.oxfordComma;

	const listLength = list.length;

	if (listLength === 1) {
		return list[0];
	}

	let humanizedList = [];
	for (let i = 0; i < listLength; i++) {
		if (i === listLength - 1) {
			if (listLength > 2 && options.oxfordComma) {
				humanizedList.push(<Fragment key={`${i}-comma`}>,</Fragment>);
			}

			humanizedList.push(
				<Fragment key={`${i}-conjunction`}> {options.conjunction} </Fragment>
			);
		} else if (i !== 0) {
			humanizedList.push(<Fragment key={`${i}-comma`}>, </Fragment>);
		}

		humanizedList.push(<Fragment key={i}>{list[i]}</Fragment>);
	}

	return <>{humanizedList}</>;
};

export default humanizeReactList;
