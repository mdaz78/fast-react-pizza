import React from 'react';
import { Link } from 'react-router-dom';

function Button({ children, disabled, to, type, ...props }) {
  const base =
    'inline-block text-sm cursor-pointer rounded-full bg-yellow-500 font-semibold tracking-wide uppercase transition-colors duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:ring focus:ring-yellow-300 focus:ring-offset-2 focus:outline-none disabled:cursor-not-allowed';

  const styles = {
    primary: base + ' px-4 py-3 md:px-6 md:py-4',
    small: base + ' px-4 py-2 md:px-5 md:py-2.5 text-xs',
    secondary:
      'inline-block text-sm cursor-pointer rounded-full font-semibold tracking-wide uppercase transition-colors duration-300 hover:bg-stone-300 focus:bg-stone-300 focus:ring focus:ring-stone-300 focus:ring-offset-2 focus:outline-none disabled:cursor-not-allowed border-stone-300 border-2 px-4 py-3 md:px-6 md:py-3.5 text-stone-400 hover:text-stone-800',
  };

  if (to) {
    return (
      <Link to={to} className={styles[type]} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button disabled={disabled} className={styles[type]} {...props}>
      {children}
    </button>
  );
}

export default Button;
