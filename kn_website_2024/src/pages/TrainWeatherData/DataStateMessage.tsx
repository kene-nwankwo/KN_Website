type DataStateMessageProps = {
  type: "error" | "empty";
  message: string;
  onRetry?: () => void;
};

export default function DataStateMessage({
  type,
  message,
  onRetry,
}: DataStateMessageProps) {
  const isError = type === "error";

  return (
    <div className={`train-weather-status train-weather-status-${type}`} role={isError ? "alert" : undefined}>
      <p>{message}</p>
      {isError && onRetry && (
        <button type="button" onClick={onRetry}>
          Try again
        </button>
      )}
    </div>
  );
}
