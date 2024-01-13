import { redirect } from "next/navigation";

import NavBar from "@/components/layout/NavBar";

import { getCurrentUser } from "@/lib/server/session";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await getCurrentUser();
  if (!user) {
    redirect("/auth/signin");
  }

  return (
    <div>
      <NavBar user={user} />
      <main className="py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
      </main>
    </div>
  );
}
