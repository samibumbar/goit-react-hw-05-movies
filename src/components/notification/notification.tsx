type NotificationProps = {
  message: string;
};
const Notification: React.FC<NotificationProps> = ({ message }) => {
  return <p>{message}</p>;
};
export default Notification;
