import { useLocation } from 'react-router-dom'
import { useMemo } from 'react'
import { useScreenWidth } from './useScreenWidth'

export function useLayoutRules () {
  const {pathname} = useLocation()
  const {screenWidth} = useScreenWidth()

  const showBackgroundImg = useMemo(() => (
    screenWidth >= 1440 && (pathname !== '/events' && pathname !== '/events/new')
  ), [pathname, screenWidth])
  const onDashboard = useMemo(() => (
    pathname === '/events' || pathname === '/events/new'
  ), [pathname])
  const onNewEventPage = useMemo(() => (
    pathname === '/events/new'
  ), [pathname])
  const showCircleBtn = useMemo(() => (
    pathname === '/events'
  ), [pathname])
  const showFullDate = useMemo(() => (
    screenWidth >= 600
  ), [screenWidth])
  
  return {
    showBackgroundImg,
    onDashboard,
    onNewEventPage,
    showCircleBtn,
    showFullDate
  }
}
