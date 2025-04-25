import {
  Settings,
  Bell,
  Lock,
  User,
  Trash2,
  X,
  ShieldQuestion,
  ChevronRight,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const settingsOptions = [
  {
    title: "Profile Information",
    description: "View and update your profile details",
    icon: <User className="h-5 w-5" />,
  },
  {
    title: "Login & Security",
    description: "Manage passwords and login methods",
    icon: <Lock className="h-5 w-5" />,
  },
  {
    title: "Notifications",
    description: "Customize notification preferences",
    icon: <Bell className="h-5 w-5" />,
  },
  {
    title: "Privacy",
    description: "Control your visibility and data",
    icon: <Settings className="h-5 w-5" />,
  },
  {
    title: "Delete Account",
    description: "Permanently remove your account",
    icon: <Trash2 className="h-5 w-5 text-red-500" />,
    danger: true,
  },
];

const SettingsPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex items-center justify-between p-4 border-b bg-[#F4E3B2]">
        <button className="p-2">
          <X
            size={24}
            onClick={() => navigate(-1)}
            className="text-[#74070E]"
          />
        </button>
        <h2 className="text-xl font-bold text-[#74070E]">Settings</h2>
        <Link to="/settings">
          <ShieldQuestion className="text-rose-900" />
        </Link>
      </div>
      <div className="min-h-screen bg-[#fff] py-10 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="space-y-4">
            {settingsOptions.map((item, idx) => (
              <div
                key={idx}
                className={`flex items-center justify-between bg-gray-100 p-4 rounded-xl shadow-sm hover:shadow-md cursor-pointer transition ${
                  item.danger
                    ? "border border-red-400"
                    : "border border-rose-200"
                }`}
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`p-2 rounded-full ${
                      item.danger ? "bg-red-100" : "bg-rose-100"
                    }`}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <p
                      className={`font-semibold ${
                        item.danger ? "text-red-700" : "text-rose-900"
                      }`}
                    >
                      {item.title}
                    </p>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                </div>
                <div className="text-sm text-rose-700 font-medium hover:underline">
                  <ChevronRight />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SettingsPage;
