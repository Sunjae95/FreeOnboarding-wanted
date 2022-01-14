import React from 'react';

const SlideItem = ({ ...props }) => {
  return (
    <div {...props}>
      <div>
        <div>
          {/* 이미지 */}
          <a>
            <img></img>
          </a>
        </div>
        <div>
          {/* 정보 */}
          <h2></h2>
          <h3></h3>
          <hr></hr>
          <a>
            <span>
              {/* 바로가기 */}
              {/* 화살표 아이콘 */}
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default SlideItem;
