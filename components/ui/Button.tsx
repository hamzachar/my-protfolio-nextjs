'use client';

import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import {
  ButtonHTMLAttributes,
  forwardRef,
  ReactElement,
  cloneElement,
  isValidElement,
} from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg' | 'icon';
  asChild?: boolean;
  children: React.ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = 'primary',
      size = 'md',
      asChild = false,
      children,
      ...props
    },
    ref
  ) => {
    const variants = {
      primary:
        'bg-primary text-white hover:bg-primary/90 shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30',
      secondary:
        'bg-secondary text-white hover:bg-secondary/90 shadow-lg shadow-secondary/25 hover:shadow-xl hover:shadow-secondary/30',
      outline:
        'border-2 border-primary text-primary hover:bg-primary hover:text-white hover:shadow-lg',
      ghost: 'text-foreground hover:bg-muted hover:text-primary',
    };

    const sizes = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg',
      icon: 'h-10 w-10 p-0',
    };

    const classes = cn(
      'inline-flex items-center justify-center rounded-lg font-semibold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden',
      variants[variant],
      sizes[size],
      className
    );

    if (asChild) {
      const child = children as any;
      return (
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
        >
          {typeof child === 'object' && child.type
            ? { ...child, props: { ...child.props, className: classes } }
            : children}
        </motion.div>
      );
    }

    return (
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.2 }}
      >
        <button ref={ref} className={classes} {...props}>
          {children}
        </button>
      </motion.div>
    );
  }
);

Button.displayName = 'Button';

export { Button };
