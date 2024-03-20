import type React from "react";
import { Button as ButtonBase, Spinner, Text } from "tamagui";

interface BaseProps {
  /**
   * The text to be displayed on the button.
   * @default undefined
   * @example "Press me"
   */
  children: string;
  /**
   * Whether the button is loading or not.
   * @default false
   */
  loading?: boolean;
  /**
   * Whether the button is disabled or not.
   * @default false
   */
  disabled?: boolean;
  /**
   * The callback to be called when the button is pressed.
   * @default undefined
   * @example () => console.log("Button pressed")
   */
  onPress?: () => void;
}

type Props = BaseProps & React.ComponentProps<typeof ButtonBase>;

/**
 * A button component.
 */
export const Button = ({ children, onPress, loading, disabled, ...props }: Props) => {
  return (
    <ButtonBase w="100%" onPress={onPress} bg="$primary100" disabled={loading || disabled} {...props}>
      <Text color="white">
        {loading ? <Spinner color="white" /> : children}
      </Text>
    </ButtonBase>
  );
}
