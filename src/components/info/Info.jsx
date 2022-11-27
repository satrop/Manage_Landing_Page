import React from 'react';
import DataInfo from '../dataInfo/DataInfo';

const Info = () => {
	return (
		<section>
			<div className="container container--two-columns container--info">
				<article className="lead">
					<h2>What's different about Manage?</h2>
					<p>
						Manage provides all the functionality your team needs,
						without the complexity. Our software is tailor-made for
						modern digital product teams.
					</p>
				</article>
				<article>
					<ol className="content-list">
						<DataInfo />
					</ol>
				</article>
			</div>
		</section>
	);
};

export default Info;
