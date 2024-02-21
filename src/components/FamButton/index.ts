import { html, css } from "iares";

const template = () => html`
  <slot id="content"></slot>
`;

export const FamButton = () => {
	return {
		template,
		styles,
	};
};

const styles = () => css`
  fam-button {
    display:flex;
    width:var(--fam-button-width);
    height:var(--fam-button-height);
    text-transform: var(--fam-button-text-transform);
    cursor: pointer;
  }

  fam-button > * {
    display:flex;
    width:var(--fam-button-width);
    height:var(--fam-button-height);
    justify-content: var(--fam-button-justify-content);
    align-items: var(--fam-button-align-items);
    font-weight: var(--fam-button-font-weight)
  }

  fam-button *[type="primary"] {
    font-size:var(--fam-button-font-size);
    border-radius: var(--fam-button-border-radius);
    color: var(--fam-buttom-primary-color);
    background: var(--fam-buttom-primary-background);
    border-width: var(--fam-buttom-border-width);  
    border-style: var(--fam-buttom-border-style);  
    border-color: var(--fam-buttom-primary-border-color); 
  }

  fam-button *[type="primary-hole"] {
    font-size:var(--fam-button-font-size);
    border-radius: var(--fam-button-border-radius);
    color: var(--fam-buttom-primary-hole-color);
    background:var(--fam-buttom-primary-hole-background);
    border-width: var(--fam-buttom-border-width);  
    border-style: var(--fam-buttom-border-style);  
    border-color: var(--fam-buttom-primary-hole-border-color);  
  }

  fam-button *[type="primary-disabled"] {
    font-size:var(--fam-button-font-size);
    border-radius: var(--fam-button-border-radius);
    color: var(--fam-buttom-primary-disabled-text-color);
    background:var(--fam-buttom-primary-disabled-background);
    border-width: var(--fam-buttom-border-width);  
    border-style: var(--fam-buttom-border-style);  
    border-color: var(--fam-buttom-primary-disabled-border-color);  
  }

  fam-button *[type="primary-hole-disabled"] {
    font-size:var(--text-secondary);
    border-radius: var(--border-primary);
    color: var(--primary-soft);
    background:none;
    border:1px solid var(--primary-soft);  
  }

  fam-button *[type="secondary"] {
    font-size:var(--fam-button-font-size);
    border-radius: var(--fam-button-border-radius);
    color: var(--fam-buttom-secondary-color);
    background: var(--fam-buttom-secondary-background);
    border-width: var(--fam-buttom-border-width);  
    border-style: var(--fam-buttom-border-style);  
    border-color: var(--fam-buttom-secondary-border-color); 
  }

  fam-button *[type="secondary-hole"] {
    font-size:var(--fam-button-font-size);
    border-radius: var(--fam-button-border-radius);
    color: var(--fam-buttom-secondary-hole-color);
    background:var(--fam-buttom-secondary-hole-background);
    border-width: var(--fam-buttom-border-width);  
    border-style: var(--fam-buttom-border-style);  
    border-color: var(--fam-buttom-secondary-hole-border-color);  
  }

  fam-button *[type="secondary-disabled"] {
    font-size:var(--fam-button-font-size);
    border-radius: var(--fam-button-border-radius);
    color: var(--fam-buttom-secondary-disabled-text-color);
    background:var(--fam-buttom-secondary-disabled-background);
    border-width: var(--fam-buttom-border-width);  
    border-style: var(--fam-buttom-border-style);  
    border-color: var(--fam-buttom-secondary-disabled-border-color);  
  }

  fam-button *[type="secondary-hole-disabled"] {
    font-size:var(--text-secondary);
    border-radius: var(--border-secondary);
    color: var(--secondary-soft);
    background:none;
    border:1px solid var(--secondary-soft);  
  }

  fam-button *[type="tertiary"] {
    font-size:var(--fam-button-font-size);
    border-radius: var(--fam-button-border-radius);
    color: var(--fam-buttom-tertiary-color);
    background: var(--fam-buttom-tertiary-background);
    border-width: var(--fam-buttom-border-width);  
    border-style: var(--fam-buttom-border-style);  
    border-color: var(--fam-buttom-tertiary-border-color); 
  }

  fam-button *[type="tertiary-hole"] {
    font-size:var(--fam-button-font-size);
    border-radius: var(--fam-button-border-radius);
    color: var(--fam-buttom-tertiary-hole-color);
    background:var(--fam-buttom-tertiary-hole-background);
    border-width: var(--fam-buttom-border-width);  
    border-style: var(--fam-buttom-border-style);  
    border-color: var(--fam-buttom-tertiary-hole-border-color);  
  }

  fam-button *[type="tertiary-disabled"] {
    font-size:var(--fam-button-font-size);
    border-radius: var(--fam-button-border-radius);
    color: var(--fam-buttom-tertiary-disabled-text-color);
    background:var(--fam-buttom-tertiary-disabled-background);
    border-width: var(--fam-buttom-border-width);  
    border-style: var(--fam-buttom-border-style);  
    border-color: var(--fam-buttom-tertiary-disabled-border-color);  
  }

  fam-button *[type="tertiary-hole-disabled"] {
    font-size:var(--text-tertiary);
    border-radius: var(--border-tertiary);
    color: var(--tertiary-soft);
    background:none;
    border:1px solid var(--tertiary-soft);  
  }
`;
