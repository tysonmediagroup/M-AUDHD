import React, { useState, useEffect, useCallback } from 'react';
import VectorWordmark from '../components/originkit/ui/vector-wordmark';
import Hyperspace from '../components/originkit/ui/hyperspace';
import InfiniteHole from '../components/originkit/ui/infinite-hole';
import FlowRibbons from '../components/originkit/ui/infinite-tendrils';
import InkCurrent from '../components/originkit/ui/ink-current';
import InteractiveBackground from '../components/originkit/ui/line-ripple-background';
import SmokeVortex from '../components/originkit/ui/liquid-vortex';
import MoireLattice from '../components/originkit/ui/moire-lattice';
import RainPuddle from '../components/originkit/ui/rain-puddle';
import { sound } from './audio';
import BreathingGuide from './BreathingGuide';
import SteveCartoonCosmos from './SteveCartoonCosmos';
import './App.css';

type MainTab = 'home' | 'sensory' | 'emotions' | 'settings';
type Profile = 'Stephen French' | 'Tyler Custine';
type PerfMode = 'smooth' | 'ultra';

type SensoryTool =
  | 'hyperspace'
  | 'infinite-hole'
  | 'infinite-tendrils'
  | 'ink-current'
  | 'line-ripple'
  | 'liquid-vortex'
  | 'moire-lattice'
  | 'rain-puddle';

const TOOLS: { id: SensoryTool; label: string }[] = [
  { id: 'hyperspace', label: 'Hyper Space' },
  { id: 'infinite-hole', label: 'Infinite Hole' },
  { id: 'infinite-tendrils', label: 'Infinite Tendrils' },
  { id: 'ink-current', label: 'Ink Current' },
  { id: 'line-ripple', label: 'Line Ripple' },
  { id: 'liquid-vortex', label: 'Liquid Vortex' },
  { id: 'moire-lattice', label: 'Moire Lattice' },
  { id: 'rain-puddle', label: 'Rain Puddle' },
];

interface DrawingStep {
  image: string;
  caption: string;
}

interface TylerEmotion {
  id: string;
  label: string;
  category: 'core' | '2026';
  screens: string[];
}

type SteveEmotionId = 'overwhelmed' | 'overstimulated' | 'anxious' | 'sad' | 'breathe';

interface SteveEmotionItem {
  id: SteveEmotionId;
  label: string;
}

const TINYMAN_STEPS: DrawingStep[] = [
  {
    image: '/drawings/step1.png',
    caption: 'Hi Steve!',
  },
  {
    image: '/drawings/step2.png',
    caption: "I'm that tiny little guy you drew one time.",
  },
  {
    image: '/drawings/step3.png',
    caption: "Things probably don't feel great right now.",
  },
  {
    image: '/drawings/step4.png',
    caption: "But guess what! It's going to be okay!",
  },
];

const STEVE_EMOTIONS: SteveEmotionItem[] = [
  { id: 'overwhelmed', label: "I'm Feeling Overwhelmed" },
  { id: 'overstimulated', label: "I'm Feeling Overstimulated" },
  { id: 'anxious', label: "I'm Feeling Anxious" },
  { id: 'sad', label: "I'm Feeling Sad" },
  { id: 'breathe', label: "I Need a Moment to Breathe" },
];

const STEVE_OVERSTIMULATED_NOTE = `Steve, 

The staff at school for the most part are REQUIRED to give you a place thats not overwhelming/overstimulating when you need it. 

So just tell one of the teachers what's going on. And hopefully they will help you. 

Hoping the best for ya!

-Tyler`;

const STEVE_ANXIOUS_NOTE = `Hey Steve, I'm always here if you need me.

-Tyler`;

const STEVE_SAD_SCREENS = [
  "Hi Steve!",
  "This is from Tyler...",
  "Your feeling sad?... I am super sorry to hear that, I'm always here for you, you have you friends in the middle school. And of course your family! (Ollie especially)",
  "I'f you are at school, try and talk to me if you are able to. Especially if it's 5th period you should be able to talk to any of the staff in the 100 building cafeteria area and you can talk to me a little bit if you want. :) Hope you feel better."
];

