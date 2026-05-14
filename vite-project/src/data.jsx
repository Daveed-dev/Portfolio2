const skillsData = [
  {
    name: 'HTML',
    pct: 95,
    icon: (
      <svg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'>
        <path d='M5 3l1.8 20.4L16 26l9.2-2.6L27 3z' fill='#e44d26' />
        <path d='M16 24.4V5H25.1l-1.6 17.8z' fill='#f16529' />
        <path
          d='M10 10h6V8H7.9l.4 4.5H16v-2h-5.8zM8.6 14H6.7l.3 3.5L16 20v-2.1l-6.9-2z'
          fill='#ebebeb'
        />
        <path
          d='M16 10v2h4.9l-.5 5-4.4 1.2V20l6.9-1.9.1-.9.8-8.2z'
          fill='#fff'
        />
      </svg>
    ),
  },
  {
    name: 'CSS',
    pct: 85,
    icon: (
      <svg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'>
        <path d='M5 3l1.8 20.4L16 26l9.2-2.6L27 3z' fill='#1572b6' />
        <path d='M16 24.4V5H25.1l-1.6 17.8z' fill='#33a9dc' />
        <path
          d='M16 13H10.8l.3 3H16v-3zM10 8H16V5H7.6l.4 4.5H16V8h-5.8z'
          fill='#ebebeb'
        />
        <path
          d='M16 13v3h4.6l-.4 4.4L16 21.5v3.1l6.9-1.9.1-.9.8-8.8z'
          fill='#fff'
        />
        <path d='M16 8v2.5h7.8l.2-2.5z' fill='#fff' />
      </svg>
    ),
  },
  {
    name: 'JavaScript',
    pct: 75,
    icon: (
      <svg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'>
        <rect width='32' height='32' rx='3' fill='#f7df1e' />
        <path d='M9.5 24.5l2.1-1.3c.4.7.8 1.3 1.6 1.3.8 0 1.3-.3 1.3-1.6V15h2.6v8c0 2.6-1.5 3.8-3.7 3.8-2 0-3.1-1-3.9-2.3zM19 24.2l2.1-1.2c.5.9 1.2 1.5 2.4 1.5 1 0 1.6-.5 1.6-1.2 0-.8-.7-1.1-1.8-1.6l-.6-.3c-1.8-.8-3-1.7-3-3.8 0-1.9 1.4-3.3 3.7-3.3 1.6 0 2.7.6 3.5 2l-2 1.3c-.4-.8-.9-1.1-1.6-1.1-.7 0-1.2.4-1.2 1.1 0 .8.5 1.1 1.6 1.6l.6.3c2.1.9 3.3 1.8 3.3 3.9 0 2.2-1.7 3.5-4 3.5-2.2 0-3.7-1.1-4.6-2.7z' />
      </svg>
    ),
  },
  {
    name: 'React',
    pct: 85,
    icon: (
      <svg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'>
        <circle cx='16' cy='16' r='2.8' fill='#61dafb' />

        <ellipse
          cx='16'
          cy='16'
          rx='13'
          ry='5'
          fill='none'
          stroke='#61dafb'
          stroke-width='1.5'
        />

        <ellipse
          cx='16'
          cy='16'
          rx='13'
          ry='5'
          fill='none'
          stroke='#61dafb'
          stroke-width='1.5'
          transform='rotate(60 16 16)'
        />

        <ellipse
          cx='16'
          cy='16'
          rx='13'
          ry='5'
          fill='none'
          stroke='#61dafb'
          stroke-width='1.5'
          transform='rotate(120 16 16)'
        />
      </svg>
    ),
  },
  {
    name: 'Rest API',
    pct: 90,
    icon: (
      <svg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'>
        <rect
          x='2'
          y='13'
          width='10'
          height='6'
          rx='2'
          fill='none'
          stroke='#34d399'
          stroke-width='1.8'
        />
        <rect
          x='20'
          y='13'
          width='10'
          height='6'
          rx='2'
          fill='none'
          stroke='#34d399'
          stroke-width='1.8'
        />
        <line
          x1='12'
          y1='15'
          x2='20'
          y2='15'
          stroke='#34d399'
          stroke-width='1.8'
        />
        <polyline
          points='17,12 20,15 17,18'
          fill='none'
          stroke='#34d399'
          stroke-width='1.8'
          stroke-linejoin='round'
        />
        <line
          x1='12'
          y1='18.5'
          x2='20'
          y2='18.5'
          stroke='#6ee7b7'
          stroke-width='1.4'
          stroke-dasharray='2 1.5'
        />
        <polyline
          points='15,16 12,18.5 15,21'
          fill='none'
          stroke='#6ee7b7'
          stroke-width='1.4'
          stroke-linejoin='round'
        />
      </svg>
    ),
  },
  {
    name: 'Node.js',
    pct: 35,
    icon: (
      <svg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'>
        <polygon
          points='16,2 28,8.5 28,23.5 16,30 4,23.5 4,8.5'
          fill='#3c873a'
        />
        <polygon
          points='16,4.5 26,10.2 26,21.8 16,27.5 6,21.8 6,10.2'
          fill='#3c873a'
          stroke='#5cb85c'
          stroke-width='0.6'
        />
        <path
          d='M10 21V11l6 5 6-5v10'
          fill='none'
          stroke='#fff'
          stroke-width='2'
          stroke-linejoin='round'
          stroke-linecap='round'
        />
        <line
          x1='16'
          y1='16'
          x2='16'
          y2='21'
          stroke='#fff'
          stroke-width='2'
          stroke-linecap='round'
        />
      </svg>
    ),
  },
];
export default skillsData;
