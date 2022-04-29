interface ErrorFallbackProps {
  error: Error;
}

const ErrorFallback: React.FC<ErrorFallbackProps> = ({ error }) => {
  return (
    <>
      <h1>Something Went Wrong</h1>
      <div>Error: {error.message}</div>
      <div>(Sorry about that)</div>
    </>
  );
};

export default ErrorFallback;
