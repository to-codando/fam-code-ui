import { html, css } from "iares";

const template = () => html`
  <div class="wrap-ctx">
    <slot id="content"></slot>
  </div>
`;

export const FamTitle = () => {
  return {
    template,
    styles,
  };
};

const styles = () => css`
  fam-title { width: 100%; }

  fam-title,
  .wrap-ctx h1,
  .wrap-ctx h2,
  .wrap-ctx h3
  {
    display: flex;
    justify-content: var(--title-justify-content);
    align-items: var(--title-align-items);
    color: var(--title-color);
  }

  .wrap-ctx {
    display:flex;
    width: 100%;
  }

  .wrap-ctx h1,
  .wrap-ctx h2,
  .wrap-ctx h3 {
    width:100%;
    padding: var(--title-padding);
    text-align: var(--title-text-align);
  }  
  
  .wrap-ctx h1 {
    font-size: var(--title-font-size-primary);
    font-weight: var(--title-font-weight-primary);
  }
  
  .wrap-ctx h2 {
    font-size: var(--title-font-size-secondary);
    font-weight: var(--title-font-weight-secondary);
  }
  
  .wrap-ctx h3 {
    font-size: var(--title-font-size-tertiary);
    font-weight: var(--title-font-weight-tertiary);
  }






`;
