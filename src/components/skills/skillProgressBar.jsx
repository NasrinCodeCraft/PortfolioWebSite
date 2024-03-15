import React, { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';

const SkillProgressBar = ({ skillName, percentage, color }) => {
  const persianDigits = {
    '۰': '0',
    '۱': '1',
    '۲': '2',
    '۳': '3',
    '۴': '4',
    '۵': '5',
    '۶': '6',
    '۷': '7',
    '۸': '8',
    '۹': '9'
};

  // Function to convert English digits to Persian digits
  const convertToPersianDigits = (number) => {
    return number.toString().split('').map(digit => persianDigits[digit] || digit).join('');
  };

  const progressBarRef = useRef(null);
  const [inViewRef, inView] = useInView({
    triggerOnce: true,
    rootMargin: '-20px 0px', // Adjust this margin as needed
  });

  useEffect(() => {
    if (inView) {
      const progressBar = progressBarRef.current;
      progressBar.style.width = `${convertToPersianDigits(percentage)}%`;
    }
  }, [inView, percentage]);

  return (
    <div ref={inViewRef} className="skill mb-4">
      <div className="d-flex justify-content-between">
        <h6 className="font-weight-bold">{skillName}</h6>
        <h6 className="font-weight-bold">{`${(percentage)}%`}</h6>
      </div>
      <div className="progress">
        <div
          ref={progressBarRef}
          className={`progress-bar ${color}`}
          role="progressbar"
          aria-valuenow={convertToPersianDigits(percentage)}
          aria-valuemin="0"
          aria-valuemax="100"
        />
      </div>
    </div>
  );
};

export default SkillProgressBar;
