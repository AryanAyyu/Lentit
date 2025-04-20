import { X, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";

type Notification = {
  id: number;
  text: string;
  read: boolean;
  time: string;
};

interface MobileNotificationsProps {
  isOpen: boolean;
  onClose: () => void;
  notifications: Notification[];
  markAsRead: (id: number) => void;
  markAllAsRead: () => void;
  unreadCount: number;
}

const MobileNotifications = ({
  isOpen,
  onClose,
  notifications,
  markAsRead,
  markAllAsRead,
  unreadCount,
}: MobileNotificationsProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[1001] bg-[#F4E3B2] h-[100vh]">
      <div className="h-full flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <button onClick={onClose} className="p-2">
            <X size={24} className="text-[#74070E]" />
          </button>
          <h2 className="text-lg font-bold text-[#74070E]">Notifications</h2>
          <Button
            variant="ghost"
            size="sm"
            onClick={markAllAsRead}
            className="text-xs text-[#74070E]"
          >
            Mark all as read
          </Button>
        </div>

        {/* Notifications List */}
        <div className="flex-1 overflow-y-auto bg-white">
          {notifications.map((notification) => (
            <div
              key={notification.id}
              className={`p-4 border-b cursor-pointer ${
                notification.read ? "" : "bg-blue-50"
              }`}
              onClick={() => markAsRead(notification.id)}
            >
              <div className="flex justify-between">
                <p className="text-sm">{notification.text}</p>
                {!notification.read && (
                  <span className="h-2 w-2 bg-red-400 rounded-full"></span>
                )}
                <p className="text-xs text-gray-500 mt-1">
                  {notification.time}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MobileNotifications;
