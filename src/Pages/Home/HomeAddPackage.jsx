import React, { useState, useRef, forwardRef, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import { FaCalendarAlt } from 'react-icons/fa';
import '../../Style/Home/Calendar.css';
import '../../Style/Home/HomeAddPackage.css';
import NavBar from '../Nav/Nav.jsx';
import { Link, useNavigate } from 'react-router-dom'; 
import axios from 'axios';

const token = localStorage.getItem('authToken');

const HomeAddPackage = () => {
  const [dateRange, setDateRange] = useState([new Date(), new Date()]);
  const [startDate, endDate] = dateRange;
  const [isOpen, setIsOpen] = useState(false);
  const datePickerRef = useRef();
  const [routine, setRoutine] = useState('');
  const [memo, setMemo] = useState('');
  const navigate = useNavigate(); 

  const handleButtonClick = async () => {
    try {
      const response = await axios.post(
        'https://dofarming.duckdns.org/api/v1/track',
        {
          content: routine,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.status === 200) {
        alert('저장되었어요!');
        navigate('/home'); 
      } else {
        alert('저장에 실패했어요!');
      }
    } catch (error) {
      console.error(error);
      alert('저장에 실패했어요!');
    }
  };

  const CustomInput = forwardRef(({ value, onClick }, ref) => (
    <div>
      <input 
        ref={ref}
        type="text" 
        value={value} 
        readOnly
        className="Home9inputboxDate"
        onChange={(e) => setDateRange(e.target.value.split(' - ').map(date => new Date(date)))}
      />
      <FaCalendarAlt onClick={onClick} className='Home9inputboxDateIcon'/>
    </div>
  ));

  return (
    <div>
      <NavBar/>
      <div className='Home9Wrap'>
        <div className='PackageName'>
          <input 
            type="text"
            value={routine}
            onChange={(e) => setRoutine(e.target.value)}
            onBlur={() => setRoutine(routine || '')}
            placeholder='루틴 이름'
            className='Home9inputboxname'
          />
        </div>
        <div className='Home9inputWrap'>
          <div className='Home9input'>
            <div>메모</div>
            <input 
              type="text"
              value={memo}
              onChange={(e) => setMemo(e.target.value)}
              onBlur={() => setMemo(memo || '')}
              placeholder='글자 수 제한'
              className='Home9inputbox'
            />
          </div>
          <div className='Home9input'>
            <div>기간</div>
            <DatePicker
              ref={datePickerRef}
              selected={startDate}
              onChange={(update) => {
                setDateRange(update);
              }}
              startDate={startDate}
              endDate={endDate}
              selectsRange
              customInput={<CustomInput />}
              dateFormat="yy/MM/dd"
              open={isOpen}
              onCalendarClose={() => setIsOpen(false)}
              onCalendarOpen={() => setIsOpen(true)}
            />
          </div>
        </div>
        <div className='BtnWrap'> 
            <button className='Home9Btn' onClick={handleButtonClick}>완료</button>  
        </div>
      </div>
    </div>
  );
}

export default HomeAddPackage;
