import { X, Bell, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

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
          <Link to="/settings">
            <Settings className="text-rose-900" />
          </Link>
        </div>

        {/* Notifications List */}
        <div className="flex-1 overflow-y-auto bg-white">
          <div className="flex justify-end">
            <Button
              variant="ghost"
              size="sm"
              onClick={markAllAsRead}
              className="text-sm text-black underline"
            >
              Mark all as read
            </Button>
            {/* <Button
              variant="ghost"
              //  onClick={clearAll}
              className="text-black"
            >
              Clear All
            </Button> */}
          </div>
          {notifications.map((notification) => (
            <div
              key={notification.id}
              className={`p-4 border-b cursor-pointer ${
                notification.read ? "" : "bg-blue-50"
              }`}
              onClick={() => markAsRead(notification.id)}
            >
              <div className="flex justify-between">
                <p className="text-sm w-auto font-bold text-rose-900">
                  {notification.text}
                </p>
                {!notification.read && (
                  <span className="relative flex items-center justify-center">
                    <span className="absolute h-3 w-3 rounded-full bg-red-600 opacity-75 animate-ping"></span>
                    <span className="h-2 w-2 rounded-full bg-red-800"></span>
                  </span>
                )}
              </div>
              <p className="text-xs text-gray-500 md:mt-1 flex flex-row-reverse">
                {notification.time}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MobileNotifications;
