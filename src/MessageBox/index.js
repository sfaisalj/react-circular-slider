import React from 'react';
import PropTypes from 'prop-types';

const MessageBox = ({
	message,
    messageFontSize
}) => {
	const styles = {
		labels: {
			position: 'relative',
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'center',
			alignItems: 'left',
			userSelect: 'none',
		},

		value: {
			fontSize: `${messageFontSize}`,
			position: 'relative',
		},

		hide: {
			display: 'none',
		},
	};

	return (
		<div style={{ ...styles.labels }}>
			<code>
				{message}
			</code>
		</div>
	);
};

MessageBox.propTypes = {
	message: PropTypes.string.isRequired,
	messageFontSize: PropTypes.string,
};

export default MessageBox;
