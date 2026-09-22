import React, { useState, useEffect } from 'react';
import { sound } from './audio';

interface BreathingGuideProps {
  onClose: () => void;
  onFinish: () => void;
}

type BreathingPhase = 'inhale' | 'hold' | 'exhale' | 'rest';

const PHASE_DURATIONS: Record<BreathingPhase, number> = {
  inhale: 4,
  hold: 4,
  exhale: 4,
  rest: 2,
};

const PHASE_LABELS: Record<BreathingPhase, { title: string; hint: string }> = {
  inhale: {
    title: 'Breathe In Slowly...',
    hint: 'Fill your lungs gently through your nose.',
  },
  hold: {
    title: 'Hold Gently...',
    hint: 'Keep the air softly inside without straining.',
  },
  exhale: {
    title: 'Release & Breathe Out...',
    hint: 'Let all the air gently leave through your mouth.',
  },
  rest: {
    title: 'Rest...',
    hint: 'Feel your shoulders soften and relax.',
  },
};

export const BreathingGuide: React.FC<BreathingGuideProps> = ({ onClose, onFinish }) => {
  // Stage: 'initial_message' -> 'breathing'
  const [stage, setStage] = useState<'message' | 'breathing'>('message');
  const [phase, setPhase] = useState<BreathingPhase>('inhale');
  const [secondsLeft, setSecondsLeft] = useState<number>(PHASE_DURATIONS.inhale);
  const [completedCycles, setCompletedCycles] = useState(0);

  // 1. Initial 2-second message: "It's going to be alright."
  useEffect(() => {
    const timer = setTimeout(() => {
      setStage('breathing');
      sound.playChime(0.2);
    }, 2200);

    return () => clearTimeout(timer);
  }, []);

  // 2. Breathing Cycle Timer
  useEffect(() => {
    if (stage !== 'breathing') return;

    const interval = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev > 1) {
          return prev - 1;
        }

        // Transition to next phase
        let nextPhase: BreathingPhase = 'inhale';
        if (phase === 'inhale') nextPhase = 'hold';
        else if (phase === 'hold') nextPhase = 'exhale';
        else if (phase === 'exhale') nextPhase = 'rest';
        else if (phase === 'rest') {
          nextPhase = 'inhale';
          setCompletedCycles((c) => c + 1);
        }

        setPhase(nextPhase);
        sound.playChime(0.16);
        return PHASE_DURATIONS[nextPhase];
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [stage, phase]);

  // Keyboard support: Escape closes, Space/Enter finishes
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === ' ' || e.key === 'Enter') {
        onFinish();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onFinish]);

  return (
    <div className="tinyman-modal breathing-modal-overlay">
      <button className="close-modal-btn" onClick={onClose} title="Close (Esc)">
        Close &times;
      </button>

      {stage === 'message' ? (
        <div className="breathing-initial-card animate-text-fade">
          <p className="breathing-initial-text">It's going to be alright.</p>
          <span className="breathing-initial-sub">Take this moment for yourself...</span>
        </div>
      ) : (
        <div className="breathing-guide-container animate-text-fade">
          <div className="breathing-header">
            <span className="breathing-badge">Steve's Calming Breath</span>
            <h2 className="breathing-phase-title">{PHASE_LABELS[phase].title}</h2>
            <p className="breathing-hint">{PHASE_LABELS[phase].hint}</p>
          </div>

          {/* Visual Breathing Orb */}
          <div className="breathing-visual-stage">
            <div className={`breathing-halo phase-${phase}`} />
            <div className={`breathing-orb phase-${phase}`}>
              <div className="orb-inner-core">
                <span className="breathing-counter">{secondsLeft}s</span>
              </div>
            </div>
          </div>

          <div className="breathing-footer">
            <span className="breathing-cycle-status">
              {completedCycles > 0 ? `Completed cycles: ${completedCycles}` : 'Follow the light...'}
            </span>
            <div className="sequence-nav" style={{ marginTop: '12px' }}>
              <button
                className="seq-btn primary"
                onClick={onFinish}
                title="Finish breathing and enter sensory space"
              >
                I Feel Calmer Now &rarr;
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BreathingGuide;
