'use client';
import { useState, useEffect } from 'react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface CountdownTimerProps {
  targetDate: string;
  className?: string;
}

export default function CountdownTimer({ targetDate, className = '' }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [expired, setExpired] = useState(false);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const diff = new Date(targetDate).getTime() - new Date().getTime();
      if (diff <= 0) {
        setExpired(true);
        return;
      }
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / 1000 / 60) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  if (expired) return <span className="text-crimson-400 font-semibold text-sm">Event has passed</span>;

  const units = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Min', value: timeLeft.minutes },
    { label: 'Sec', value: timeLeft.seconds },
  ];

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {units.map(({ label, value }) => (
        <div key={label} className="text-center">
          <div className="bg-navy-800/80 border border-navy-600/50 rounded-lg px-2.5 py-1.5 min-w-[42px]">
            <span className="text-white font-mono font-bold text-lg leading-none block">
              {String(value).padStart(2, '0')}
            </span>
          </div>
          <span className="text-navy-400 text-[10px] mt-0.5 block">{label}</span>
        </div>
      ))}
    </div>
  );
}
