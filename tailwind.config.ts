import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
					glow: 'hsl(var(--primary-glow))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))',
					glow: 'hsl(var(--accent-glow))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					'0%': {
						opacity: '0',
						transform: 'translateY(20px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'slide-up': {
					'0%': {
						opacity: '0',
						transform: 'translateY(30px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'slide-in-left': {
					'0%': {
						opacity: '0',
						transform: 'translateX(-50px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateX(0)'
					}
				},
				'slide-in-right': {
					'0%': {
						opacity: '0',
						transform: 'translateX(50px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateX(0)'
					}
				},
				'glow': {
					'0%, 100%': {
						boxShadow: '0 0 20px hsl(var(--accent) / 0.3)'
					},
					'50%': {
						boxShadow: '0 0 30px hsl(var(--accent) / 0.6)'
					}
				},
				'float': {
					'0%, 100%': {
						transform: 'translateY(0px)'
					},
					'50%': {
						transform: 'translateY(-10px)'
					}
				},
				'bounce-gentle': {
					'0%, 100%': {
						transform: 'translateY(0)'
					},
					'50%': {
						transform: 'translateY(-5px)'
					}
				},
				'rotate-slow': {
					'0%': {
						transform: 'rotate(0deg)'
					},
					'100%': {
						transform: 'rotate(360deg)'
					}
				},
				'scale-in': {
					'0%': {
						opacity: '0',
						transform: 'scale(0.9)'
					},
					'100%': {
						opacity: '1',
						transform: 'scale(1)'
					}
				},
				'gradient-shift': {
					'0%, 100%': {
						backgroundPosition: '0% 50%'
					},
					'50%': {
						backgroundPosition: '100% 50%'
					}
				},
				'wiggle': {
					'0%, 100%': {
						transform: 'rotate(-3deg)'
					},
					'50%': {
						transform: 'rotate(3deg)'
					}
				},
				'tilt': {
					'0%, 50%, 100%': {
						transform: 'rotate(0deg)'
					},
					'25%': {
						transform: 'rotate(1deg)'
					},
					'75%': {
						transform: 'rotate(-1deg)'
					}
				},
				'morph': {
					'0%, 100%': {
						borderRadius: '60% 40% 30% 70%/60% 30% 70% 40%'
					},
					'50%': {
						borderRadius: '30% 60% 70% 40%/50% 60% 30% 60%'
					}
				},
				'shootingStar': {
					'0%': {
						transform: 'translateX(0) translateY(0)',
						opacity: '1'
					},
					'100%': {
						transform: 'translateX(300px) translateY(300px)',
						opacity: '0'
					}
				},
				'twinkle': {
					'0%, 100%': { 
						opacity: '0.3',
						transform: 'scale(0.8)'
					},
					'50%': { 
						opacity: '1',
						transform: 'scale(1.2)'
					}
				},
				'drift': {
					'0%': {
						transform: 'translateX(0) translateY(0)'
					},
					'25%': {
						transform: 'translateX(50px) translateY(-30px)'
					},
					'50%': {
						transform: 'translateX(-20px) translateY(-60px)'
					},
					'75%': {
						transform: 'translateX(-50px) translateY(-30px)'
					},
					'100%': {
						transform: 'translateX(0) translateY(0)'
					}
				},
				'orbit': {
					'0%': { transform: 'translate(0, 0) rotate(0deg)' },
					'25%': { transform: 'translate(30px, -20px) rotate(90deg)' },
					'50%': { transform: 'translate(0, -40px) rotate(180deg)' },
					'75%': { transform: 'translate(-30px, -20px) rotate(270deg)' },
					'100%': { transform: 'translate(0, 0) rotate(360deg)' }
				},
				'space-drift': {
					'0%, 100%': { transform: 'translateX(0) translateY(0)' },
					'33%': { transform: 'translateX(-20px) translateY(-10px)' },
					'66%': { transform: 'translateX(10px) translateY(-5px)' }
				},
				'galaxy-rotation': {
					'0%': { transform: 'rotate(0deg) scale(1)' },
					'50%': { transform: 'rotate(180deg) scale(1.1)' },
					'100%': { transform: 'rotate(360deg) scale(1)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.6s ease-out',
				'slide-up': 'slide-up 0.6s ease-out',
				'slide-in-left': 'slide-in-left 0.8s ease-out',
				'slide-in-right': 'slide-in-right 0.8s ease-out',
				'glow': 'glow 2s ease-in-out infinite',
				'float': 'float 3s ease-in-out infinite',
				'bounce-gentle': 'bounce-gentle 2s ease-in-out infinite',
				'rotate-slow': 'rotate-slow 20s linear infinite',
				'scale-in': 'scale-in 0.5s ease-out',
				'gradient-shift': 'gradient-shift 3s ease-in-out infinite',
				'wiggle': 'wiggle 1s ease-in-out infinite',
				'tilt': 'tilt 4s ease-in-out infinite',
				'morph': 'morph 8s ease-in-out infinite',
				'shootingStar': 'shootingStar 3s linear infinite',
				'twinkle': 'twinkle 2s ease-in-out infinite',
				'drift': 'drift 15s ease-in-out infinite',
				'orbit': 'orbit 20s linear infinite',
				'space-drift': 'space-drift 30s ease-in-out infinite',
				'galaxy-rotation': 'galaxy-rotation 60s linear infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
