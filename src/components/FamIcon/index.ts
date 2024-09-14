import { html, css } from "iares";
import { templateParams } from "./types";
import { createHooks } from "./hooks";
import { validatorFactory } from "@/services/validator";

const template = ({ props }: templateParams) => html`
  <div class="wrap-ctx size-${props.size}">
     <span class="material-symbols-rounded">
        ${props.name}
     </span>
  </div>
`;

export const FamIcon = () => {
  const actions = validatorFactory();
  const hooks = createHooks(actions);

  return {
    template,
    styles,
    hooks,
    actions,
  };
};

const styles = () => css`
  fam-icon,
  .wrap-ctx,
  .wrap-ctx > span{
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .wrap-ctx span {
    color: var(--icon-color);
  }

  .wrap-ctx.size-1 > span {
    font-size:1em
  }
  .wrap-ctx.size-2  > span {
    font-size:2em
  }
  .wrap-ctx.size-3 > span  {
    font-size:3em
  }
  .wrap-ctx.size-4 > span  {
    font-size:4em
  }
  .wrap-ctx.size-5 > span  {
    font-size:5em
  }
  .wrap-ctx.size-6 > span  {
    font-size:6em
  }
  .wrap-ctx.size-7 > span  {
    font-size:7em
  }
  .wrap-ctx.size-8  > span {
    font-size:8em
  }
  .wrap-ctx.size-9  > span {
    font-size:9em
  }
  .wrap-ctx.size-10  > span {
    font-size:10em
  }
  .wrap-ctx.size-11  > span {
    font-size:11em
  }
  .wrap-ctx.size-12  > span {
    font-size:12em
  }
`;
