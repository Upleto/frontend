import React, { FC } from 'react';
import getConfig from 'next/config';
import { css } from '@emotion/core';
import Link from '../src/components/Link';
import ManifestHead from '../src/components/Head/ManifestHead';
import rem from '../src/utils/style/rem';

const { publicRuntimeConfig } = getConfig();
const { displayName, commonKeywords, themeColor } = publicRuntimeConfig;

const linkBoardStyles = css`
  cursor: pointer;
  width: auto;
  display: flex;
  flex-flow: column;
  align-items: center;

  & > div {
    width: 100%;
    max-width: ${rem(150)};
  }

  & span {
    font-size: ${rem(30)};
    border: ${rem(1)} dotted gray;

    @media only screen and (max-width: ${rem(165)}) {
      font-size: 16.5vw;
    }
  }
`;

const Page: FC = () => (
  <div>
    <ManifestHead
      title={displayName}
      description="Upleto - property management tools"
      keywords={commonKeywords}
      themeColor={themeColor}
      hrefCanonical="/"
    />
    <header>
      <h1
        css={css`
          text-align: center;
          font-weight: normal;
        `}
      >
        Upleto
      </h1>
    </header>
    <main>
      <Link href="/renter">
        <a>
          <div css={linkBoardStyles}>
            <span>Renter</span>
          </div>
        </a>
      </Link>
    </main>
  </div>
);

export default Page;
