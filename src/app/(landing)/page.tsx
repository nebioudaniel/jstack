import { Heading } from "@/components/heading";
import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import { Check } from "lucide-react";
import { ShinyButton } from "@/components/shiny-botton"; // fixed import
import { MockTelegramUI } from "@/components/mock-telegram-ui";
import { TelegramMessage } from "@/components/telegram-message";
import { AnimatedList } from "@/components/ui/animated-list";
import Image from "next/image";

const Page = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-24 sm:py-32 bg-brand-25">
        <MaxWidthWrapper className="text-center">
          <div className="relative mx-auto flex flex-col items-center gap-10">
            <Heading>
              <span className="relative bg-gradient-to-r from-brand-700 to-brand-800 text-transparent bg-clip-text">
                Stay Ahead with Real-Time SaaS Alerts
              </span>
              <br /> Delivered to Your Telegram
            </Heading>

            <p className="text-base leading-7 text-gray-600 max-w-prose text-center">
              Mesob is the smarter way to track your SaaS and key activities.{" "}
              <span className="font-semibold text-gray-700">
                Instantly get updates on sales, user signups,
              </span>{" "}
              and send them directly to your Telegram.
            </p>

            <ul className="space-y-2 text-base text-gray-600 text-left flex flex-col items-start">
              {[
                "Instant Discord notifications for important updates",
                "One-time purchase, lifetime access",
                "Monitor sales, signups, and key activities effortlessly",
              ].map((item, index) => (
                <li key={index} className="flex gap-1.5 items-center">
                  <Check className="size-5 shrink-0 text-brand-700" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="w-full max-w-80">
              <ShinyButton
                href="/sign-up"
                className="relative z-10 h-14 w-full text-base shadow-lg transition-shadow duration-300 hover:shadow-xl"
              >
                Start For Free Today
              </ShinyButton>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>

      {/* Background Visual Section */}
      <section className="relative bg-brand-25 pb-4">
        <div className="absolute inset-x-0 bottom-24 top-24 bg-brand-700" />
        <MaxWidthWrapper className="relative">
          <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
            <MockTelegramUI>
              <AnimatedList>
                <TelegramMessage
                  avatarSrc="/brand-asset-profile-picture.png"
                  avatarAlt="Mesob Avatar"
                  username="Mesob"
                  timestamp="Today at 2:35 PM"
                  badgeColor="#43b581"
                  title="🧑‍💻 New user signed up"
                  content={{ name: "Nebiou Daniel", email: "dnebiou@gmail.com" }}
                />
                <TelegramMessage
                  avatarSrc="/brand-asset-profile-picture.png"
                  avatarAlt="Mesob Avatar"
                  username="Mesob"
                  timestamp="Today at 4:40 PM"
                  badgeColor="#faa61a"
                  title="💵 Payment received"
                  content={{ amount: "500.00 ETB", email: "kebede@gmail.com", plan: "PRO" }}
                />
                <TelegramMessage
                  avatarSrc="/brand-asset-profile-picture.png"
                  avatarAlt="Mesob Avatar"
                  username="Mesob"
                  timestamp="Today at 5:11 AM"
                  badgeColor="#5865f2"
                  title="🏆 Revenue Milestone Achieved"
                  content={{ recurringRevenue: "5000.00 ETB", growth: "+8.2%" }}
                />
              </AnimatedList>
            </MockTelegramUI>
          </div>
        </MaxWidthWrapper>
      </section>

      {/* Insights Section */}
      <section className="relative py-24 sm:py-32 bg-brand-25">
        <MaxWidthWrapper className="flex flex-col items-center gap-16 sm:gap-20">
          <div className="text-center">
            <h2 className="text-base font-semibold text-brand-600">Intuitive Monitoring</h2>
            <Heading>Stay ahead with real-time insights</Heading>
          </div>

          <div className="grid gap-4 lg:grid-cols-3 lg:grid-rows-2">
            {/* Left Feature Block */}
            <div className="relative lg:row-span-2">
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
                <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
                  <p className="mt-2 text-lg font-medium tracking-tight text-brand-950 max-lg:text-center">
                    Real-time notifications
                  </p>
                  <p className="mt-2 max-w-lg text-sm text-gray-600 max-lg:text-center">
                    Get notified about critical events the moment they happen, no matter if you are at home or on the go.
                  </p>
                </div>
                <div className="relative min-h-[30rem] w-full grow [container-type:inline-size] max-lg:mx-auto max-lg:max-w-sm">
                  <div className="absolute inset-x-10 bottom-0 top-10 overflow-hidden rounded-t-[12cqw] border-x-[3cqw] border-t-[3cqw] border-gray-700 bg-gray-900 shadow-2xl">
                    <Image
                      className="size-full object-cover object-top"
                      src="/phone-screen.png"
                      alt="Phone screen displaying app interface"
                      fill
                    />
                  </div>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 lg:rounded-l-[2rem]" />
            </div>

            {/* Right Feature Block */}
            <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
              <div className="absolute inset-px rounded-lg bg-white" />
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)]">
                <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                  <p className="mt-2 text-lg font-medium tracking-tight text-brand-950 max-lg:text-center">
                    Track Any Properties
                  </p>
                  <p className="mt-2 max-w-lg text-sm text-gray-600 max-lg:text-center">
                    Add any custom data you like to an event, such as a user email, a purchase amount or an exceeded quota.
                  </p>
                </div>
                <div className="flex flex-1 items-center justify-center px-8 max-lg:pb-12 max-lg:pt-10 sm:px-10 lg:pb-2">
                  <Image
                    className="w-full max-lg:max-w-xs"
                    src="/bento-any-event.png"
                    alt="Bento box illustrating custom data tracking"
                    width={500}
                    height={300}
                  />
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5" />
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
    </>
  );
};

export default Page;
