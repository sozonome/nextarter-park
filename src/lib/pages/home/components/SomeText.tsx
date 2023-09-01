import { css } from 'styled-system/css';

const SomeText = () => {
  return (
    <div className={css({ display: 'grid', gap: 2.5 })}>
      <h1
        className={css({
          bgGradient: 'to-br',
          gradientFrom: 'gray.200',
          gradientTo: 'teal.700',
          backgroundClip: 'text',
          fontSize: '2xl',
          fontWeight: 'bold',
          color: 'transparent',
          md: { fontSize: '3xl' },
        })}
      >
        nextarter-park
      </h1>
      <p
        className={css({
          fontSize: 'xs',
          color: 'gray.500',
          md: { fontSize: 'sm' },
        })}
      >
        Next.js starter template with Park UI and TypeScript setup
      </p>
    </div>
  );
};

export default SomeText;
