import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const SellSidebar = () => {
  return (
    <div className="bg-[#F4E3B2] rounded-xl p-6 shadow-lg w-full space-y-8">
      {/* 1. Selling Tips */}
      <Link
        to="/thrift"
        className="flex justify-end underline invisible md:visible"
      >
        <Button>
          <ArrowLeft className="h-6 w-4 pt-1 underline text-black" /> Back to
          Home
        </Button>
      </Link>
      <div>
        <h3 className="text-xl font-bold mb-4">Boost Your Sales</h3>
        <ul className="space-y-2 text-gray-700 text-sm">
          <li>📸 Use natural light for product photos</li>
          <li>🧵 Mention brand, fit, flaws (if any)</li>
          <li>📏 Add exact measurements</li>
          <li>⚡ Respond quickly to offers</li>
        </ul>
      </div>

      {/* 2. Live Preview (placeholder) */}
      <div className="border border-gray-200 rounded-lg p-4">
        <h4 className="text-lg font-semibold mb-2">Live Preview</h4>
        <div className="aspect-[4/3] bg-gray-100 rounded flex items-center justify-center text-gray-400 text-sm">
          Product image preview
        </div>
        <p className="mt-2 font-medium text-sm">Your title will show here</p>
        <p className="text-gray-500 text-xs">
          Price & Size info will show here
        </p>
      </div>

      {/* 3. Trust/Protection Section */}
      <div className="bg-gray-50 p-4 rounded-md flex items-center gap-4">
        <img
          src="https://cdn-icons-png.flaticon.com/512/732/732221.png"
          alt="Trust"
          className="w-10 h-10"
        />
        <div>
          <p className="font-medium text-sm">Buyer Protection Included</p>
          <p className="text-xs text-gray-500">
            Secure payments & easy returns
          </p>
        </div>
      </div>

      {/* 4. Quick Stats or Checklist */}
      <div className="p-4 border border-dashed border-gray-300 rounded-md">
        <h4 className="font-semibold text-sm mb-2">Seller Checklist</h4>
        <ul className="text-xs text-gray-600 space-y-1">
          <li>✅ Added title & price</li>
          <li>⬜ Uploaded product images</li>
          <li>⬜ Added size and condition</li>
          <li>⬜ Provided detailed description</li>
        </ul>
      </div>

      {/* 5. Help & Support */}
      <div className="pt-2 border-t border-gray-200">
        <p className="text-sm text-gray-700 mb-2 font-medium">Need Help?</p>
        <a
          href="/help/selling"
          className="text-blue-600 text-sm hover:underline font-semibold"
        >
          📘 Read the Seller Guide
        </a>
        <br />
        <a
          href="/contact"
          className="text-blue-500 text-xs hover:underline block mt-1"
        >
          💬 Contact Support
        </a>
      </div>
    </div>
  );
};

export default SellSidebar;
