import React from 'react';
import { Link } from 'react-router-dom'
import logo from '../assets/icons/logo.png'

const Header = () => {
	const tweetText = encodeURIComponent(`试试这个工具：https://view.gyhwd.top/ @rutikdotdev`);

	return (
		<div className="bg-white text-xl md:px-2 flex border-dashed border-b-2 border-gray-100 p-2">
			<Link to="/" className="flex items-center">
				<img src={logo} alt="logo" className="w-8 h-8 mx-4" />
				<h1 className="font-semibold">阿辉の封面生成</h1>
			</Link>

			<div className="ml-auto md:mr-4 flex items-center">
				<a
					href="https://github.com/wojackop/cover-creator"
					target="_blank"
					rel="noreferrer"
					className="bg-gray-700 hover:bg-gray-800 px-4 rounded-full p-1 text-white md:text-sm md:flex hidden items-center text-xs mx-2 font-Nunito"
				>
					⭐ Github 收藏项目
				</a>
				<a
					href={`https://x.com/intent/tweet?text=${tweetText}`}
					className="mx-2 bg-blue-400 hover:bg-blue-500 md:text-sm text-xs rounded-full px-4 font-semibold text-white p-1"
				>
					分享到 Twitter
				</a>
			</div>
		</div>
	);
}

export default Header;
