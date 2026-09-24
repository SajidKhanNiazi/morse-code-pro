// Morse Code Audio Player using Web Audio API

class MorseSoundEngine {
  private ctx: AudioContext | null = null;
  private isPlaying: boolean = false;
  private currentStopCallback: (() => void) | null = null;

  private getAudioContext(): AudioContext {
    if (!this.ctx || this.ctx.state === 'closed') {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
    return this.ctx;
  }

  public stop() {
    this.isPlaying = false;
    if (this.currentStopCallback) {
      this.currentStopCallback();
      this.currentStopCallback = null;
    }
    if (this.ctx && this.ctx.state !== 'closed') {
      try {
        this.ctx.close();
      } catch {
        // ignore
      }
      this.ctx = null;
    }
  }

  public getIsPlaying(): boolean {
    return this.isPlaying;
  }

  /**
   * Play a brief beep of given duration in ms
   */
  public async playBeep(durationMs: number, frequency: number = 650): Promise<void> {
    const ctx = this.getAudioContext();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(frequency, ctx.currentTime);

    const now = ctx.currentTime;
    const durationSec = durationMs / 1000;

    // Smooth envelope attack and decay to prevent audio pops
    gain.gain.setValueAtTime(0, now);
    gain.gain.linearRampToValueAtTime(0.2, now + 0.005);
    gain.gain.setValueAtTime(0.2, now + durationSec - 0.005);
    gain.gain.linearRampToValueAtTime(0, now + durationSec);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + durationSec);

    return new Promise((resolve) => {
      setTimeout(resolve, durationMs);
    });
  }

  /**
   * Play full morse string with events
   */
  public async playMorseSequence(
    morse: string,
    wpm: number = 18,
    frequency: number = 650,
    onProgress?: (index: number, char: string) => void,
    onComplete?: () => void
  ): Promise<void> {
    this.stop();
    this.isPlaying = true;

    let stopped = false;
    this.currentStopCallback = () => {
      stopped = true;
      if (onComplete) onComplete();
    };

    const ditSec = 1.2 / Math.max(5, Math.min(35, wpm));
    const ditMs = ditSec * 1000;
    const dahMs = ditMs * 3;
    const intraCharGapMs = ditMs; // 1 unit gap between dits/dahs within a character
    const letterGapMs = ditMs * 3; // 3 units gap between letters
    const wordGapMs = ditMs * 7; // 7 units gap between words

    const sleep = (ms: number) =>
      new Promise<void>((resolve) => {
        const timer = setTimeout(() => resolve(), ms);
        if (stopped) clearTimeout(timer);
      });

    try {
      for (let i = 0; i < morse.length; i++) {
        if (!this.isPlaying || stopped) break;
        const char = morse[i];

        if (onProgress) onProgress(i, char);

        if (char === '.') {
          await this.playBeep(ditMs, frequency);
          await sleep(intraCharGapMs);
        } else if (char === '-') {
          await this.playBeep(dahMs, frequency);
          await sleep(intraCharGapMs);
        } else if (char === ' ') {
          // Space between letters: 3 units total (we already waited 1 unit)
          await sleep(Math.max(0, letterGapMs - intraCharGapMs));
        } else if (char === '/') {
          // Space between words: 7 units total
          await sleep(Math.max(0, wordGapMs - intraCharGapMs));
        }
      }
    } catch {
      // safely handled
    } finally {
      this.isPlaying = false;
      this.currentStopCallback = null;
      if (onComplete) onComplete();
    }
  }
}

export const morseAudio = new MorseSoundEngine();
