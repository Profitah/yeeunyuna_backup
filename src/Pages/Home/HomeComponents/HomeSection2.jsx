import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { RiPencilFill } from 'react-icons/ri';
import "../../../Style/Home/HomeSection2.css";
import { IoIosAddCircle } from "react-icons/io";
import PackageDeleteModal from '../PackageDeleteModal';
import axios from 'axios';

const Homesection2 = () => {
  const [packages, setPackages] = useState([]); // 패키지 목록 상태
  const [showModal, setShowModal] = useState(false); // 패키지 삭제 모달 표시 상태
  const [deleteId, setDeleteId] = useState(null); // 삭제할 패키지의 ID
  const navigate = useNavigate(); // 페이지 이동을 위한 Hook

  useEffect(() => {
    // 컴포넌트가 마운트될 때 패키지 목록을 불러오는 함수
    const fetchPackages = async () => {
      try {
        const token = localStorage.getItem('authToken'); // 인증 토큰 가져오기
        const response = await axios.get('https://dofarming.duckdns.org/api/v1/track', {
          headers: {
            'Authorization': `Bearer ${token}` // 인증 토큰을 헤더에 포함하여 요청 보내기
          }
        });
        setPackages(response.data); // 서버에서 받은 패키지 목록을 상태에 설정
      } catch (error) {
        console.error('Error fetching packages:', error); // 에러 처리
      }
    };

    fetchPackages(); // 패키지 목록 불러오기
  }, []); // 페이지 로드 시 한 번만 호출

  // 패키지 삭제 버튼 클릭 시 실행되는 함수
  const handleDeletePackage = (id) => {
    setShowModal(true); // 삭제 모달 표시
    setDeleteId(id); // 삭제할 패키지의 ID 설정
  };

  // 패키지 삭제 모달에서 확인 버튼 클릭 시 실행되는 함수
  const handleConfirmDelete = () => {
    const updatedPackages = packages.filter((pkg) => pkg.trackId !== deleteId); // 삭제된 패키지를 제외한 목록
    setPackages(updatedPackages); // 패키지 목록 업데이트
    setShowModal(false); // 삭제 모달 닫기
    document.body.classList.remove('modal-open'); // 모달 스크롤 제거
  };

  // 패키지 삭제 모달에서 취소 버튼 클릭 시 실행되는 함수
  const handleCancelDelete = () => {
    setShowModal(false); // 삭제 모달 닫기
    document.body.classList.remove('modal-open'); // 모달 스크롤 제거
  };

  // 패키지 추가 버튼 클릭 시 실행되는 함수
  const handleAddPackage = () => {
    navigate('/HomeAddPackage'); // 패키지 추가 페이지로 이동
  };

  return (
    <>
    {packages.length > 0 && ( // 패키지가 하나 이상 있을 때에만 아래의 JSX를 렌더링합니다.
      <div className="HomeWrap2">
        <div id="userPKG" onClick={() => navigate('/Todo')}> {/* 'userPKG' 클릭 시 'Todo' 페이지로 이동 */}
          {packages.map((pkg) => (
            <div key={pkg.trackId}>
              <div className="S2Wrap">
                <div className="S2Wrap2">
                  <div id="userRname">{pkg.content}</div> {/* 패키지 이름 표시 */}
                  <button onClick={(e) => {e.stopPropagation(); navigate('/HomeAddPackage');}} className="BtnS2">
                    <RiPencilFill /> {/* 패키지 수정 아이콘 */}
                  </button>
                </div>
                <button onClick={(e) => {e.stopPropagation(); handleDeletePackage(pkg.trackId);}} className="BtnS2Del">
                  X {/* 패키지 삭제 버튼 */}
                </button>
              </div>
              {/* 패키지의 날짜와 메모 정보 등을 여기에 표시 */}
            </div>
          ))}
        </div>
      </div>
    )}
    <IoIosAddCircle className="ToHomeAddPackage" onClick={handleAddPackage} /> {/* 패키지 추가 버튼 */}
    {showModal && (
      <PackageDeleteModal 
        onClose={handleCancelDelete} 
        onConfirm={handleConfirmDelete}
      />
    )}
    </>
  );
};

export default Homesection2;
