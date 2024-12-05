'use client';
import { useEffect, useRef } from 'react';

export default function Background() {
    // canvasの参照を保持するためのref
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        if (!canvasRef.current) return;

        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        // ウィンドウサイズに合わせてcanvasをリサイズする関数
        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        // マウス座標を追跡するためのオブジェクト
        let mouse: { x: number | undefined; y: number | undefined } = {
            x: undefined,
            y: undefined
        };

        // マウスの移動を検知してmouseオブジェクトを更新
        window.addEventListener('mousemove', (event) => {
            mouse.x = event.x;
            mouse.y = event.y;
        });

        // パーティクルのクラス定義
        class Particle {
            // パーティクルの属性を定義
            x: number;                  // x座標
            y: number;                  // y座標
            size: number;              // サイズ
            speedX: number;            // x方向の速度
            speedY: number;            // y方向の速度
            isGlowing: boolean;        // 光っているかどうか
            glowTimer: number;         // 光るエフェクトのタイマー
            glowRadius: number;        // 光の半径
            wasConnectedToMouse: boolean; // 前フレームでマウスと接続していたか
            glowProgress: number;      // 光るエフェクトの進行度
            maxGlowDuration: number;   // 光るエフェクトの最大持続時間

            constructor() {
                // 初期位置をランダムに設定
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.size = 1.5;
                // 移動速度をランダムに設定
                this.speedX = (Math.random() - 0.5) * 0.3;
                this.speedY = (Math.random() - 0.5) * 0.3;
                this.isGlowing = false;
                this.glowTimer = 0;
                this.glowRadius = 0;
                this.wasConnectedToMouse = false;
                this.glowProgress = 0;
                this.maxGlowDuration = 40; // 光るエフェクトの持続時間を短く
            }

            // パーティクルの状態を更新
            update() {
                // 位置の更新
                this.x += this.speedX;
                this.y += this.speedY;

                // 画面端での反射
                if (this.x > canvas.width || this.x < 0) this.speedX *= -1;
                if (this.y > canvas.height || this.y < 0) this.speedY *= -1;

                // マウスとの距離をチェックして光るエフェクトを制御
                if (mouse.x && mouse.y) {
                    const distToMouse = getDistance(this.x, this.y, mouse.x, mouse.y);
                    const isConnectedToMouse = distToMouse < 100;

                    // マウスと接続した瞬間に光るエフェクトを開始
                    if (isConnectedToMouse && !this.wasConnectedToMouse) {
                        this.isGlowing = true;
                        this.glowTimer = 0;
                        this.glowProgress = 0;
                    }
                    this.wasConnectedToMouse = isConnectedToMouse;
                }

                // 光るエフェクトの更新
                if (this.isGlowing) {
                    this.glowTimer++;
                    this.glowProgress = this.glowTimer / this.maxGlowDuration;

                    if (this.glowTimer >= this.maxGlowDuration) {
                        // エフェクトの終了
                        this.isGlowing = false;
                        this.glowTimer = 0;
                        this.glowRadius = 0;
                        this.glowProgress = 0;
                    } else {
                        // スムーズなエフェクト用のイージング関数
                        const easeInOutCubic = (t: number) => t < 0.5 ? 4 * t ** 3 : 1 - (-2 * t + 2) ** 3 / 2;
                        const progress = easeInOutCubic(this.glowProgress);
                        this.glowRadius = 15 * progress;
                    }
                }
            }

            // パーティクルを描画
            draw() {
                // 光るエフェクトの描画
                if (this.isGlowing && ctx) {
                    const gradient = ctx.createRadialGradient(
                        this.x, this.y, 0,
                        this.x, this.y, this.glowRadius
                    );
                    const baseAlpha = 0.6;
                    const alphaValue = baseAlpha * (1 - Math.pow(this.glowProgress, 0.5));
                    gradient.addColorStop(0, `rgba(255, 165, 0, ${alphaValue})`);
                    gradient.addColorStop(1, 'rgba(255, 165, 0, 0)');

                    ctx.beginPath();
                    ctx.fillStyle = gradient;
                    ctx.arc(this.x, this.y, this.glowRadius, 0, Math.PI * 2);
                    ctx.fill();
                }

                if (!ctx) return;

                // パーティクル本体の描画
                let particleColor = '#ffffff';
                if (mouse.x && mouse.y) {
                    const distToMouse = getDistance(this.x, this.y, mouse.x, mouse.y);
                    if (distToMouse < 100) {
                        // マウスに近いほど明るく
                        const brightness = 1 - (distToMouse / 100);
                        particleColor = this.isGlowing ?
                            `rgba(255, 165, 0, ${0.4 + brightness * 0.6})` :
                            `rgba(255, 255, 255, ${0.4 + brightness * 0.6})`;
                    } else {
                        particleColor = this.isGlowing ?
                            'rgba(255, 165, 0, 0.4)' :
                            'rgba(255, 255, 255, 0.4)';
                    }
                }

                ctx.beginPath();
                ctx.fillStyle = particleColor;
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        // 画面サイズに応じたパーティクル数を返す関数
        const getParticleCount = () => {
            return window.innerWidth < 768 ? 50 : 200; // モバイルの場合は1/4に減らす
        };

        // パーティクル配列の初期化
        let particles: Particle[] = [];
        let particleCount = getParticleCount();

        // 画面サイズ変更時のパーティクル再生成
        window.addEventListener('resize', () => {
            particleCount = getParticleCount();
            particles = [];
            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle());
            }
        });

        // 初期パーティクルの生成
        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }

        // 2点間の距離を計算する関数
        function getDistance(x1: number, y1: number, x2: number, y2: number) {
            return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
        }

        // マウス周辺の光るエフェクトを描画
        function drawMouseGlow() {
            if (!ctx) return;

            if (mouse.x && mouse.y) {
                const gradient = ctx.createRadialGradient(
                    mouse.x, mouse.y, 0,
                    mouse.x, mouse.y, 100
                );
                gradient.addColorStop(0, 'rgba(255, 255, 255, 0.08)');
                gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');

                ctx.beginPath();
                ctx.fillStyle = gradient;
                ctx.arc(mouse.x, mouse.y, 100, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        // アニメーションループ
        function animate() {
            if (!ctx || !canvas) return;

            // キャンバスをクリア
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // マウスの光るエフェクトを描画
            drawMouseGlow();

            // 各パーティクルの更新と描画
            particles.forEach((particle, index) => {
                particle.update();
                particle.draw();

                // パーティクル同士を線で接続
                for (let j = index + 1; j < particles.length; j++) {
                    const distance = getDistance(particle.x, particle.y, particles[j].x, particles[j].y);
                    if (distance < 200) {
                        const opacity = 1 - distance / 100;
                        ctx.beginPath();
                        ctx.strokeStyle = `rgba(255, 255, 255, ${opacity * 0.4})`;
                        ctx.lineWidth = 1;
                        ctx.moveTo(particle.x, particle.y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.stroke();
                    }
                }

                // マウスとパーティクルを線で接続
                if (mouse.x && mouse.y) {
                    const distToMouse = getDistance(particle.x, particle.y, mouse.x, mouse.y);
                    if (distToMouse < 200) {
                        ctx.beginPath();
                        ctx.strokeStyle = `rgba(255, 255, 255, ${(1 - distToMouse / 100) * 0.5})`;
                        ctx.lineWidth = 1;
                        ctx.moveTo(particle.x, particle.y);
                        ctx.lineTo(mouse.x, mouse.y);
                        ctx.stroke();
                    }
                }
            });

            // 次のフレームを要求
            requestAnimationFrame(animate);
        }

        // アニメーションを開始
        animate();

        // クリーンアップ関数
        return () => {
            window.removeEventListener('resize', resizeCanvas);
        };
    }, []);

    // canvasを描画
    return (
        <canvas
            ref={canvasRef}
            className="fixed top-0 left-0 -z-10 bg-[#202428]"
        />
    );
}