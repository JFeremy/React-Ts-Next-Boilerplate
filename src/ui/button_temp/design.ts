import { cva } from '#pcss/css';

export const buttonStyle = cva({
  base: {
    color: 'red',
    textAlign: 'center',
    bgColor: 'gray.800',
    borderRadius: 2,
  },
  variants: {
    size: {
      small: {
        fontSize: '1rem',
        paddingX: '10px',
        paddingY: '5px',
      },
      large: {
        fontSize: '2rem',
        paddingX: '20px',
        paddingY: '10px',
      },
    },
  },
});
