import { Dispatch, SetStateAction, useCallback, useState } from 'react'

interface Helpers {
  goToNextGoal: () => void
  goToPrevGoal: () => void
  reset: () => void
  canGoToNextGoal: boolean
  canGoToPrevGoal: boolean
  setGoalId: Dispatch<SetStateAction<number>>
}

interface UseGoalProps {
  maxGoal: number
  initialGoal?: number
}

export const useGoal = (props: UseGoalProps): [number, Helpers] => {
  const { maxGoal, initialGoal = 0 } = props
  const [currentGoalId, setCurrentGoalId] = useState(initialGoal)
  const canGoToNextGoal = currentGoalId + 1 <= maxGoal;
  const canGoToPrevGoal = currentGoalId - 1 >= 0;

  const setGoalId = useCallback(
    (goal) => {
      const newGoal = goal instanceof Function ? goal(currentGoalId) : goal
      if (newGoal >= 0 && newGoal <= maxGoal) {
        setCurrentGoalId(newGoal)
        return
      }
      throw new Error('Goal not valid')
    },
    [maxGoal, currentGoalId],
  )

  const goToNextGoal = useCallback(() => {
    if (canGoToNextGoal) {
      setCurrentGoalId((goal) => goal + 1)
    }
  }, [canGoToNextGoal])

  const goToPrevGoal = useCallback(() => {
    if (canGoToPrevGoal) {
      setCurrentGoalId((goal) => goal - 1)
    }
  }, [canGoToPrevGoal])

  const reset = useCallback(() => {
    setCurrentGoalId(0)
  }, [])

  return [
    currentGoalId,
    {
      goToNextGoal,
      goToPrevGoal,
      canGoToNextGoal,
      canGoToPrevGoal,
      setGoalId,
      reset,
    },
  ]
}
