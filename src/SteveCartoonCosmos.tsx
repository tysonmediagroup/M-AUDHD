import React from 'react';
import { sound } from './audio';

interface Props {
  className?: string;
}

export const SteveCartoonCosmos: React.FC<Props> = ({ className = '' }) => {
  const handleElementClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    sound.playChime(0.28);
  };

  return (
    <div className={`steve-cartoon-cosmos ${className}`}>
      {/* 1. Cute Little Ringed Saturn (Top Left) */}
      <div
        className="cosmos-item saturn-doodle"
        onClick={handleElementClick}
        title="Steve's Ringed Planet"
      >
        <svg width="68" height="52" viewBox="0 0 68 52" fill="none">
          <ellipse
            cx="34"
            cy="26"
            rx="18"
            ry="18"
            fill="#FFF8E7"
            fillOpacity="0.9"
          />
          <circle cx="28" cy="20" r="3" fill="#E6D3A3" fillOpacity="0.6" />
          <circle cx="38" cy="28" r="2.5" fill="#E6D3A3" fillOpacity="0.6" />
          {/* Ring */}
          <ellipse
            cx="34"
            cy="26"
            rx="32"
            ry="9"
            stroke="#FFFFFF"
            strokeWidth="3"
            strokeLinecap="round"
            transform="rotate(-18 34 26)"
            strokeDasharray="95 18"
          />
        </svg>
      </div>

      {/* 2. Cozy Little Crescent Moon (Mid Left) */}
      <div
        className="cosmos-item moon-doodle"
        onClick={handleElementClick}
        title="Sleeping Moon"
      >
        <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
          <path
            d="M32 10C24 10 16 16 16 26C16 34 22 40 30 40C20 40 10 32 10 22C10 12 18 4 30 4C30.7 4 31.4 4.1 32 4.2C30 6 32 10 32 10Z"
            fill="#FFFBEA"
            fillOpacity="0.92"
          />
          <circle cx="19" cy="22" r="2" fill="#E6D3A3" fillOpacity="0.5" />
          <circle cx="23" cy="28" r="1.5" fill="#E6D3A3" fillOpacity="0.5" />
        </svg>
      </div>

      {/* 3. Little Azure Ringed Planet (Top Right) */}
      <div
        className="cosmos-item azure-planet-doodle"
        onClick={handleElementClick}
        title="Tiny Azure Planet"
      >
        <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
          <circle cx="26" cy="26" r="16" fill="#A5F3FC" fillOpacity="0.88" />
          <ellipse cx="22" cy="22" rx="3.5" ry="2" fill="#38BDF8" fillOpacity="0.5" />
          <ellipse cx="30" cy="30" rx="4" ry="2" fill="#38BDF8" fillOpacity="0.5" />
          {/* Faint mini ring */}
          <ellipse
            cx="26"
            cy="26"
            rx="24"
            ry="6"
            stroke="#E0F2FE"
            strokeWidth="2"
            strokeLinecap="round"
            transform="rotate(22 26 26)"
            strokeDasharray="60 12"
          />
        </svg>
      </div>

      {/* 4. Little Crater Planet (Mid Right) */}
      <div
        className="cosmos-item crater-planet-doodle"
        onClick={handleElementClick}
        title="Tiny Bubble Planet"
      >
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
          <circle cx="24" cy="24" r="18" fill="#E0D4FD" fillOpacity="0.85" />
          <circle cx="18" cy="18" r="4" fill="#B79DF2" fillOpacity="0.7" />
          <circle cx="29" cy="22" r="3" fill="#B79DF2" fillOpacity="0.7" />
          <circle cx="22" cy="31" r="2.5" fill="#B79DF2" fillOpacity="0.7" />
        </svg>
      </div>

      {/* 5. Cheerful Shooting Star (Bottom Left) */}
      <div
        className="cosmos-item comet-doodle"
        onClick={handleElementClick}
        title="Shooting Star"
      >
        <svg width="60" height="42" viewBox="0 0 60 42" fill="none">
          {/* Trail */}
          <path
            d="M6 10C16 12 28 17 38 22"
            stroke="#FFF275"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeDasharray="4 6"
            strokeOpacity="0.75"
          />
          <path
            d="M10 18C20 20 30 24 40 27"
            stroke="#FFFFFF"
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray="3 5"
            strokeOpacity="0.6"
          />
          {/* Star Head */}
          <path
            d="M48 20L50 25L55 25L51 28L53 33L48 30L43 33L45 28L41 25L46 25Z"
            fill="#FFF89A"
            fillOpacity="0.95"
          />
        </svg>
      </div>

      {/* 6. Little Pastel Gas Giant (Bottom Right) */}
      <div
        className="cosmos-item gas-giant-doodle"
        onClick={handleElementClick}
        title="Pastel Gas Giant"
      >
        <svg width="54" height="54" viewBox="0 0 54 54" fill="none">
          <circle cx="27" cy="27" r="19" fill="#FED7AA" fillOpacity="0.9" />
          <path
            d="M10 24C16 21 38 21 44 24"
            stroke="#FB923C"
            strokeWidth="2"
            strokeLinecap="round"
            strokeOpacity="0.6"
          />
          <path
            d="M9 28C17 26 37 26 45 28"
            stroke="#FFFFFF"
            strokeWidth="2"
            strokeLinecap="round"
            strokeOpacity="0.7"
          />
          <path
            d="M12 32C18 31 36 31 42 32"
            stroke="#EA580C"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeOpacity="0.5"
          />
        </svg>
      </div>

      {/* 7. Cute Chubby Cartoon Sparkle Stars Scattered */}
      <div className="cosmos-item star-chubby s1" onClick={handleElementClick}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 2C12 7.5 7.5 12 2 12C7.5 12 12 16.5 12 22C12 16.5 16.5 12 22 12C16.5 12 12 7.5 12 2Z"
            fill="#FFFFFF"
            fillOpacity="0.95"
          />
        </svg>
      </div>

      <div className="cosmos-item star-chubby s2" onClick={handleElementClick}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 2C12 7.5 7.5 12 2 12C7.5 12 12 16.5 12 22C12 16.5 16.5 12 22 12C16.5 12 12 7.5 12 2Z"
            fill="#FFE599"
            fillOpacity="0.9"
          />
        </svg>
      </div>

      <div className="cosmos-item star-chubby s3" onClick={handleElementClick}>
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 2C12 7.5 7.5 12 2 12C7.5 12 12 16.5 12 22C12 16.5 16.5 12 22 12C16.5 12 12 7.5 12 2Z"
            fill="#C7D2FE"
            fillOpacity="0.95"
          />
        </svg>
      </div>

      <div className="cosmos-item star-chubby s4" onClick={handleElementClick}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 2C12 7.5 7.5 12 2 12C7.5 12 12 16.5 12 22C12 16.5 16.5 12 22 12C16.5 12 12 7.5 12 2Z"
            fill="#FBCFE8"
            fillOpacity="0.85"
          />
        </svg>
      </div>

      <div className="cosmos-item star-chubby s5" onClick={handleElementClick}>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 2C12 7.5 7.5 12 2 12C7.5 12 12 16.5 12 22C12 16.5 16.5 12 22 12C16.5 12 12 7.5 12 2Z"
            fill="#FFFFFF"
            fillOpacity="0.9"
          />
        </svg>
      </div>
    </div>
  );
};

export default SteveCartoonCosmos;
