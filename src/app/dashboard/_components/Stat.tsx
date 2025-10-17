import React from 'react';
import { CheckCircle, DollarSign, Briefcase, Star } from 'lucide-react';

const Stat = () => {
  const stats = [
    {
      id: 1,
      title: "Completed Projects",
      value: "47",
      icon: CheckCircle
    },
    {
      id: 2,
      title: "Monthly Revenue",
      value: "€3,250",
      icon: DollarSign
    },
    {
      id: 3,
      title: "Ongoing Projects",
      value: "5",
      icon: Briefcase
    },
    {
      id: 4,
      title: "Average Rating",
      value: "4.8/5",
      icon: Star
    }
  ];

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div
              key={stat.id}
              className="bg-white h-32 rounded-lg p-6 border border-gray-200 hover:border-gray-300 transition-colors"
            >
              <div className="flex items-center gap-3">
                <Icon className="w-8 h-8 text-blue-600" />
                <div className="flex-1">
                  <p className="text-sm text-gray-600 mb-1">{stat.title}</p>
                  <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
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