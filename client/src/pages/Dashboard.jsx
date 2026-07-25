import React, { useState, useEffect } from "react";
import { dummyCreationData } from "../assets/assets";
import { Sparkles, Zap, Gem } from "lucide-react";
import { useUser } from "@clerk/react";
import CreationItem from "../components/CreationItem";

const Dashboard = () => {
  const { user } = useUser();
  const [creations, setCreations] = useState([]);
  const getDashboardData = async () => {
    setCreations(dummyCreationData);
  };

  useEffect(() => {
    getDashboardData();
  }, []);
  
  return (
    <div className="h-full overflow-y-scroll p-6">
      <div className="flex justify-start gap-4 flex-wrap">
        {/* Total creations card */}
        <div className="flex justify-between items-center w-72 p-4 px-6 bg-white rounded-xl border border-gray-200">
          <div className="text-slate-600">
            <p className="text-sm">Total Creations</p>
            <h2 className="text-xl font-semibold">{creations.length}</h2>
          </div>
          <div className="bg-gradient-to-br from-primary to-secondary w-12 h-12 flex items-center justify-center rounded-lg text-white">
            <Sparkles className="w-5 text-white" />
          </div>
        </div>
        {/* Active plan card */}
        <div className="flex justify-between items-center w-72 p-4 px-6 bg-white rounded-xl border border-gray-200">
          <div className="text-slate-600">
            <p className="text-sm">Active plan</p>
            <h2 className="text-xl font-semibold">
              {user?.publicMetadata?.plan === "pro" ? "Pro" : "Free"}
            </h2>
          </div>
          <div className="bg-gradient-to-br from-primary to-secondary w-12 h-12 flex items-center justify-center rounded-lg text-white">
            <Gem className="w-5 text-white" />
          </div>
        </div>
      </div>
      <div className="space-y-3">
        <p className="mt-6 mb-4">Recent Creations</p>
        {creations.map((item)=>(<CreationItem key={item.id} item={item} />))}
      </div>
    </div>
  );
};

export default Dashboard;
