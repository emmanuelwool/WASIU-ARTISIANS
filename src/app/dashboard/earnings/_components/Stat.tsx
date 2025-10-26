import React from 'react';
import { WalletMinimal, WalletCards, BadgeEuro, Star } from 'lucide-react';

const Stat = () => {
  const stats = [
    {
      id: 1,
      title: "Recent accounts Balance",
      value: "47",
      icon: WalletMinimal
    },
    {
      id: 2,
      title: "Windrawt number",
      value: "€3,250",
      icon: WalletCards
    },
    {
      id: 3,
      title: "Your total Spend",
      value: "5",
      icon: BadgeEuro
    },
   
  ];

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div
              key={stat.id}
              className="bg-white h-32 rounded-lg p-6 border border-gray-200 hover:border-gray-300 transition-colors"
            >
              <div className="flex flex-col r gap-3">
                <Icon className="w-8 h-8 text-blue-600" />
                <div className="">
                  <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
                  <p className="text-sm text-gray-600 mb-1">{stat.title}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {/* Tarif horaire */}
    </div>
  );
}

export default Stat;