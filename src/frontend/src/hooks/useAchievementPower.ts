import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useActor } from './useActor';

const ACHIEVEMENT_POWER_KEY = ['achievementPower'];

/**
 * Hook to fetch the current Achievement Power total from the backend.
 */
export function useAchievementPower() {
  const { actor, isFetching: isActorFetching } = useActor();

  return useQuery<bigint>({
    queryKey: ACHIEVEMENT_POWER_KEY,
    queryFn: async () => {
      if (!actor) {
        throw new Error('Actor not initialized');
      }
      return await actor.getAchievementPower();
    },
    enabled: !!actor && !isActorFetching,
    staleTime: 1000, // Consider data stale after 1 second to show updates quickly
  });
}

/**
 * Hook to increment the Achievement Power counter.
 * Automatically updates the cached total after successful increment.
 */
export function useIncrementAchievementPower() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async () => {
      if (!actor) {
        throw new Error('Actor not initialized');
      }
      await actor.incrementAchievementPower();
    },
    onSuccess: () => {
      // Invalidate and refetch the achievement power to get the updated value
      queryClient.invalidateQueries({ queryKey: ACHIEVEMENT_POWER_KEY });
    },
    onError: (error) => {
      console.error('Failed to increment achievement power:', error);
    },
  });
}
