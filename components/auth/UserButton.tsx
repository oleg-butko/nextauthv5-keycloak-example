'use client';

// import { Avatar, Button, Group, Text, UnstyledButton, UnstyledButtonProps } from '@mantine/core';
import { useT } from '@app/_i18n/client';
import { Avatar, Button, Group, UnstyledButton, UnstyledButtonProps } from '@mantine/core';

interface UserButtonProps extends UnstyledButtonProps {
  image: string;
  name: string;
  email: string;
  icon?: React.ReactNode;
}

export function UserButton({ image, name, email, icon, ...others }: UserButtonProps) {
  const { t } = useT('client-page');
  const signedIn = false;

  return !signedIn ? (
    <Button
      variant="light"
      radius="sm"
      size="sm"
      pr={14}
      miw={80}
      //   styles={{ section: { marginLeft: 22 } }}
      onClick={() => console.log('clicked')}
    >
      {t('sign-in')}
      {/* sign in */}
    </Button>
  ) : (
    <UnstyledButton {...others}>
      <Group>
        <Avatar src={image} radius="xl" />
        {/* <div style={{ flex: 1 }}>
          <Text size="sm">{name}</Text>
          <Text size="sm">{email}</Text>
        </div> */}
      </Group>
    </UnstyledButton>
  );
}
