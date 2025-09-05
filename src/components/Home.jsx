import React from 'react';
import logo from '../assets/icons/logo.png';
import { Link } from 'react-router-dom';
import cover1 from '../assets/images/cover1.webp';
import cover2 from '../assets/images/cover2.webp';
import cover3 from '../assets/images/cover3.webp';

const Home = () => {
    return (
        <div className="flex flex-col min-h-screen">
            {/* 顶部导航栏 */}
            <div className="text-xl flex p-2 md:w-10/12 mx-auto">
                <div className="flex items-center">
                    <img src={logo} alt="logo" className="w-8 h-8 mx-2" />
                    <h1 className="font-semibold md:text-xl text-lg font-Inter">
                        阿辉の封面生成
                    </h1>
                </div>

                <a
                    href="https://github.com/wojackop/cover-creator"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:translate-x-2 flex items-center justify-center duration-300 bg-gray-700 group rounded-xl text-white ml-auto mr-4 font-Inter font-semibold"
                >
                    <span className="md:text-sm text-xs px-2 md:px-4 py-1 md:py-2">
                        ⭐ GitHub 上点个 Star！
                    </span>
                </a>
            </div>

            {/* 主体内容垂直真正居中 */}
            <div className="flex-grow flex justify-center items-center px-4">
                <div className="flex flex-col justify-center items-center w-full">
                    <h1 className="md:w-7/12 text-center md:text-5xl text-4xl font-extrabold text-gray-700 font-Anek mb-10">
                        现在为你的博客生成封面图，轻松又快捷
                    </h1>
                    <p className="md:w-7/12 text-center text-gray-500 font-Inter md:text-lg text-base mb-10">
                        只需简单几步，便可生成适合你博客的封面图，支持多种平台，快来试试吧！
                    </p>

                    <div>

                        <Link
                        to="/editor"
                        className="hover:translate-x-2 duration-300 bg-gray-700 hover:bg-gray-800 group rounded-full border-4 border-gray-100 px-6 md:px-8 text-white md:text-2xl text-base font-Poppins font-semibold md:p-4 p-2 mb-16"
                    >
                        <span className="md:text-2xl font-semibold text-lg">立即创建</span>
                    </Link>

                    <Link
                        to="https://gyhwd.top/"
                        className="hover:translate-x-2 duration-300 bg-gray-700 hover:bg-gray-800 group rounded-full border-4 border-gray-100 px-6 md:px-8 text-white md:text-2xl text-base font-Poppins font-semibold md:p-4 p-2 mb-16"
                    >
                        <span className="md:text-2xl font-semibold text-lg">站长博客</span>
                    </Link>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};


export default Home;
