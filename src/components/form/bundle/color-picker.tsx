import { ReactNode } from "react";
import { ColorPicker, Portal, VisuallyHidden, InputGroup, Stack, HStack } from "@chakra-ui/react";
import { Palette } from "lucide-react";

interface ColorPickerProps extends ColorPicker.RootProps {
  displayLabel: string | ReactNode;
}

export default function FormColorPicker(props: ColorPickerProps) {
  const { displayLabel, ...restProps } = props;

  return (
    <ColorPicker.Root format="hsla" gap="4" {...restProps}>
      <VisuallyHidden>
        <ColorPicker.Label>{displayLabel}</ColorPicker.Label>
      </VisuallyHidden>

      <ColorPicker.Control>
        <InputGroup
          w="full"
          startElement={<Palette size={16} />}
          endElementProps={{ px: 1 }}
          endElement={
            <ColorPicker.Trigger border={0} outlineWidth={2} outlineOffset={-9} rounded="full">
              <Stack p={0.5} border="subtle" rounded="full">
                <ColorPicker.ValueSwatch boxSize="4.5" shadow="none" rounded="full" />
              </Stack>
            </ColorPicker.Trigger>
          }
        >
          <ColorPicker.Input />
        </InputGroup>
      </ColorPicker.Control>

      <Portal>
        <ColorPicker.Positioner>
          <ColorPicker.Content zIndex={99999}>
            <ColorPicker.Area />
            <HStack>
              <ColorPicker.EyeDropper colorPalette="gray" size="xs" variant="outline" />
              <ColorPicker.Sliders />
            </HStack>
          </ColorPicker.Content>
        </ColorPicker.Positioner>
      </Portal>

      <ColorPicker.HiddenInput />
    </ColorPicker.Root>
  );
}
