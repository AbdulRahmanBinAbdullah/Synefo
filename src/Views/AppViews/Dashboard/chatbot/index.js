import React from 'react';
import bot from 'assets/img/bot.png'
const ChatBotGreeting = () => {
  return (
    <div className="flex items-center justify-center h-screen mr-5">
      <div className="relative">
        <div className="relative">
          <svg width="240" height="150" viewBox="0 0 240 150" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 20C0 8.95431 8.95431 0 20 0H220C231.046 0 240 8.95431 240 20V110C240 121.046 231.046 130 220 130H220L200 150L180 130H20C8.95431 130 0 121.046 0 110V20Z" fill="white"/>
            <path d="M0.5 20C0.5 9.23045 9.23045 0.5 20 0.5H220C230.77 0.5 239.5 9.23045 239.5 20V110C239.5 120.77 230.77 129.5 220 129.5H219.79L200 149.196L180.21 129.5H20C9.23045 129.5 0.5 120.77 0.5 110V20Z" stroke="#4299E1" strokeOpacity="0.5"/>
          </svg>
          <div className="absolute top-7 left-0 p-3">
            <p className="text-[#383874] font-bold mb-2" style={{fontSize:'20px'}}>Hey!</p>
            <p className="text-[#383874]" style={{fontSize:'20px'}}>How can I help You</p>
          </div>
        </div>
        <div className="absolute bottom--1 right-0 transform translate-x-1 translate-y-1">
          <div className=" rounded-full w-16 h-16 flex items-center justify-center">
           
            <img src={bot} alt='bot'/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatBotGreeting;
