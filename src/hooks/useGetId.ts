import { useId } from 'react'

/**
 * Custom hook to get an ID.
 * If an ID is passed from component props (idFromComponentProps),
 * it returns that ID. Otherwise, it generates and returns a new unique ID
 * using the useId hook from React.
 *
 * @param {string} [idFromComponentProps] - An optional ID passed from ComponentProps.
 * @returns {string} The ID from component props or a generated unique ID.
 */

export const useGetId = (idFromComponentProps?: string) => {
  // Use the useId hook to generate a unique ID if idFromComponentProps is not provided.
  const generatedId = useId()

  // Return either the provided idFromComponentProps or the generated unique ID.
  return idFromComponentProps || generatedId
}
