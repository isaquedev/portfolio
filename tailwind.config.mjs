/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
			keyframes: {
				appear: {
					'0%': { opacity: 0, transform: 'translateY(-1rem)' },
					'100%': { opacity: 1, transform: 'translateY(0)' },
				},
				increase: {
					'0%': { transform: 'translateX(-50%) scale(1)', opacity: 1 },
					'100%': { transform: 'translateX(-50%) scale(1.25)', opacity: 0.75 },
				},
				decrease: {
					'0%': { transform: 'translateX(-50%) scale(0.75)', opacity: 0.75 },
					'100%': { transform: 'translateX(-50%) scale(1)', opacity: 1 },
				},
				rotate: {
					'0%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(360deg)' },
				},
				increaseFromTopToBottom: {
					'0%': {
						transform: 'scaleY(0.25) translateX(-50%)',
						transformOrigin: 'top',
					},
					'100%': { 
						transform: 'scaleY(1) translateX(-50%)',
						transformOrigin: 'top',
					},
				},
				increaseFromTopToBottomHalfDeg: {
					'0%': {
						transform: 'rotate(202.5deg)',
						transformOrigin: 'top',
						height: '0.5rem',
					},
					'100%': { 
						transform: 'rotate(202.5deg)',
						transformOrigin: 'top',
						height: '2rem'
					},
				},
				increaseFromBottomToTop: {
					'0%': {
						transform: 'scaleY(0.25) translateX(-50%)',
						transformOrigin: 'bottom',
					},
					'100%': { 
						transform: 'scaleY(1) translateX(-50%)',
						transformOrigin: 'bottom',
					},
				},
				increaseFromBottomToTopHalfDeg: {
					'0%': {
						transform: 'rotate(157.5deg)',
						transformOrigin: 'top',
						height: '0.5rem',
					},
					'100%': { 
						transform: 'rotate(157.5deg)',
						transformOrigin: 'top',
						height: '2rem'
					},
				},
				increaseFromLeftToRight: {
					'0%': {
						transform: 'scaleX(0.25) rotate(90deg)',
						transformOrigin: 'top',
					},
					'100%': { 
						transform: 'scaleX(1) rotate(90deg)',
						transformOrigin: 'top',
					},
				},
				increaseFromLeftToRightHalfDeg: {
					'0%': {
						transform: 'rotate(247.5deg)',
						transformOrigin: 'bottom',
						height: '0.5rem',
					},
					'100%': { 
						transform: 'rotate(247.5deg)',
						transformOrigin: 'bottom',
						height: '2rem'
					},
				},
				increaseFromRightToLeft: {
					'0%': {
						transform: 'scaleX(0.25) rotate(90deg)',
						transformOrigin: 'bottom',
					},
					'100%': { 
						transform: 'scaleX(1) rotate(90deg)',
						transformOrigin: 'bottom',
					},
				},
				increaseFromRightToLeftHalfDeg: {
					'0%': {
						transform: 'rotate(112.5deg)',
						transformOrigin: 'bottom',
						height: '0.5rem',
					},
					'100%': { 
						transform: 'rotate(112.5deg)',
						transformOrigin: 'bottom',
						height: '2rem'
					},
				},
				increaseFromBottomLeftToTopRight: {
					'0%': {
						transform: 'rotate(225deg)',
						transformOrigin: 'top',
						height: '0.5rem',
					},
					'100%': { 
						transform: 'rotate(225deg)',
						transformOrigin: 'top',
						height: '2rem'
					},
				},
				increaseFromBottomLeftToTopRighttHalfDeg: {
					'0%': {
						transform: 'rotate(247.5deg)',
						transformOrigin: 'top',
						height: '0.5rem',
					},
					'100%': { 
						transform: 'rotate(247.5deg)',
						transformOrigin: 'top',
						height: '2rem'
					},
				},
				increaseFromBottomRightToTopLeft: {
					'0%': {
						transform: 'rotate(135deg)',
						transformOrigin: 'top',
						height: '0.5rem',
					},
					'100%': { 
						transform: 'rotate(135deg)',
						transformOrigin: 'top',
						height: '2rem'
					},
				},
				increaseFromBottomRightToTopLeftHalfDeg: {
					'0%': {
						transform: 'rotate(112.5deg)',
						transformOrigin: 'top',
						height: '0.5rem',
					},
					'100%': { 
						transform: 'rotate(112.5deg)',
						transformOrigin: 'top',
						height: '2rem'
					},
				},
				increaseFromTopLeftToBottomRight: {
					'0%': {
						transform: 'rotate(135deg)',
						transformOrigin: 'bottom',
						height: '0.5rem',
					},
					'100%': { 
						transform: 'rotate(135deg)',
						transformOrigin: 'bottom',
						height: '2rem'
					},
				},
				increaseFromTopLeftToBottomRightHalfDeg: {
					'0%': {
						transform: 'rotate(157.5deg)',
						transformOrigin: 'bottom',
						height: '0.5rem',
					},
					'100%': { 
						transform: 'rotate(157.5deg)',
						transformOrigin: 'bottom',
						height: '2rem'
					},
				},
				increaseFromTopRightToBottomLeft: {
					'0%': {
						transform: 'rotate(225deg)',
						transformOrigin: 'bottom',
						height: '0.5rem',
					},
					'100%': { 
						transform: 'rotate(225deg)',
						transformOrigin: 'bottom',
						height: '2rem'
					},
				},
				increaseFromTopRightToBottomLeftHalfDeg: {
					'0%': {
						transform: 'rotate(202.5deg)',
						transformOrigin: 'bottom',
						height: '0.5rem',
					},
					'100%': { 
						transform: 'rotate(202.5deg)',
						transformOrigin: 'bottom',
						height: '2rem'
					},
				},
			},
			animation: {
				appear: 'appear 0.25s ease-out',
				increase: 'increase 1s ease-in-out infinite alternate',
				decrease: 'decrease 1s ease-in-out infinite alternate-reverse',
				rotate: 'rotate 60s linear infinite',
				increaseFromTopToBottom: 'increaseFromTopToBottom 1s infinite ease-in-out alternate-reverse',
				increaseFromTopToBottomHalfDeg: 'increaseFromTopToBottomHalfDeg 1s infinite ease-in-out alternate',
				increaseFromBottomToTop: 'increaseFromBottomToTop 1s infinite ease-in-out alternate-reverse',
				increaseFromBottomToTopHalfDeg: 'increaseFromBottomToTopHalfDeg 1s infinite ease-in-out alternate',
				increaseFromLeftToRight: 'increaseFromLeftToRight 1s infinite ease-in-out alternate-reverse',
				increaseFromLeftToRightHalfDeg: 'increaseFromLeftToRightHalfDeg 1s infinite ease-in-out alternate',
				increaseFromRightToLeft: 'increaseFromRightToLeft 1s infinite ease-in-out alternate-reverse',
				increaseFromRightToLeftHalfDeg: 'increaseFromRightToLeftHalfDeg 1s infinite ease-in-out alternate',
				increaseFromBottomLeftToTopRight: 'increaseFromBottomLeftToTopRight 1s infinite ease-in-out alternate-reverse',
				increaseFromBottomLeftToTopRighttHalfDeg: 'increaseFromBottomLeftToTopRighttHalfDeg 1s infinite ease-in-out alternate',
				increaseFromBottomRightToTopLeft: 'increaseFromBottomRightToTopLeft 1s infinite ease-in-out alternate-reverse',
				increaseFromBottomRightToTopLeftHalfDeg: 'increaseFromBottomRightToTopLeftHalfDeg 1s infinite ease-in-out alternate',
				increaseFromTopLeftToBottomRight: 'increaseFromTopLeftToBottomRight 1s infinite ease-in-out alternate-reverse',
				increaseFromTopRightToBottomLeftHalfDeg: 'increaseFromTopRightToBottomLeftHalfDeg 1s infinite ease-in-out alternate',
				increaseFromTopRightToBottomLeft: 'increaseFromTopRightToBottomLeft 1s infinite ease-in-out alternate-reverse',
				increaseFromTopLeftToBottomRightHalfDeg: 'increaseFromTopLeftToBottomRightHalfDeg 1s infinite ease-in-out alternate',
			},
			spacing: {
				13: '3.25rem',
				15: '3.75rem',
				17: '4.25rem',
				18: '4.5rem',
				19: '4.75rem',
				21: '5.25rem',
				22: '5.5rem',
				23: '5.75rem',
			}
		},
	},
	plugins: [],
}
