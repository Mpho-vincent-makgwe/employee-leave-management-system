import Link from "next/link";
import Heading from "@/components/Heading";

const policies = [
  {
    title: "Annual Policy",
    description: "Guidelines for annual leave allocation and usage",
    file: "/Annual Leave Policy.pdf",
  },
  {
    title: "Sick Leave Policy",
    description: "Medical leave procedures and requirements",
    file: "/Sick Leave Policy.pdf",
  },
  {
    title: "Maternity Leave Policy",
    description: "Maternity and paternity leave guidelines",
    file: "/Maternity Leave Policy.pdf",
  },
  {
    title: "Emergency Leave Policy",
    description: "Emergency and compassionate leave procedures",
    file: "/Emergency Leave Policy.pdf",
  },
];

export default function Policies() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <Heading
        title="Leave Policies"
        subtitle="Manage leave policies and guidelines"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {policies.map((policy) => (
          <div key={policy.title} className="bg-white rounded-md shadow p-5">
            <h2 className="text-lg font-semibold text-gray-800">
              {policy.title}
            </h2>
            <p className="text-sm text-gray-600 mt-1">{policy.description}</p>
            <p className="text-xs text-gray-500 mt-2">
              Last Updated: 4th July, 2025
            </p>
            <a
              href={policy.file}
              download
              className="inline-block mt-4 px-4 py-2 text-sm font-medium bg-[#5C4DFF] text-white rounded hover:bg-[#4a3ddf] transition"
            >
              Download
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
