import { $theme, setTheme as setStoreTheme } from "@/stores/themeStore"
import type { StorageTheme, Theme } from "@/types/Theme"
import { useEffect, useState } from "react"

type SetThemeCallback = (theme: StorageTheme) => () => void

export const useTheme = (): [Theme, SetThemeCallback] => {
  const [theme, setTheme] = useState<Theme>('light')

  const handleSetTheme = (theme: StorageTheme) => () => {
    if (theme === 'system') {
      const isDark = window.matchMedia("(prefers-color-scheme:dark)").matches
      setStoreTheme(isDark ? 'dark' : 'light')
    } else {
      setStoreTheme(theme)
    }
    localStorage.setItem('theme', theme)
  }

  useEffect(() => {
    const storageTheme = localStorage.getItem('theme') as StorageTheme | null
    let theme: Theme
    
    if (storageTheme === 'system' || storageTheme === null) {
      const isDark = window.matchMedia("(prefers-color-scheme:dark)").matches
      theme = isDark ? 'dark' : 'light'
    } else {
      theme = storageTheme
    }
    setStoreTheme(theme)
  }, [])

  useEffect(() => {
    $theme.subscribe((theme) => {
      setTheme(theme)
      if (theme === "light") {
        document.documentElement.classList.remove("dark");
      } else {
        document.documentElement.classList.add("dark");
      }
    })
    return () => $theme.off()
  }, [])

  return [theme, handleSetTheme]
}