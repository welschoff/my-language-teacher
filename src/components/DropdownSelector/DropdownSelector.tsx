import { Portal, Select, createListCollection } from '@chakra-ui/react';

type DropdownItem = {
  label: string;
  value: string;
};

type DropdownSelectorProps = {
  label: string;
  placeholder: string;
  items: DropdownItem[];
  onChange: (value: string) => void;
  value?: string;
};

function DropdownSelector({ ...props }: DropdownSelectorProps) {
  const collection = createListCollection({ items: props.items });

  return (
    <Select.Root
      collection={collection}
      onSelect={(details) => {
        props.onChange(details.value);
      }}
      size="md"
      width="320px"
    >
      <Select.HiddenSelect />
      <Select.Label>{props.label}</Select.Label>
      <Select.Control>
        <Select.Trigger>
          <Select.ValueText placeholder={props.placeholder} />
        </Select.Trigger>
        <Select.IndicatorGroup>
          <Select.Indicator />
        </Select.IndicatorGroup>
      </Select.Control>
      <Portal>
        <Select.Positioner>
          <Select.Content>
            {collection.items.map((item) => (
              <Select.Item item={item} key={item.value}>
                {item.label}
                <Select.ItemIndicator />
              </Select.Item>
            ))}
          </Select.Content>
        </Select.Positioner>
      </Portal>
    </Select.Root>
  );
}
export default DropdownSelector;
