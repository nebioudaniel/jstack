import { PropsWithChildren } from "react"
import { HelpCircle, Menu, Mic, Phone, Search, Smile, UserCircle, Video } from "lucide-react"
import Image from "next/image"

export const MockTelegramUI = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex min-h-[800px] w-full max-w-[1200px] bg-[#1e1e1e] text-white rounded-lg overflow-hidden shadow-xl">
      {/* Telegram chat list */}
      <div className="hidden md:flex w-72 bg-[#2a2f38] flex-col">
        {/* Desktop navbar style */}
        <div className="px-4 h-16 border-b border-[#1f232a] flex items-center justify-between shadow-sm">
          <Menu className="size-5 text-[#b0b0b0] hover:text-white cursor-pointer" />
          <div className="relative">
            <Image src="/telegram-logo.svg" alt="Logo" width={24} height={24} />
            {/* Notification dot */}
     
          </div>
          <div className="w-5" /> {/* Removed Cog icon */}
        </div>

        {/* Search bar */}
        <div className="px-4 py-3 border-b border-[#1f232a]">
          <div className="flex items-center bg-[#1f232a] px-3 py-2 rounded text-sm text-gray-400">
            <Search className="size-4 mr-2" />
            <span>Search messages or users</span>
          </div>
        </div>

        {/* Contact list */}
        <div className="flex-1 overflow-y-auto">
          <div className="px-4 py-3 space-y-2">
            {/* Online User with message preview and notification */}
            <div className="flex items-center justify-between px-2 py-2 rounded hover:bg-[#3a3f47] text-[#e0e0e0] cursor-pointer relative">
              <div className="flex items-center">
                <div className="relative">
                  <Image
                    src="/brand-asset-profile-picture.png"
                    alt="User"
                    width={40}
                    height={40}
                    className="object-cover rounded-full mr-3"
                  />
                  <span className="absolute bottom-0 left-7 w-3 h-3 bg-green-500 rounded-full border-2 border-[#2a2f38]" />
                </div>
                <div className="flex flex-col">
                  <span className="font-medium text-sm">Mesob</span>
                  <span className="text-xs text-[#a0a0a0] truncate w-40">  New user message</span>
                </div>
              </div>
              <span className="ml-2 bg-[#0088cc] text-white text-xs px-2 py-0.5 rounded-full">3  </span>
            </div>

            {/* Other Contacts (Only 2 additional contacts) */}
            {[...Array(2)].map((_, i) => (
              <div
                key={i}
                className="flex items-center justify-between px-2 py-2 rounded hover:bg-[#3a3f47] text-[#b0b0b0] cursor-not-allowed"
              >
                <div className="flex items-center">
                  <div className="size-10 rounded-full bg-[#40444b] mr-3" />
                  <div className="flex flex-col">
                    <span className="font-medium text-sm">Contact {i + 1}</span>
                    <span className="text-xs text-[#888] truncate w-40">No recent messages</span>
                  </div>
                </div>
                <span className="ml-2 bg-[#3c3f46] text-white text-xs px-2 py-0.5 rounded-full">1</span>
              </div>
            ))}

            {/* Extra Contact with Tigrinya text */}
            <div className="flex items-center justify-between px-2 py-2 rounded hover:bg-[#3a3f47] text-[#b0b0b0] cursor-not-allowed">
              <div className="flex items-center">
                <div className="size-10 rounded-full bg-[#40444b] mr-3" />
                <div className="flex flex-col">
                  <span className="font-medium text-sm">Best Time</span>
                  <span className="text-xs text-[#888] truncate w-40">Welcome to the group!</span>
                </div>
              </div>
              <span className="ml-2 bg-[#3c3f46] text-white text-xs px-2 py-0.5 rounded-full">1</span>
            </div>
          </div>
        </div>

        {/* Bottom account info */}
        <div className="p-3 bg-[#1f232a] flex items-center">
          <div className="size-9 rounded-full bg-[#0088cc] mr-2" />
          <div className="flex-1">
            <p className="text-sm font-medium text-white">Nebiou Daniel</p>
            <p className="text-xs text-[#b0b0b0]">@nebiou_main</p>
          </div>
        </div>
      </div>

      {/* Telegram chat panel */}
      <div className="flex-1 flex flex-col">
        {/* chat header */}
        <div className="h-16 bg-[#2a2f38] flex items-center px-4 border-b border-[#1f232a]">
          <div className="md:hidden mr-4">
            <Menu className="size-6 text-[#b0b0b0] hover:text-white cursor-pointer" />
          </div>

          <div className="flex items-center">
            <div className="relative">
              <Image
                src="/brand-asset-profile-picture.png"
                alt="PingPanda Avatar"
                width={40}
                height={40}
                className="object-cover rounded-full mr-3"
              />
              <span className="absolute bottom-1 left-7 w-3 h-3 bg-green-500 rounded-full border-2 border-[#2a2f38]" />
            </div>
            <div>
              <p className="font-semibold text-white leading-none">Mesob</p>
              <p className="text-xs text-green-400">online</p>
            </div>
          </div>

          <div className="ml-auto flex items-center space-x-4 text-[#b0b0b0]">
            <Phone className="size-5 hover:text-white cursor-pointer" />
            <Video className="size-5 hover:text-white cursor-pointer" />
            <Search className="size-5 hover:text-white cursor-pointer" />
            <UserCircle className="size-5 hover:text-white cursor-pointer" />
            <HelpCircle className="size-5 hover:text-white cursor-pointer" />
          </div>
        </div>

        {/* message history */}
        <div className="flex-1 overflow-y-auto p-4 bg-[#1e1e1e] flex flex-col-reverse">
          {children}
        </div>

        {/* message input */}
        <div className="p-4">
          <div className="flex items-center bg-[#32363f] rounded-lg p-2">
            <input
              readOnly
              type="text"
              placeholder="Message Mesob"
              className="flex-1 bg-transparent py-2 px-2 text-white placeholder-[#72767d] focus:outline-none cursor-not-allowed"
            />
            <div className="flex items-center space-x-3 mx-3 text-[#b0b0b0]">
              <Mic className="size-5 hover:text-white cursor-not-allowed" />
              <Smile className="size-5 hover:text-white cursor-not-allowed" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