const TYLER_EMOTIONS: TylerEmotion[] = [
  {
    id: 'lonely',
    label: 'I am feeling lonely',
    category: 'core',
    screens: [
      "Listen here Me, you may feel lonely right now but here's the reality... That's bullshit. You are not.",
      "3 years ago in 7th grade, you were alone, you didn't have a single person besides maybe Mr. G. Coming home every night crying yourself to sleep was justifiable then, but not now.",
      "Buck up and get it to gether cuz we aint doin this shit again."
    ]
  },
  {
    id: 'stressed',
    label: 'I am feeling stressed',
    category: 'core',
    screens: [
      "Pause.",
      "It's alright",
      "Face each thing one by one, and things will be okay.",
      "Good Luck."
    ]
  },
  {
    id: 'overstimulated',
    label: 'I am feeling overstimulated',
    category: 'core',
    screens: [
      "Me, why the fuck are you pressing this button you got the headphones use them"
    ]
  },
  {
    id: 'overwhelmed',
    label: 'I am feeling overwhelmed',
    category: 'core',
    screens: [
      "Newsflash, this button isn't any different than it was 2 years ago",
      "If I am at school, go see Mr. Corley or Mr. G",
      "good luck me...."
    ]
  },
  {
    id: 'socially-exhausted',
    label: "I'm feeling socially exhausted",
    category: 'core',
    screens: [
      "Alright myself, you are an amazing soul when you try to talk to all of the persons, but you don't have to do that to mask... that induces anxiety. just giveyourself some time to yourself...."
    ]
  },
  {
    id: 'lonely-2026',
    label: "I'm feeling lonely (2026)",
    category: '2026',
    screens: [
      "Alright c'mon here we go again. Go talk to Ash and introduce yourself, it's been like a week, your trying to make a friend why are you still hitting this button?"
    ]
  },
  {
    id: 'talk-to-oliver',
    label: 'I want to talk to Oliver',
    category: '2026',
    screens: [
      "ME. This aint the way this shit's going, oliver is 8 years old. You are 15. I know he brings lots of awesome positivity and that's great. But HE IS NOT your brother.",
      "Oliver probably isnt looking up to me like an older brother, he is just socializing like every other 8 year old your age. If a \"Brotherly friendship\" is not what steven and ollie want from us, then it sure as hell is not what they need.",
      "So get over it."
    ]
  },
  {
    id: 'talk-to-stephen',
    label: 'I want to talk to Stephen',
    category: '2026',
    screens: [
      "jesus dude... your helping him, hes not your brother.",
      "get over it",
      "help him",
      "be there for him when he needs you."
    ]
  }
];

