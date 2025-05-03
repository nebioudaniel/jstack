import { cn } from "@/utils"
import { Clock } from "lucide-react"
import Image from "next/image"

interface TelegramMessageProps {
  avatarSrc: string
  avatarAlt: string
  username: string
  timestamp: string
  badgeText?: string
  badgeColor?: string
  title: string
  content: {
    [key: string]: string
  }
}

export const TelegramMessage = ({
  avatarAlt,
  avatarSrc,
  content,
  timestamp,
  title,
  username,
  badgeText,
}: TelegramMessageProps) => {
  return (
    <div className="flex items-start gap-2 px-2 py-1 max-w-md">
      <div>
        <Image
          src={avatarSrc}
          alt={avatarAlt}
          width={36}
          height={36}
          className="rounded-full"
        />
      </div>
      <div className="bg-[#2a2f3a] text-white rounded-xl p-3 shadow-md w-full">
        <div className="flex items-center gap-1 mb-1">
          <span className="font-bold text-sm text-[#8da0c0]">{username}</span>
          <span className="text-xs text-gray-400 ml-auto">{timestamp}</span>
        </div>

        <p className="mb-2 text-sm">
          <span className="font-semibold">{title}</span>
          {badgeText && (
            <span className="ml-1">{badgeText}</span> // emoji-style badge
          )}
        </p>

        <div className="text-sm space-y-1">
          {Object.entries(content).map(([key, value]) => (
            <p key={key}>
              <span className="font-medium text-[#8da0c0]">{key}:</span>{" "}
              {value}
            </p>
          ))}
        </div>
      </div>
    </div>
  )
}
