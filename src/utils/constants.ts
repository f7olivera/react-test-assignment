import { InputProps } from "@chakra-ui/react";

export const CommonInputProps: InputProps = {
  borderWidth: '1px',
  pl: 'calc(1rem + 1px)',
  borderRadius: "xl",
  borderColor: 'gray.20',
  _hover: {
    borderWidth: '2px',
    borderColor: 'accent.alpha.100',
    pl: '1rem'
  },
  _focus: {
    borderWidth: '2px',
    borderColor: 'accent.alpha.100',
    pl: '1rem'
  },
  _focusVisible: {},
  variant: "'filled' _placeholder: {{ color: 'gray.100', opacity: 1, borderColor: 'gray.0' }}",
  backgroundColor: "gray.10"
}
