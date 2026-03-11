"use client";

import { siteConfig } from "@/config/site";
import {
  PhoneMockup,
  ClaudeMessage,
  StepsIndicator,
  UserMessage,
  UsageBanner,
} from "@/components/phone-mockup";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-bg/80 border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-400 to-orange-500" />
            <span className="font-semibold text-lg">{siteConfig.name}</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm">
            <a href="#compare" className="text-muted hover:text-stone-900 transition">
              Why {siteConfig.name}
            </a>
            <a href="#features" className="text-muted hover:text-stone-900 transition">
              Features
            </a>
            <a href="#pricing" className="text-muted hover:text-stone-900 transition">
              Pricing
            </a>
            <a href="#open-source" className="text-muted hover:text-stone-900 transition">
              Open Source
            </a>
          </div>
          <a
            href="#pricing"
            className="bg-stone-900 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-stone-800 transition"
          >
            Get Started
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Your AI dev team.{" "}
              <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
                Always on.
              </span>
            </h1>
            <p className="text-xl text-muted mb-4">{siteConfig.description}</p>
            <p className="text-accent font-medium mb-8">{siteConfig.tagline}</p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#pricing"
                className="bg-stone-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-stone-800 transition"
              >
                Start Building
              </a>
              <a
                href={siteConfig.github}
                className="border border-border px-6 py-3 rounded-lg font-medium hover:bg-card transition"
              >
                View on GitHub
              </a>
            </div>
          </div>
          <div>
            <PhoneMockup>
              <UserMessage>Fix the login bug on the signup page</UserMessage>
              <ClaudeMessage>
                Found the issue — the email validation regex was rejecting valid addresses with plus signs. Fixed and pushed.
              </ClaudeMessage>
              <StepsIndicator label="3 steps" />
              <div className="bg-white border border-stone-200 rounded-xl p-3 w-full">
                <div className="text-xs text-stone-400 mb-1">main · 2 minutes ago</div>
                <div className="font-semibold text-sm mb-1">fix: email validation regex for plus signs</div>
                <div className="text-xs text-stone-400">+3 −1 · src/auth/validate.ts</div>
              </div>
            </PhoneMockup>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section id="compare" className="py-20 px-6 bg-card">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-4">
            Claude Code on the web is good.{" "}
            <span className="text-muted">This is what&apos;s missing.</span>
          </h2>
          <p className="text-center text-muted max-w-2xl mx-auto mb-12">
            Claude Code Web gives you remote access and works great for single tasks. But when you need
            to orchestrate multiple agents, monitor long-running builds, or push code while your laptop
            sleeps—you need {siteConfig.name}.
          </p>

          {/* Comparison Table */}
          <div className="overflow-x-auto mb-12">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-4 px-4 font-semibold">Feature</th>
                  <th className="text-center py-4 px-4 font-semibold">Claude Code Web</th>
                  <th className="text-center py-4 px-4 font-semibold">{siteConfig.name}</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border">
                  <td className="py-4 px-4">Remote access from any device</td>
                  <td className="text-center py-4 px-4 text-green-600">✓</td>
                  <td className="text-center py-4 px-4 text-green-600">✓</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-4">Single task execution</td>
                  <td className="text-center py-4 px-4 text-green-600">✓</td>
                  <td className="text-center py-4 px-4 text-green-600">✓</td>
                </tr>
                <tr className="border-b border-border bg-amber-50">
                  <td className="py-4 px-4 font-medium">Multi-task orchestration</td>
                  <td className="text-center py-4 px-4 text-stone-400">—</td>
                  <td className="text-center py-4 px-4 text-green-600">✓</td>
                </tr>
                <tr className="border-b border-border bg-amber-50">
                  <td className="py-4 px-4 font-medium">Agent babysitting</td>
                  <td className="text-center py-4 px-4 text-stone-400">—</td>
                  <td className="text-center py-4 px-4 text-green-600">✓</td>
                </tr>
                <tr className="border-b border-border bg-amber-50">
                  <td className="py-4 px-4 font-medium">Agent swarms (parallel agents)</td>
                  <td className="text-center py-4 px-4 text-stone-400">—</td>
                  <td className="text-center py-4 px-4 text-green-600">✓</td>
                </tr>
                <tr className="border-b border-border bg-amber-50">
                  <td className="py-4 px-4 font-medium">Process monitoring</td>
                  <td className="text-center py-4 px-4 text-stone-400">—</td>
                  <td className="text-center py-4 px-4 text-green-600">✓</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-4">Persistent VM infrastructure</td>
                  <td className="text-center py-4 px-4 text-stone-400">—</td>
                  <td className="text-center py-4 px-4 text-green-600">✓</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-4">Audit trail and logs</td>
                  <td className="text-center py-4 px-4 text-stone-400">—</td>
                  <td className="text-center py-4 px-4 text-green-600">✓</td>
                </tr>
                <tr className="border-b border-border bg-amber-50">
                  <td className="py-4 px-4 font-medium">Autonomous failure recovery</td>
                  <td className="text-center py-4 px-4 text-stone-400">—</td>
                  <td className="text-center py-4 px-4 text-green-600">✓</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Scenario Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-bg rounded-xl p-6 border border-border">
              <h3 className="font-semibold mb-4">&quot;Review my codebase&quot;</h3>
              <div className="space-y-3">
                <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                  <div className="text-xs text-red-600 font-medium mb-1">Claude Code Web</div>
                  <div className="text-sm text-red-800">
                    6 browser tabs open. Manual copy-paste between files. You babysit each one.
                  </div>
                </div>
                <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                  <div className="text-xs text-green-600 font-medium mb-1">{siteConfig.name}</div>
                  <div className="text-sm text-green-800">
                    One prompt spawns 6 review agents. 8 fix agents follow up. You check results over coffee.
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-bg rounded-xl p-6 border border-border">
              <h3 className="font-semibold mb-4">&quot;Build while I sleep&quot;</h3>
              <div className="space-y-3">
                <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                  <div className="text-xs text-red-600 font-medium mb-1">Claude Code Web</div>
                  <div className="text-sm text-red-800">
                    Build fails at 3am. You wake up to a stale error. Start over from scratch.
                  </div>
                </div>
                <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                  <div className="text-xs text-green-600 font-medium mb-1">{siteConfig.name}</div>
                  <div className="text-sm text-green-800">
                    Claude resumes automatically with partial progress. Build completes. PR ready at breakfast.
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-bg rounded-xl p-6 border border-border">
              <h3 className="font-semibold mb-4">&quot;Is that build running?&quot;</h3>
              <div className="space-y-3">
                <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                  <div className="text-xs text-red-600 font-medium mb-1">Claude Code Web</div>
                  <div className="text-sm text-red-800">
                    Blank screen for 15 minutes. Is it stuck? Thinking? Crashed? No idea.
                  </div>
                </div>
                <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                  <div className="text-xs text-green-600 font-medium mb-1">{siteConfig.name}</div>
                  <div className="text-sm text-green-800">
                    Full process tree. CPU, memory, logs. See exactly what every agent is doing.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-accent-soft rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Bring Your Subscription</h3>
              <p className="text-muted">
                Use your existing Claude Max or API key. No markup, no hidden fees. Your usage, your limits.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent-soft rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Get Your VM</h3>
              <p className="text-muted">
                Dedicated cloud VM with your dev environment. Always running, always ready.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent-soft rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Code From Anywhere</h3>
              <p className="text-muted">
                Dispatch tasks from your phone, tablet, or any browser. Check progress. Push code.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Babysitting Demo */}
      <section className="py-20 px-6 bg-card">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-4">Agent Babysitting in Action</h2>
          <p className="text-center text-muted max-w-2xl mx-auto mb-12">
            Dispatch complex tasks. Monitor progress. Claude handles the rest.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <PhoneMockup>
                <ClaudeMessage>
                  Dispatched. 6 subagents reviewing architecture, errors, style, testing, security, and performance.
                </ClaudeMessage>
                <StepsIndicator label="2 steps" />
                <ClaudeMessage>
                  Review complete. Score: 6.6/10. Three P0 issues. Want me to fix them?
                </ClaudeMessage>
              </PhoneMockup>
              <p className="text-center text-muted text-sm mt-4">
                Dispatch: &quot;Review the entire codebase&quot;
              </p>
            </div>
            <div>
              <PhoneMockup>
                <ClaudeMessage>
                  8 agents working: symlink fix, task pruning, code dedup, path validation, audit logging, dead code, constants, OAuth.
                </ClaudeMessage>
                <StepsIndicator label="4 steps" />
                <ClaudeMessage>
                  All 8 done. 22 files, +956/-642 lines. Tests passing. Pushed to main.
                </ClaudeMessage>
                <UsageBanner percent={72} resetTime="at 3:00 pm" />
              </PhoneMockup>
              <p className="text-center text-muted text-sm mt-4">
                Results: 8 parallel refactors completed and merged
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">Features</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card rounded-xl p-6 border border-border">
              <div className="w-12 h-12 bg-accent-soft rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Phone-First Dev</h3>
              <p className="text-muted">
                Dispatch tasks, review diffs, push code — all from the Claude mobile app. Not just viewing what&apos;s happening, but directing a fleet of AI workers from your pocket.
              </p>
            </div>

            <div className="bg-card rounded-xl p-6 border border-border">
              <div className="w-12 h-12 bg-accent-soft rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Parallel Execution</h3>
              <p className="text-muted">
                Run 15 Claude Code instances simultaneously on isolated git worktrees. Each task gets its own branch. Two features built at once, zero collision risk.
              </p>
            </div>

            <div className="bg-card rounded-xl p-6 border border-border">
              <div className="w-12 h-12 bg-accent-soft rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Agent Babysitting</h3>
              <p className="text-muted">
                Claude dispatches tasks, sleeps while they run, polls for status, handles timeouts, resumes failures automatically, and reports back. You don&apos;t manage processes — Claude does.
              </p>
            </div>

            <div className="bg-card rounded-xl p-6 border border-border">
              <div className="w-12 h-12 bg-accent-soft rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Your Infrastructure</h3>
              <p className="text-muted">
                Dedicated VM you control. Hardened systemd sandboxing, symlink-safe path validation, NoNewPrivileges process isolation. Your code never touches shared infrastructure.
              </p>
            </div>

            <div className="bg-card rounded-xl p-6 border border-border">
              <div className="w-12 h-12 bg-accent-soft rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Process Monitoring</h3>
              <p className="text-muted">
                See the full process tree for every running task: per-process CPU, memory, I/O, and child processes. Watch docker builds, go compiles, and npm installs in real time. No more blank screens during long builds.
              </p>
            </div>

            <div className="bg-card rounded-xl p-6 border border-border">
              <div className="w-12 h-12 bg-accent-soft rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Audit Trail</h3>
              <p className="text-muted">
                Every task, every prompt, every completion logged to persistent JSONL. Suspicious prompt detection flags dangerous patterns. Query by time range, event type, or task ID. SOC 2 ready.
              </p>
            </div>

            <div className="bg-card rounded-xl p-6 border border-border">
              <div className="w-12 h-12 bg-accent-soft rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Bring Your Subscription</h3>
              <p className="text-muted">
                No additional API costs. Cluster Code runs Claude Code instances using your existing Max 20 subscription. You&apos;re already paying $200/month — we make it work 3x harder for $49 more.
              </p>
            </div>

            <div className="bg-card rounded-xl p-6 border border-border">
              <div className="w-12 h-12 bg-accent-soft rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Always On</h3>
              <p className="text-muted">
                Your laptop sleeps. The VM doesn&apos;t. Start a build at 10pm, check results at 6am. The VM has been up for 29 hours straight during our testing. Work continues without you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 px-6 bg-card">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-4">Pricing</h2>
          <p className="text-center text-muted mb-12">
            Simple, transparent pricing. No hidden fees.
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-bg rounded-xl p-6 border border-border">
              <h3 className="text-xl font-semibold mb-2">Developer</h3>
              <div className="flex items-baseline gap-1 mb-4">
                <span className="text-4xl font-bold">$49</span>
                <span className="text-muted">/month</span>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-2 text-sm">
                  <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Dedicated VM
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Phone access
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Agent babysitting
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Parallel agents
                </li>
              </ul>
              <a
                href="#"
                className="block text-center bg-stone-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-stone-800 transition"
              >
                Get Started
              </a>
            </div>

            <div className="bg-bg rounded-xl p-6 border-2 border-accent relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-white text-xs font-medium px-3 py-1 rounded-full">
                Teams
              </div>
              <h3 className="text-xl font-semibold mb-2">Team</h3>
              <div className="flex items-baseline gap-1 mb-4">
                <span className="text-4xl font-bold">$149</span>
                <span className="text-muted">/month</span>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-2 text-sm">
                  <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Everything in Developer
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Up to 5 developers
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Shared VM pool
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Team audit logs
                </li>
              </ul>
              <a
                href="#"
                className="block text-center bg-accent text-white px-6 py-3 rounded-lg font-medium hover:bg-amber-600 transition"
              >
                Get Started
              </a>
            </div>

            <div className="bg-bg rounded-xl p-6 border border-border">
              <h3 className="text-xl font-semibold mb-2">Enterprise</h3>
              <div className="flex items-baseline gap-1 mb-4">
                <span className="text-4xl font-bold">Custom</span>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-2 text-sm">
                  <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Self-hosted option
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Unlimited developers
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  SSO / SAML
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Priority support
                </li>
              </ul>
              <a
                href={`mailto:${siteConfig.contact}`}
                className="block text-center border border-border px-6 py-3 rounded-lg font-medium hover:bg-card transition"
              >
                Contact Sales
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Open Source */}
      <section id="open-source" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Open Source</h2>
              <p className="text-muted mb-6">
                {siteConfig.name} is built on open source. Self-host on your own infrastructure,
                contribute to the project, or just peek under the hood.
              </p>
              <a
                href={siteConfig.github}
                className="inline-flex items-center gap-2 bg-stone-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-stone-800 transition"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                View on GitHub
              </a>
            </div>
            <div className="bg-stone-900 rounded-xl p-6 font-mono text-sm">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-3 h-3 bg-red-500 rounded-full" />
                <span className="w-3 h-3 bg-yellow-500 rounded-full" />
                <span className="w-3 h-3 bg-green-500 rounded-full" />
              </div>
              <div className="text-stone-400">
                <div className="text-green-400">$ git clone {siteConfig.github}</div>
                <div className="mt-2 text-green-400">$ cd vmcode && make build</div>
                <div className="mt-2 text-green-400">$ sudo cp cluster-code /usr/local/bin/</div>
                <div className="mt-2 text-green-400">$ sudo systemctl enable --now cluster-code</div>
                <div className="mt-4 text-stone-500"># Add MCP connector URL to Claude.ai</div>
                <div className="mt-2 text-stone-500"># Start building from your phone</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-6 bg-card">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Stop being tied to your laptop</h2>
          <p className="text-muted mb-8">
            Build from anywhere. Let Claude babysit your agents. Wake up to PRs, not errors.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#pricing"
              className="bg-stone-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-stone-800 transition"
            >
              Get Started
            </a>
            <a
              href={siteConfig.github}
              className="border border-border px-6 py-3 rounded-lg font-medium hover:bg-bg transition"
            >
              View Source
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-400 to-orange-500" />
            <span className="font-semibold">{siteConfig.name}</span>
          </div>
          <div className="flex items-center gap-6 text-sm text-muted">
            <a href={siteConfig.github} className="hover:text-stone-900 transition">
              GitHub
            </a>
            <a href="#" className="hover:text-stone-900 transition">
              Docs
            </a>
            <a href="#" className="hover:text-stone-900 transition">
              Blog
            </a>
            <a href={`mailto:${siteConfig.contact}`} className="hover:text-stone-900 transition">
              Contact
            </a>
          </div>
          <div className="text-sm text-muted">
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
