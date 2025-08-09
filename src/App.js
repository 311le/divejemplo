import React from 'react';

function App() {
  return (
    <>
      <style>{`
        .container {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 40px;
          font-family: Arial, sans-serif;
          color: #4b0082;
        }

        .wizard {
          position: relative;
          width: 150px;
          height: 220px;
          background: #f0d9ff;
          border-radius: 75px 75px 65px 65px;
          box-shadow: 0 0 0 5px #7044ff;
          overflow: visible;
          margin-bottom: 20px;
        }

        /* Pelo largo con animacion */
        .hair {
          position: absolute;
          top: -40px;
          left: 0;
          width: 150px;
          height: 150px;
          background: linear-gradient(135deg, #5e3a9d, #a173d9);
          border-radius: 50% 50% 40% 40% / 70% 70% 40% 40%;
          animation: hair-wave 4s ease-in-out infinite;
          z-index: -1;
        }

        /* Más mechones de pelo largos animados */
        .hair::before, .hair::after {
          content: '';
          position: absolute;
          width: 60px;
          height: 150px;
          background: linear-gradient(135deg, #5e3a9d, #a173d9);
          border-radius: 50% / 60%;
          top: 0;
          animation: hair-wave 4s ease-in-out infinite;
          animation-delay: 2s;
          z-index: -1;
        }
        .hair::before {
          left: -50px;
          transform-origin: top right;
        }
        .hair::after {
          right: -50px;
          transform-origin: top left;
        }

        @keyframes hair-wave {
          0%, 100% {
            transform: rotate(3deg);
          }
          50% {
            transform: rotate(-3deg);
          }
        }

        /* Ojos */
        .eye {
          position: absolute;
          top: 80px;
          width: 25px;
          height: 25px;
          background: white;
          border-radius: 50%;
          border: 3px solid #7044ff;
          overflow: hidden;
        }
        .eye.left {
          left: 35px;
        }
        .eye.right {
          right: 35px;
        }

        .pupil {
          position: absolute;
          top: 6px;
          left: 7px;
          width: 10px;
          height: 10px;
          background: #7044ff;
          border-radius: 50%;
          animation: pupil-move 3s infinite alternate ease-in-out;
        }

        @keyframes pupil-move {
          0% { transform: translateX(0); }
          100% { transform: translateX(5px); }
        }

        /* Nariz */
        .nose {
          position: absolute;
          top: 115px;
          left: 50%;
          transform: translateX(-50%);
          width: 10px;
          height: 15px;
          background: #b383ff;
          border-radius: 5px 5px 10px 10px;
        }

        /* Boca */
        .mouth {
          position: absolute;
          top: 145px;
          left: 50%;
          transform: translateX(-50%);
          width: 50px;
          height: 25px;
          border-bottom: 5px solid #7044ff;
          border-radius: 0 0 25px 25px;
        }

        /* Sombrero de mago */
        .hat {
          position: absolute;
          top: -90px;
          left: 50%;
          transform: translateX(-50%);
          width: 120px;
          height: 100px;
          background: linear-gradient(45deg, #3d0075, #6e28b1);
          clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
          box-shadow: 0 0 15px #6e28b1;
          animation: hat-bob 4s ease-in-out infinite;
          z-index: 2;
        }

        @keyframes hat-bob {
          0%, 100% {
            transform: translateX(-50%) translateY(0);
          }
          50% {
            transform: translateX(-50%) translateY(-10px);
          }
        }

        /* Texto debajo */
        .avatar-name {
          font-size: 24px;
          font-weight: 700;
          letter-spacing: 1.2px;
          margin-top: 10px;
          color: #4b0082;
          user-select: none;
        }
      `}</style>

      <div className="container">
        <div className="wizard">
          <div className="hair"></div>
          <div className="hat"></div>

          <div className="eye left">
            <div className="pupil"></div>
          </div>
          <div className="eye right">
            <div className="pupil"></div>
          </div>

          <div className="nose"></div>
          <div className="mouth"></div>
        </div>

        <div className="avatar-name">Cristian Yamberla</div>
      </div>
    </>
  );
}

export default App;
