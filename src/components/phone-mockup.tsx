import React from "react";

interface PhoneMockupProps {
  children: React.ReactNode;
}

export function PhoneMockup({ children }: PhoneMockupProps) {
  return (
    <div className="bg-black rounded-[44px] p-[14px] shadow-2xl max-w-[320px] mx-auto">
      <div className="bg-[#F5F5F0] rounded-[30px] overflow-hidden">
        {/* Status bar */}
        <div className="flex justify-between items-center px-6 py-2 text-xs font-medium">
          <span>9:41</span>
          <div className="flex items-center gap-1">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M2 17h2v4H2v-4zm4-5h2v9H6v-9zm4-4h2v13h-2V8zm4-3h2v16h-2V5zm4-2h2v18h-2V3z" />
            </svg>
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <rect x="2" y="7" width="18" height="10" rx="2" />
              <rect x="20" y="10" width="2" height="4" rx="1" />
            </svg>
          </div>
        </div>

        {/* Model bar */}
        <div className="flex items-center justify-between px-4 py-2 border-b border-stone-200">
          <div className="w-8 h-8 bg-stone-200 rounded-full flex items-center justify-center">
            <svg className="w-4 h-4 text-stone-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </div>
          <div className="flex items-center gap-1 text-sm font-medium">
            <span>Opus 4.6</span>
            <svg className="w-4 h-4 text-stone-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
          <button className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
          </button>
        </div>

        {/* Chat area */}
        <div className="min-h-[400px] p-4 space-y-3 flex flex-col items-start">
          {children}
        </div>

        {/* Input bar */}
        <div className="flex items-center gap-2 px-4 py-3 border-t border-stone-200 bg-white">
          <button className="w-8 h-8 bg-stone-100 rounded-full flex items-center justify-center">
            <svg className="w-4 h-4 text-stone-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
          </button>
          <div className="flex-1 bg-stone-100 rounded-full px-4 py-2 text-sm text-stone-400">
            Reply to Claude
          </div>
          <button className="text-lg">
            🎤
          </button>
          <button className="w-8 h-8 bg-stone-800 rounded-full flex items-center justify-center gap-0.5">
            <span className="w-0.5 h-2 bg-white rounded-full"></span>
            <span className="w-0.5 h-3 bg-white rounded-full"></span>
            <span className="w-0.5 h-2 bg-white rounded-full"></span>
          </button>
        </div>
      </div>
    </div>
  );
}

interface ClaudeMessageProps {
  children: React.ReactNode;
}

export function ClaudeMessage({ children }: ClaudeMessageProps) {
  return (
    <div className="text-[17px] leading-relaxed text-stone-900">
      {children}
    </div>
  );
}

interface StepsIndicatorProps {
  label: string;
}

export function UserMessage({ children }: { children: React.ReactNode }) {
  return (
    <div className="self-end max-w-[85%] bg-purple-50 px-4 py-2.5 rounded-2xl rounded-br-sm text-[17px] leading-relaxed">
      {children}
    </div>
  );
}

export function StepsIndicator({ label }: StepsIndicatorProps) {
  return (
    <div className="flex items-center gap-2 text-stone-400 text-sm py-2">
      <svg className="w-4 h-4 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
      <span>{label}</span>
      <svg className="w-4 h-4 ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
    </div>
  );
}

interface UsageBannerProps {
  percent: number;
  resetTime: string;
}

export function UsageBanner({ percent, resetTime }: UsageBannerProps) {
  return (
    <div className="bg-amber-50 rounded-xl p-3 mt-4">
      <div className="flex items-center justify-between text-sm">
        <div>
          <div className="font-medium text-stone-900">{percent}% used</div>
          <div className="text-stone-500 text-xs">Resets {resetTime}</div>
        </div>
        <button className="text-accent text-sm font-medium">
          View usage
        </button>
      </div>
      <div className="mt-2 h-1.5 bg-amber-100 rounded-full overflow-hidden">
        <div
          className="h-full bg-accent rounded-full transition-all"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
}
