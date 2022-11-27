import React from 'react';
import Data from './data.json';

const DataInfo = () => {
	return (
		<>
			{Data.map((post) => {
				return (
					<li id={post.id} key={post.id}>
						<div className="item-wrapper">
							<h3 className="title">{post.title}</h3>
							<p className="body">{post.content}</p>
						</div>
					</li>
				);
			})}
		</>
	);
};

export default DataInfo;
