import React, { useContext } from "react"
import { AuthContext } from "../../../services/auth/authContext"
import { SafeArea } from "../../restaurants/components/SafeArea"
import { List, Avatar } from "react-native-paper"
import styled from 'styled-components/native'
import { Text } from '../../../components/Text'
import { Spacer } from "../../../components/Spacer"

const SettingsItem = styled(List.Item)`
  padding: ${props => props.theme.space[3]};
`

const AvatarContainer = styled.View`
  align-items: center;
`

export const SettingsScreen = ({ navigation }) => {
  const { onLogout, user } = useContext(AuthContext)

  return (
    <SafeArea>
      <Spacer size="large">
        <AvatarContainer>
          <Avatar.Icon size={180} icon="human" backgroundColor="#2182BD" />
          <Spacer size="large">
            <Text variant='label'>{user.email}</Text>
          </Spacer>
        </AvatarContainer>
      </Spacer>
      <List.Section>
        <SettingsItem
          title="Favourites"
          description="View your favorites"
          left={props => <List.Icon {...props} color="black" icon="heart" /> }
          onPress={() => navigation.navigate("Favourites")}
        />
        <SettingsItem
          title="Logout"
          left={props => <List.Icon {...props} color="black" icon="door" /> }
          onPress={() => onLogout}
        />
      </List.Section>
    </SafeArea>
  )
}
