import { useEffect } from 'react'
import AOS from 'aos'

export function useAOSInit() {
  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: 'ease-out-cubic',
      once: true,
      offset: 60,
    })
  }, [])
}

export function useAOSRefresh(deps: unknown[] = []) {
  useEffect(() => {
    AOS.refreshHard()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)
}
