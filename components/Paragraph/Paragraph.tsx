import { ParagraphProps } from './Paragraph.props';
import cn from 'classnames';
import styles from './Paragraph.module.css';

export const Paragraph = ({
  size = 'M',
  children,
  className,
  ...props
}: ParagraphProps): JSX.Element => {
  return (
    <p
      className={cn(styles.paragraph, className, {
        [styles.small]: size == 'S',
        [styles.medium]: size == 'M',
        [styles.large]: size == 'L',
      })}
      {...props}
    >
      {children}
    </p>
  );
};
