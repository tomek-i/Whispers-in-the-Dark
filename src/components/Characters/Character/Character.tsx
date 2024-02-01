import Image from "next/legacy/image"

export interface CharacterProps extends React.PropsWithChildren {
  imagePath?: string
}

export const Character: React.FC<CharacterProps> = ({ imagePath }) => {
  return (
    <div className={`relative h-28 w-28`}>
      {/* //TODO: alt shoul change based on the character */}
      {imagePath && (
        <Image src={imagePath} className="rounded-full" layout="fill" objectFit="cover" alt="Character Image" />
      )}
    </div>
  )
}
