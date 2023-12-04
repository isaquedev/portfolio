import { useTheme } from "@/hooks/useTheme"
import type { Language } from "@/types/Language"
import { translations } from "@/utils/translations"

type Props = {
  language: Language
}

export const ProfilePhoto = ({ language }: Props) => {

  const t = translations[language]
  const [theme] = useTheme()

  return (
    <div className="absolute top-12 right-0 ring-8 rounded-full ring-sky-200 dark:ring-sky-700 ring-offset-8 ring-offset-sky-50 dark:ring-offset-sky-950">
      <img src="/assets/about/isaque-hernandes-profile-photo.png" alt={t.about.photoAlt} />
      <div className="absolute animate-rotate w-[320px] h-[320px] top-0">
        {theme === "dark" ? (
          <>
            <img className="absolute top-1 left-4 animate-increase" src="/assets/about/star_big.svg" />
            <img className="absolute top-1 -right-4 animate-increase" src="/assets/about/star_big.svg" />

            <img className="absolute -top-10 right-12 animate-decrease" src="/assets/about/star.svg" />
            <img className="absolute -top-10 left-20 animate-decrease" src="/assets/about/star.svg" />
            <img className="absolute -bottom-9 right-10 animate-decrease" src="/assets/about/star.svg" />
            <img className="absolute -bottom-9 left-19 animate-decrease" src="/assets/about/star.svg" />

            <img className="absolute bottom-2 left-3 animate-increase" src="/assets/about/star_big.svg" />
            <img className="absolute bottom-2 -right-6 animate-increase" src="/assets/about/star_big.svg" />
            
            <img className="absolute -top-14 left-1/2 animate-increase" src="/assets/about/star_big.svg" />
            <img className="absolute -bottom-14 left-1/2 animate-increase" src="/assets/about/star_big.svg" />
            
            <img className="absolute bottom-18 -left-7 animate-decrease" src="/assets/about/star.svg" />
            <img className="absolute bottom-18 -right-15 animate-decrease" src="/assets/about/star.svg" />
            <img className="absolute top-15 -left-5 animate-decrease" src="/assets/about/star.svg" />
            <img className="absolute top-15 -right-13 animate-decrease" src="/assets/about/star.svg" />
            
            <img className="absolute bottom-1/2 -left-10 animate-increase" src="/assets/about/star_big.svg" />
            <img className="absolute bottom-1/2 -right-18 animate-increase" src="/assets/about/star_big.svg" />
          </>
        ) : (
          <>
            <div className="absolute bg-sky-200 h-8 w-2 rounded-full left-1/2 -bottom-14 animate-increaseFromTopToBottom" />
            <div className="absolute bg-sky-200/50 h-8 w-2 rounded-full right-23 -top-3 animate-increaseFromTopToBottomHalfDeg" />
            <div className="absolute bg-sky-200 h-8 w-2 rounded-full left-1/2 -top-14 animate-increaseFromBottomToTop" />
            <div className="absolute bg-sky-200/50 h-8 w-2 rounded-full left-23 -top-3 animate-increaseFromBottomToTopHalfDeg" />
            <div className="absolute bg-sky-200 h-8 w-2 rounded-full -left-7 bottom-32 animate-increaseFromLeftToRight" />
            <div className="absolute bg-sky-200/50 h-8 w-2 rounded-full -left-3 bottom-23 animate-increaseFromLeftToRightHalfDeg" />
            <div className="absolute bg-sky-200 h-8 w-2 rounded-full -right-7 top-32 animate-increaseFromRightToLeft" />
            <div className="absolute bg-sky-200/50 h-8 w-2 rounded-full -right-3 bottom-23 animate-increaseFromRightToLeftHalfDeg" />

            <div className="absolute bg-sky-200 h-8 w-2 rounded-full right-7 top-7 animate-increaseFromBottomLeftToTopRight" />
            <div className="absolute bg-sky-200/50 h-8 w-2 rounded-full -right-3 top-23 animate-increaseFromBottomLeftToTopRighttHalfDeg" />
            <div className="absolute bg-sky-200 h-8 w-2 rounded-full left-7 top-7 animate-increaseFromBottomRightToTopLeft" />
            <div className="absolute bg-sky-200/50 h-8 w-2 rounded-full -left-3 top-23 animate-increaseFromBottomRightToTopLeftHalfDeg" />
            <div className="absolute bg-sky-200 h-8 w-2 rounded-full right-7 bottom-7 animate-increaseFromTopLeftToBottomRight" />
            <div className="absolute bg-sky-200 h-8 w-2 rounded-full left-7 bottom-7 animate-increaseFromTopRightToBottomLeft" />

            <div className="absolute bg-sky-200/50 h-8 w-2 rounded-full left-23 -bottom-3 animate-increaseFromTopRightToBottomLeftHalfDeg" />
            <div className="absolute bg-sky-200/50 h-8 w-2 rounded-full right-23 -bottom-3 animate-increaseFromTopLeftToBottomRightHalfDeg" />
          </>
        )}
      </div>
    </div>
  )
}