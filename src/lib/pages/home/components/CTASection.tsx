/* eslint-disable @next/next/no-img-element */

import { css } from 'styled-system/css';
import { Button } from '~/lib/components/ui/button';

const repoName = 'sozonome/nextarter-park';

const CTASection = () => {
  return (
    <div className={css({ display: 'grid', justifyItems: 'center', gap: 2.5 })}>
      <div className={css({ display: 'flex', alignItems: 'center', gap: 2 })}>
        <a
          href={`https://vercel.com/import/git?s=https://github.com/${repoName}`}
          className={css({ display: 'flex', alignItems: 'center' })}
          target="_blank"
          rel="noreferrer noopener"
        >
          <img src="https://vercel.com/button" alt="Vercel deploy button" />
        </a>

        <a
          href={`https://app.netlify.com/start/deploy?repository=https://github.com/${repoName}`}
          className={css({ display: 'flex', alignItems: 'center' })}
          target="_blank"
          rel="noreferrer noopener"
        >
          <img
            src="https://www.netlify.com/img/deploy/button.svg"
            alt="Netlify deploy button"
          />
        </a>
      </div>
      <div className={css({ display: 'flex', alignItems: 'center', gap: 2 })}>
        <Button
          className={css({
            bgGradient: 'to-br',
            gradientFrom: 'gray.100',
            gradientTo: 'green.200',
            fontWeight: 'semibold',
            color: 'green.700',
            _hover: {
              gradientFrom: 'gray.200',
              gradientTo: 'green.200',
              color: 'green.800',
            },
          })}
          asChild
        >
          <a
            href={`https://github.com/${repoName}/generate`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Use This Template
          </a>
        </Button>

        <Button
          className={css({
            rounded: '3xl',
            padding: 2,
            fontSize: 'xs',
            fontWeight: 'semibold',
          })}
          asChild
        >
          <a
            href={`https://github.com/${repoName}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Repository
          </a>
        </Button>
      </div>
    </div>
  );
};

export default CTASection;
