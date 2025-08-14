module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        primary: 'hsl(220 4% 12%)',
        accent: 'hsl(220 90% 50%)',
        bg: 'hsl(220 12% 96%)',
        surface: 'hsl(0 0% 100%)',
        border: 'hsl(220 10% 80%)',
        destructive: 'hsl(0 84.2% 60.2%)',
        'muted-foreground': 'hsl(220 8% 46%)',
      },
      spacing: {
        sm: '8px',
        md: '12px',
        lg: '20px',
      },
      borderRadius: {
        sm: '6px',
        md: '10px',
        lg: '16px',
      },
      boxShadow: {
        card: '0 8px 24px hsla(0,0%,0%,0.12)',
      },
      animation: {
        'fade-in': 'fadeIn 0.25s cubic-bezier(0.22,1,0.36,1)',
        'slide-up': 'slideUp 0.25s cubic-bezier(0.22,1,0.36,1)',
        'scale-in': 'scaleIn 0.25s cubic-bezier(0.22,1,0.36,1)',
      },
      transitionDuration: {
        '150': '150ms',
        '250': '250ms',
        '400': '400ms',
      },
    },
  },
  plugins: [],
}
