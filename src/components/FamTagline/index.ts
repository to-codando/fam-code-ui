import { html, css } from "iares";

const template = () => html`
  <div class="wrap-ctx">
    <slot id="content"></slot>
  </div>
`;

export const FamTagline = () => {
	return {
		template,
		styles,
	};
};

const styles = () => css`
  fam-tagline,
  .wrap-ctx,
  .wrap-ctx p
  {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
  
  .wrap-ctx p {
    font-size: var(--fam-tagline-font-size);
    font-weight: var(--fam-tagline-font-weight);
    color: var(--fam-tagline-color);
    line-height: var(--fam-tagline-line-height);
  }

  






`;