export function App() {
  // Authentication: Password "tinyman"
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    return localStorage.getItem('steve_authenticated') === 'true';
  });
  const [passwordInput, setPasswordInput] = useState('');
  const [passwordError, setPasswordError] = useState('');

  // Profiles: Stephen French & Tyler Custine
  const [profile, setProfile] = useState<Profile>(() => {
    const saved = localStorage.getItem('steve_profile');
    return saved === 'Tyler Custine' ? 'Tyler Custine' : 'Stephen French';
  });

  // Top Tabs: Home, Sensory, Emotions, Settings
  const [activeTab, setActiveTab] = useState<MainTab>('home');

  // Performance mode: Smooth (optimized for Cloudflare & Retina) vs Ultra
  const [perfMode, setPerfMode] = useState<PerfMode>(() => {
    const saved = localStorage.getItem('steve_perf_mode');
    return saved === 'ultra' ? 'ultra' : 'smooth';
  });

  // UI state: Wordmark intro plays on every launch/refresh
  const [showIntro, setShowIntro] = useState(true);
  const [activeTool, setActiveTool] = useState<SensoryTool>('hyperspace');
  const [isMuted, setIsMuted] = useState(false);

  // Live time and date
  const [currentTime, setCurrentTime] = useState<Date>(new Date());
  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Profile backgrounds
  const [steveBg, setSteveBg] = useState<string>(() => {
    return localStorage.getItem('steve_custom_bg') || '/steve-space-background.jpg';
  });
  const [tylerBg, setTylerBg] = useState<string>(() => {
    return localStorage.getItem('tyler_custom_bg') || '/t5s-project-background.png';
  });

  // Steve's emotion sequence modal state
  const [activeSteveEmotion, setActiveSteveEmotion] = useState<SteveEmotionId | null>(null);
  const [steveStepIndex, setSteveStepIndex] = useState(0);

  // Tyler Custine sequence modal state
  const [activeTylerEmotion, setActiveTylerEmotion] = useState<TylerEmotion | null>(null);
  const [tylerScreenIndex, setTylerScreenIndex] = useState(0);

  // Audio interaction trigger
  useEffect(() => {
    const handleFirstInteraction = () => {
      sound.init();
    };
    window.addEventListener('pointerdown', handleFirstInteraction, { once: true });
    window.addEventListener('keydown', handleFirstInteraction, { once: true });
  }, []);

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (passwordInput.trim().toLowerCase() === 'tinyman') {
      setIsAuthenticated(true);
      localStorage.setItem('steve_authenticated', 'true');
      setPasswordError('');
      sound.playChime(0.3);
    } else {
      setPasswordError('Incorrect password. Please try again.');
    }
  };

  const handleLockApp = () => {
    localStorage.removeItem('steve_authenticated');
    setIsAuthenticated(false);
    setPasswordInput('');
    setPasswordError('');
  };

  const handleProfileSwitch = () => {
    const next: Profile = profile === 'Stephen French' ? 'Tyler Custine' : 'Stephen French';
    setProfile(next);
    localStorage.setItem('steve_profile', next);
    sound.playChime(0.2);
  };

  const handleSelectProfile = (p: Profile) => {
    setProfile(p);
    localStorage.setItem('steve_profile', p);
    sound.playChime(0.2);
  };

  const handleTogglePerfMode = (mode: PerfMode) => {
    setPerfMode(mode);
    localStorage.setItem('steve_perf_mode', mode);
    sound.playChime(0.2);
  };

  const handleToggleMute = () => {
    const muted = sound.toggleMute();
    setIsMuted(muted);
  };

  const handleSelectTool = (id: SensoryTool) => {
    setActiveTool(id);
    sound.playChime(0.25);
  };

  const getSteveMaxSteps = (id: SteveEmotionId): number => {
    if (id === 'overstimulated' || id === 'anxious') return 5;
    if (id === 'overwhelmed') return 4;
    if (id === 'sad') return STEVE_SAD_SCREENS.length;
    return 1;
  };

  const handleStartSteveEmotion = (id: SteveEmotionId) => {
    setActiveSteveEmotion(id);
    setSteveStepIndex(0);
    sound.playChime(0.3);
  };

  const handleNextSteveStep = () => {
    if (!activeSteveEmotion) return;
    const maxSteps = getSteveMaxSteps(activeSteveEmotion);
    if (steveStepIndex < maxSteps - 1) {
      setSteveStepIndex((prev) => prev + 1);
      sound.playChime(0.25);
    } else {
      // Completed sequence: close modal and take to calming sensory view
      setActiveSteveEmotion(null);
      setActiveTab('sensory');
      setActiveTool('hyperspace');
      sound.playChime(0.35);
    }
  };

  const handlePrevSteveStep = () => {
    if (steveStepIndex > 0) {
      setSteveStepIndex((prev) => prev - 1);
      sound.playChime(0.2);
    }
  };

  // Tyler's Emotion Handlers
  const handleStartTylerEmotion = (emotion: TylerEmotion) => {
    setActiveTylerEmotion(emotion);
    setTylerScreenIndex(0);
    sound.playChime(0.3);
  };

  const handleNextTylerStep = () => {
    if (!activeTylerEmotion) return;
    if (tylerScreenIndex < activeTylerEmotion.screens.length - 1) {
      setTylerScreenIndex((prev) => prev + 1);
      sound.playChime(0.25);
    } else {
      setActiveTylerEmotion(null);
      sound.playChime(0.35);
    }
  };

  const handlePrevTylerStep = () => {
    if (tylerScreenIndex > 0) {
      setTylerScreenIndex((prev) => prev - 1);
      sound.playChime(0.2);
    }
  };

  const handleBgUpload = (e: React.ChangeEvent<HTMLInputElement>, target: Profile) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        if (result) {
          if (target === 'Stephen French') {
            setSteveBg(result);
            localStorage.setItem('steve_custom_bg', result);
          } else {
            setTylerBg(result);
            localStorage.setItem('tyler_custom_bg', result);
          }
          sound.playChime(0.3);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  // Keyboard navigation for sequence modals
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (activeSteveEmotion && activeSteveEmotion !== 'breathe') {
        if (e.key === 'ArrowRight' || e.key === ' ') {
          handleNextSteveStep();
        } else if (e.key === 'ArrowLeft') {
          handlePrevSteveStep();
        } else if (e.key === 'Escape') {
          setActiveSteveEmotion(null);
        }
      } else if (activeTylerEmotion) {
        if (e.key === 'ArrowRight' || e.key === ' ') {
          handleNextTylerStep();
        } else if (e.key === 'ArrowLeft') {
          handlePrevTylerStep();
        } else if (e.key === 'Escape') {
          setActiveTylerEmotion(null);
        }
      }
    },
    [activeSteveEmotion, steveStepIndex, activeTylerEmotion, tylerScreenIndex]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  // Compute Greeting based on time & profile
  const hours = currentTime.getHours();
  const timeGreeting =
    hours >= 5 && hours < 12
      ? 'Good Morning'
      : hours >= 12 && hours < 17
      ? 'Good Afternoon'
      : hours >= 17 && hours < 22
      ? 'Good Evening'
      : 'Late Night';

  const greeting =
    profile === 'Stephen French'
      ? 'Hi Steve!'
      : `${timeGreeting}, Tyler.`;

  const timeString = currentTime.toLocaleTimeString([], {
    hour: 'numeric',
    minute: '2-digit',
    second: '2-digit',
  });

  const dateString = currentTime.toLocaleDateString([], {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  // If not authenticated, display the tinyman password screen
  if (!isAuthenticated) {
    return (
      <div className="lock-screen">
        <div className="cosmic-stars" />
        <div className="lock-card">
          <h1 className="lock-title">MYT5S</h1>
          <p className="lock-subtitle">Stephen French &bull; Tyler Custine</p>
          <form className="lock-form" onSubmit={handlePasswordSubmit}>
            <input
              type="password"
              className="lock-input"
              placeholder="Enter site password"
              value={passwordInput}
              onChange={(e) => setPasswordInput(e.target.value)}
              autoFocus
            />
            {passwordError && <p className="lock-error">{passwordError}</p>}
            <button type="submit" className="lock-btn">
              Unlock Space
            </button>
          </form>
        </div>
        <img id="tyson-banner" src="/TYSONMediaGroupBanner.png" alt="TYSON Media Group" />
      </div>
    );
  }

  return (
    <div className="app-container">
      {/* Subtle cosmic space stardust background for Steve (outside sensory) */}
      {profile === 'Stephen French' && activeTab !== 'sensory' && <div className="cosmic-stars" />}

      {/* Cartoonish stars, planets, and space doodles for Steve everywhere EXCEPT Sensory */}
      {profile === 'Stephen French' && !showIntro && activeTab !== 'sensory' && <SteveCartoonCosmos />}

      {/* 1. Intro Animation: OriginKit Vector Wordmark */}
      <div className={`intro-overlay ${showIntro ? '' : 'hidden'}`}>
        <div className="cosmic-stars" />
        <div className="intro-wordmark-wrap">
          <VectorWordmark
            text="Steve French - Tyler Custine"
            font={{
              fontFamily: "'Cormorant Garamond', Garamond, serif",
              fontWeight: 600,
              fontSize: '60px',
              letterSpacing: '0.03em',
            }}
            background="#000000"
            textColor="#ffffff"
            shade="#ffffff"
            accent="#ffffff"
            reach={360}
            speed={45}
            style={{
              minWidth: '100%',
              minHeight: '100%',
              width: '100%',
              height: '100%',
            }}
          />
        </div>
        <div className="intro-cta">
          <button
            className="intro-enter-btn"
            onClick={() => {
              setShowIntro(false);
              setActiveTab('home');
              sound.playChime(0.3);
            }}
          >
            Enter
          </button>
          <span className="intro-hint">OriginKit Sensory Experience</span>
        </div>
      </div>

      {/* 2. Top Header Navigation (Home, Sensory, Emotions, Settings) */}
      <header className="top-header">
        <div className="brand-section">
          <span
            className="brand-title"
            onClick={() => {
              setActiveTab('home');
              sound.playChime(0.2);
            }}
            title="Go to Home"
          >
            {profile}
          </span>
        </div>

        {/* Desktop Main Navigation Tabs */}
        <nav className="main-nav desktop-only">
          <button
            className={`nav-tab ${activeTab === 'home' ? 'active' : ''}`}
            onClick={() => {
              setActiveTab('home');
              sound.playChime(0.2);
            }}
          >
            Home
          </button>
          <button
            className={`nav-tab ${activeTab === 'sensory' ? 'active' : ''}`}
            onClick={() => {
              setActiveTab('sensory');
              sound.playChime(0.2);
            }}
          >
            Sensory
          </button>
          <button
            className={`nav-tab ${activeTab === 'emotions' ? 'active' : ''}`}
            onClick={() => {
              setActiveTab('emotions');
              sound.playChime(0.2);
            }}
          >
            Emotions
          </button>
          <button
            className={`nav-tab ${activeTab === 'settings' ? 'active' : ''}`}
            onClick={() => {
              setActiveTab('settings');
              sound.playChime(0.2);
            }}
          >
            Settings
          </button>
        </nav>

        {/* Quick action controls for mobile & desktop */}
        <div className="header-actions">
          <button
            className="quick-audio-btn"
            onClick={handleToggleMute}
            title={isMuted ? 'Unmute chimes' : 'Mute chimes'}
          >
            {isMuted ? 'Muted' : 'Sound'}
          </button>
          <div className="profile-pill" onClick={handleProfileSwitch} title="Click to switch profile">
            <span className="profile-name">{profile}</span>
            <span className="profile-switch-hint">Switch</span>
          </div>
        </div>
      </header>

      {/* 3. Section: HOME VIEW */}
      {activeTab === 'home' && (
        <section className="home-view">
          {profile === 'Stephen French' && steveBg && (
            <div
              className="profile-bg-layer"
              style={{ backgroundImage: `url(${steveBg})` }}
            />
          )}
          {profile === 'Tyler Custine' && tylerBg && (
            <div
              className="profile-bg-layer"
              style={{ backgroundImage: `url(${tylerBg})` }}
            />
          )}
          <div className="home-vignette" />

          <div className="home-content">
            {profile === 'Stephen French' && (
              <div className="space-telemetry-badge">
                ✦ DEEP SPACE ORBIT &bull; SECTOR 7 ✦
              </div>
            )}

            <h1 className="home-greeting">{greeting}</h1>

            <div className="home-time-block">
              <div className="home-clock">{timeString}</div>
              <div className="home-date">{dateString}</div>
            </div>

            {profile === 'Stephen French' ? (
              <div className="home-space-quote">
                <p>
                  "Out here among the stars, everything slows down. Take your time, breathe easy, and explore at your own pace."
                </p>
                <div className="home-actions">
                  <button
                    className="glow-btn"
                    onClick={() => {
                      setActiveTab('sensory');
                      setActiveTool('hyperspace');
                      sound.playChime(0.25);
                    }}
                  >
                    Enter Hyper Space &rarr;
                  </button>
                  <button
                    className="glow-btn"
                    onClick={() => {
                      setActiveTab('emotions');
                      sound.playChime(0.25);
                    }}
                  >
                    Emotional Space &rarr;
                  </button>
                  <label className="glow-btn upload-btn">
                    Upload Space Image
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleBgUpload(e, 'Stephen French')}
                      style={{ display: 'none' }}
                    />
                  </label>
                </div>
              </div>
            ) : (
              <div className="home-space-quote">
                <p>
                  Welcome back. Take a quiet breath and enjoy the space.
                </p>
                <div className="home-actions">
                  <button
                    className="glow-btn"
                    onClick={() => {
                      setActiveTab('sensory');
                      sound.playChime(0.25);
                    }}
                  >
                    Open Sensory Toolkit &rarr;
                  </button>
                  <label className="glow-btn upload-btn">
                    Upload Profile Background
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleBgUpload(e, 'Tyler Custine')}
                      style={{ display: 'none' }}
                    />
                  </label>
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      {/* 4. Section: SENSORY VIEW */}
      {activeTab === 'sensory' && (
        <>
          <main className="canvas-viewport" onPointerDown={() => sound.playChime(0.2)}>
            {activeTool === 'hyperspace' && (
              <Hyperspace
                background="#000000"
                baseColor="#FFFFFF"
                accentColor="#C7D2FE"
                density={perfMode === 'smooth' ? 300 : 800}
                speed={perfMode === 'smooth' ? 24 : 35}
                style={{ width: '100%', height: '100%' }}
              />
            )}
            {activeTool === 'infinite-hole' && (
              <InfiniteHole
                background="#000000"
                columns={perfMode === 'smooth' ? 32 : 48}
                rows={perfMode === 'smooth' ? 32 : 48}
                style={{ width: '100%', height: '100%' }}
              />
            )}
            {activeTool === 'infinite-tendrils' && (
              <FlowRibbons style={{ width: '100%', height: '100%' }} />
            )}
            {activeTool === 'ink-current' && (
              <InkCurrent background="#000000" style={{ width: '100%', height: '100%' }} />
            )}
            {activeTool === 'line-ripple' && (
              <InteractiveBackground backgroundColor="#000000" strokeColor="#ffffff" />
            )}
            {activeTool === 'liquid-vortex' && (
              <SmokeVortex style={{ width: '100%', height: '100%' }} />
            )}
            {activeTool === 'moire-lattice' && (
              <MoireLattice background="#000000" style={{ width: '100%', height: '100%' }} />
            )}
            {activeTool === 'rain-puddle' && (
              <RainPuddle background="#000000" style={{ width: '100%', height: '100%' }} />
            )}
          </main>

          {/* Sensory Tools Bottom Dock */}
          <footer className="bottom-dock-container">
            <nav className="dock">
              {TOOLS.map((t) => (
                <button
                  key={t.id}
                  className={`dock-tab ${activeTool === t.id ? 'active' : ''}`}
                  onClick={() => handleSelectTool(t.id)}
                >
                  {t.label}
                </button>
              ))}
            </nav>
          </footer>
        </>
      )}

      {/* 5. Section: EMOTIONS VIEW */}
      {activeTab === 'emotions' && (
        <section className="emotions-view">
          <div className="emotions-card tyler-emotions-wrapper">
            <div className="emotions-header">
              <h2>{profile === 'Stephen French' ? 'How are you feeling right now?' : 'Emotions & Reality Checks'}</h2>
              <p>
                {profile === 'Stephen French'
                  ? 'For Stephen French \u2014 take a gentle pause.'
                  : 'For Tyler Custine \u2014 honest reflection & grounding sequences.'}
              </p>
            </div>

            {profile === 'Stephen French' ? (
              <div className="emotions-grid">
                {STEVE_EMOTIONS.map((item) => (
                  <button
                    key={item.id}
                    className="emotion-btn"
                    onClick={() => handleStartSteveEmotion(item.id)}
                  >
                    <span>{item.label}</span>
                    <span className="emotion-arrow">&rarr;</span>
                  </button>
                ))}
              </div>
            ) : (
              <div className="tyler-emotions-sections">
                <div className="tyler-category-block">
                  <div className="category-header-bar">
                    <span className="category-title">Core Emotions</span>
                  </div>
                  <div className="emotions-grid">
                    {TYLER_EMOTIONS.filter((e) => e.category === 'core').map((emotion) => (
                      <button
                        key={emotion.id}
                        className="emotion-btn tyler-emotion-btn"
                        onClick={() => handleStartTylerEmotion(emotion)}
                      >
                        <span>{emotion.label}</span>
                        <span className="emotion-arrow">&rarr;</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="tyler-category-block" style={{ marginTop: '28px' }}>
                  <div className="category-header-bar">
                    <span className="category-title">2026 Additions</span>
                  </div>
                  <div className="emotions-grid">
                    {TYLER_EMOTIONS.filter((e) => e.category === '2026').map((emotion) => (
                      <button
                        key={emotion.id}
                        className="emotion-btn tyler-emotion-btn"
                        onClick={() => handleStartTylerEmotion(emotion)}
                      >
                        <span>{emotion.label}</span>
                        <span className="emotion-arrow">&rarr;</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      {/* 6. Section: SETTINGS VIEW */}
      {activeTab === 'settings' && (
        <section className="settings-view">
          <div className="settings-card">
            <div className="settings-header">
              <h2>Space Settings</h2>
              <p>Tailor your sensory experience and active profile.</p>
            </div>

            {/* Profile Selection */}
            <div className="settings-group">
              <span className="settings-label">Active Profile</span>
              <div className="settings-options">
                <button
                  className={`settings-toggle-btn ${profile === 'Stephen French' ? 'active' : ''}`}
                  onClick={() => handleSelectProfile('Stephen French')}
                >
                  Stephen French
                </button>
                <button
                  className={`settings-toggle-btn ${profile === 'Tyler Custine' ? 'active' : ''}`}
                  onClick={() => handleSelectProfile('Tyler Custine')}
                >
                  Tyler Custine
                </button>
              </div>
              <span className="settings-desc">Switch profiles instantly without a password.</span>
            </div>

            {/* Steve's Space Background Option */}
            {profile === 'Stephen French' && (
              <div className="settings-group">
                <span className="settings-label">Space Background</span>
                <div className="settings-options">
                  <label className="settings-toggle-btn active" style={{ textAlign: 'center', cursor: 'pointer' }}>
                    Upload New Space Image
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleBgUpload(e, 'Stephen French')}
                      style={{ display: 'none' }}
                    />
                  </label>
                  <button
                    className="settings-toggle-btn"
                    onClick={() => {
                      setSteveBg('/steve-space-background.jpg');
                      localStorage.setItem('steve_custom_bg', '/steve-space-background.jpg');
                      sound.playChime(0.2);
                    }}
                  >
                    Reset to Deep Nebula
                  </button>
                </div>
                <span className="settings-desc">Choose a personal cosmic wallpaper or restore the deep space nebula.</span>
              </div>
            )}

            {/* Tyler's Profile Background Option */}
            {profile === 'Tyler Custine' && (
              <div className="settings-group">
                <span className="settings-label">Profile Background</span>
                <div className="settings-options">
                  <label className="settings-toggle-btn active" style={{ textAlign: 'center', cursor: 'pointer' }}>
                    Upload New Background Image
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleBgUpload(e, 'Tyler Custine')}
                      style={{ display: 'none' }}
                    />
                  </label>
                  <button
                    className="settings-toggle-btn"
                    onClick={() => {
                      setTylerBg('/t5s-project-background.png');
                      localStorage.setItem('tyler_custom_bg', '/t5s-project-background.png');
                      sound.playChime(0.2);
                    }}
                  >
                    Reset to Default
                  </button>
                </div>
                <span className="settings-desc">Upload any picture to display behind your profile.</span>
              </div>
            )}

            {/* Performance Optimization */}
            <div className="settings-group">
              <span className="settings-label">Performance Mode</span>
              <div className="settings-options">
                <button
                  className={`settings-toggle-btn ${perfMode === 'smooth' ? 'active' : ''}`}
                  onClick={() => handleTogglePerfMode('smooth')}
                >
                  Smooth (High FPS)
                </button>
                <button
                  className={`settings-toggle-btn ${perfMode === 'ultra' ? 'active' : ''}`}
                  onClick={() => handleTogglePerfMode('ultra')}
                >
                  Ultra (Full Density)
                </button>
              </div>
              <span className="settings-desc">
                Smooth reduces particle density to avoid stutter and lag on Retina displays.
              </span>
            </div>

            {/* Audio Settings */}
            <div className="settings-group">
              <span className="settings-label">Acoustic Chimes</span>
              <div className="settings-options">
                <button
                  className={`settings-toggle-btn ${!isMuted ? 'active' : ''}`}
                  onClick={() => {
                    if (isMuted) handleToggleMute();
                  }}
                >
                  Audio Enabled
                </button>
                <button
                  className={`settings-toggle-btn ${isMuted ? 'active' : ''}`}
                  onClick={() => {
                    if (!isMuted) handleToggleMute();
                  }}
                >
                  Muted
                </button>
              </div>
              <span className="settings-desc">Soft, calming pentatonic sine chime feedback.</span>
            </div>

            {/* Replay Intro & Security */}
            <div className="settings-group">
              <span className="settings-label">System Actions</span>
              <div className="settings-options">
                <button
                  className="settings-toggle-btn"
                  onClick={() => {
                    setShowIntro(true);
                    sound.playChime(0.2);
                  }}
                >
                  Replay Wordmark Intro
                </button>
                <button className="settings-toggle-btn" onClick={handleLockApp}>
                  Lock Space
                </button>
              </div>
              <span className="settings-desc">Locking requires the "tinyman" password to re-enter.</span>
            </div>
          </div>
        </section>
      )}

      {/* 7. Steve's Emotion Modals */}
      {/* 7a. Breathing Guide */}
      {activeSteveEmotion === 'breathe' && (
        <BreathingGuide
          onClose={() => setActiveSteveEmotion(null)}
          onFinish={() => {
            setActiveSteveEmotion(null);
            setActiveTab('sensory');
            setActiveTool('hyperspace');
            sound.playChime(0.35);
          }}
        />
      )}

      {/* 7b. Steve's Sad Emotion Sequence (4 Text Screens from Tyler) */}
      {activeSteveEmotion === 'sad' && (
        <div className="tinyman-modal tyler-modal-overlay">
          <button
            className="close-modal-btn"
            onClick={() => setActiveSteveEmotion(null)}
            title="Close (Esc)"
          >
            Close &times;
          </button>

          <div className="tyler-sequence-container">
            <div className="tyler-modal-header">
              <span className="tyler-badge">For Steve French &bull; From Tyler</span>
              <h2 className="tyler-modal-title">I'm Feeling Sad</h2>
              <span className="tyler-screen-count">
                Screen {steveStepIndex + 1} of {STEVE_SAD_SCREENS.length}
              </span>
            </div>

            <div key={steveStepIndex} className="tyler-text-card animate-text-fade">
              <p className="tyler-raw-text">
                "{STEVE_SAD_SCREENS[steveStepIndex]}"
              </p>
            </div>

            <div className="sequence-nav">
              <button
                className="seq-btn"
                onClick={handlePrevSteveStep}
                disabled={steveStepIndex === 0}
                style={{
                  opacity: steveStepIndex === 0 ? 0.35 : 1,
                  cursor: steveStepIndex === 0 ? 'default' : 'pointer',
                }}
              >
                &larr; Back
              </button>

              <div className="seq-indicators">
                {STEVE_SAD_SCREENS.map((_, idx) => (
                  <div
                    key={idx}
                    className={`seq-dot ${idx === steveStepIndex ? 'active' : ''}`}
                    onClick={() => {
                      setSteveStepIndex(idx);
                      sound.playChime(0.2);
                    }}
                    style={{ cursor: 'pointer' }}
                  />
                ))}
              </div>

              <button className="seq-btn primary" onClick={handleNextSteveStep}>
                {steveStepIndex === STEVE_SAD_SCREENS.length - 1
                  ? 'Finish & Ground \u2192'
                  : 'Next Screen \u2192'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 7c. Steve's Drawings & Notes Sequences (Overwhelmed, Overstimulated, Anxious) */}
      {activeSteveEmotion && (activeSteveEmotion === 'overwhelmed' || activeSteveEmotion === 'overstimulated' || activeSteveEmotion === 'anxious') && (
        <div className="tinyman-modal">
          <button
            className="close-modal-btn"
            onClick={() => setActiveSteveEmotion(null)}
            title="Close (Esc)"
          >
            Close &times;
          </button>

          <div className="tinyman-container">
            {/* If step is within the 4 drawings (0..3) */}
            {steveStepIndex < 4 ? (
              <>
                <div className="drawing-frame">
                  <img
                    src={TINYMAN_STEPS[steveStepIndex].image}
                    alt={TINYMAN_STEPS[steveStepIndex].caption}
                    className="drawing-img"
                  />
                </div>

                <h2 className="drawing-caption">{TINYMAN_STEPS[steveStepIndex].caption}</h2>
              </>
            ) : (
              /* Step 4: Fade to Tyler's personal note */
              <div key="note-step" className="steve-note-card animate-text-fade">
                <div style={{ marginBottom: '18px' }}>
                  <span className="tyler-badge">A Note From Tyler</span>
                </div>
                <p className="steve-note-text">
                  {activeSteveEmotion === 'overstimulated' ? STEVE_OVERSTIMULATED_NOTE : STEVE_ANXIOUS_NOTE}
                </p>
              </div>
            )}

            <div className="sequence-nav">
              <button
                className="seq-btn"
                onClick={handlePrevSteveStep}
                disabled={steveStepIndex === 0}
                style={{
                  opacity: steveStepIndex === 0 ? 0.35 : 1,
                  cursor: steveStepIndex === 0 ? 'default' : 'pointer',
                }}
              >
                &larr; Back
              </button>

              <div className="seq-indicators">
                {Array.from({ length: getSteveMaxSteps(activeSteveEmotion) }).map((_, idx) => (
                  <div
                    key={idx}
                    className={`seq-dot ${idx === steveStepIndex ? 'active' : ''}`}
                    onClick={() => {
                      setSteveStepIndex(idx);
                      sound.playChime(0.2);
                    }}
                    style={{ cursor: 'pointer' }}
                  />
                ))}
              </div>

              <button className="seq-btn primary" onClick={handleNextSteveStep}>
                {steveStepIndex === getSteveMaxSteps(activeSteveEmotion) - 1
                  ? 'Finish & Relax \u2192'
                  : steveStepIndex === 3 && (activeSteveEmotion === 'overstimulated' || activeSteveEmotion === 'anxious')
                  ? 'Next & Note \u2192'
                  : 'Next \u2192'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 7b. Tyler's Emotion & Reality Check Text Sequence Modal */}
      {activeTylerEmotion && (
        <div className="tinyman-modal tyler-modal-overlay">
          <button
            className="close-modal-btn"
            onClick={() => setActiveTylerEmotion(null)}
            title="Close (Esc)"
          >
            Close &times;
          </button>

          <div className="tyler-sequence-container">
            <div className="tyler-modal-header">
              <span className="tyler-badge">
                {activeTylerEmotion.category === '2026' ? '2026 Addition' : 'Reality Check'}
              </span>
              <h2 className="tyler-modal-title">{activeTylerEmotion.label}</h2>
              <span className="tyler-screen-count">
                Screen {tylerScreenIndex + 1} of {activeTylerEmotion.screens.length}
              </span>
            </div>

            <div key={tylerScreenIndex} className="tyler-text-card animate-text-fade">
              <p className="tyler-raw-text">
                "{activeTylerEmotion.screens[tylerScreenIndex]}"
              </p>
            </div>

            <div className="sequence-nav">
              <button
                className="seq-btn"
                onClick={handlePrevTylerStep}
                disabled={tylerScreenIndex === 0}
                style={{
                  opacity: tylerScreenIndex === 0 ? 0.35 : 1,
                  cursor: tylerScreenIndex === 0 ? 'default' : 'pointer',
                }}
              >
                &larr; Back
              </button>

              <div className="seq-indicators">
                {activeTylerEmotion.screens.map((_, idx) => (
                  <div
                    key={idx}
                    className={`seq-dot ${idx === tylerScreenIndex ? 'active' : ''}`}
                    onClick={() => {
                      setTylerScreenIndex(idx);
                      sound.playChime(0.2);
                    }}
                    style={{ cursor: 'pointer' }}
                  />
                ))}
              </div>

              <button className="seq-btn primary" onClick={handleNextTylerStep}>
                {tylerScreenIndex === activeTylerEmotion.screens.length - 1
                  ? 'Finish & Ground \u2192'
                  : 'Next Screen \u2192'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 8. Mobile Bottom Navigation Bar */}
      <nav className="mobile-bottom-nav">
        <button
          className={`mobile-nav-tab ${activeTab === 'home' ? 'active' : ''}`}
          onClick={() => {
            setActiveTab('home');
            sound.playChime(0.2);
          }}
          aria-label="Home"
        >
          <span className="mobile-tab-label">Home</span>
        </button>
        <button
          className={`mobile-nav-tab ${activeTab === 'sensory' ? 'active' : ''}`}
          onClick={() => {
            setActiveTab('sensory');
            sound.playChime(0.2);
          }}
          aria-label="Sensory"
        >
          <span className="mobile-tab-label">Sensory</span>
        </button>
        <button
          className={`mobile-nav-tab ${activeTab === 'emotions' ? 'active' : ''}`}
          onClick={() => {
            setActiveTab('emotions');
            sound.playChime(0.2);
          }}
          aria-label="Emotions"
        >
          <span className="mobile-tab-label">Emotions</span>
        </button>
        <button
          className={`mobile-nav-tab ${activeTab === 'settings' ? 'active' : ''}`}
          onClick={() => {
            setActiveTab('settings');
            sound.playChime(0.2);
          }}
          aria-label="Settings"
        >
          <span className="mobile-tab-label">Settings</span>
        </button>
      </nav>

      {/* 9. TYSON Media Group Banner Logo (Discreet on mobile) */}
      <img id="tyson-banner" src="/TYSONMediaGroupBanner.png" alt="TYSON Media Group" />
    </div>
  );
}

export default App;
