import createGlobalState from '.'

function useProductIdForDeletionState() {
  const {
    data: productIdForDeletion,
    setData: setProductIdForDeletion,
    resetData: resetProductIdForDeletion
  } = createGlobalState<number | null>(['delete'], null)()

  return {
    productIdForDeletion,
    setProductIdForDeletion,
    resetProductIdForDeletion
  }
}

export default useProductIdForDeletionState
