import { TypographyParagraph } from './TypographyParagraph';
import { TypographyText } from './TypographyText';
import { TypographyTitle } from './TypographyTitle';

export type TypographySize = 'mini' | 'standard' | 'medium' | 'big';
export type TypographyWeight = 'normal' | 'bold';
export type TypographyTextAlign =
  | 'center'
  | 'left'
  | 'right'
  | 'justify'
  | 'initial'
  | 'inherit';

export type TypographyCommonProps = {
  align?: TypographyTextAlign;
  weight?: TypographyWeight;
  size?: TypographySize;
  children: React.ReactNode;
};

/**
 * Display title, subtitle, simple text or paragraph.
 */
export const Typography = (props: { children: React.ReactNode }) => {
  return props.children;
};

/**
 * Display heading using the `<h1>` to `<h6>` tags.
 * - `<h1>` defines the most important heading.
 * - `<h6>` defines the least important heading.
 *
 * @example
 * <Typography.Title>
 *   <!-- your content here -->
 * </Typography.Title>
 */
Typography.Title = TypographyTitle;

/**
 * Display simple inline text using `<span>` tag.
 *
 * @example
 * <Typography.Text>
 *   <!-- your content here -->
 * </Typography.Text>
 */
Typography.Text = TypographyText;

/**
 * Display a paragraph using `<p>` tag.
 * A paragraph always starts on a new line, and is usually a block of text.
 *
 * @example
 * <Typography.Paragraph>
 *   <!-- your content here -->
 * </Typography.Paragraph>
 */
Typography.Paragraph = TypographyParagraph;
