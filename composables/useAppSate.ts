export function useAppSate() {
  const pageTitle = useState('page-title', () => '')

  return {
    pageTitle,
  }
}
