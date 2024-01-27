import { Character } from "../../Character"

export interface ScarletWomanProps extends React.PropsWithChildren {}

export const ScarletWoman: React.FC<ScarletWomanProps> = ({}) => {
  return <Character imagePath="/static/images/characters/minions/scarlet-woman.png" />
}
