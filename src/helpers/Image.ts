export type CustomImageComponent = React.FC<
  React.HTMLAttributes<HTMLImageElement> & { src: string; alt: string }
>;
