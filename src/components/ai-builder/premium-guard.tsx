import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Loader } from "@/components/ui/loader";

interface PremiumGuardProps {
  user: any;
  hasPremium: boolean | null;
  authLoading: boolean;
  checking: boolean;
  children: React.ReactNode;
}

export function PremiumGuard({
  user,
  hasPremium,
  authLoading,
  checking,
  children,
}: PremiumGuardProps) {
  if (authLoading || checking || hasPremium === null) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <Loader />
      </div>
    );
  }

  if (!(user && hasPremium)) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-6">
        <div className="font-semibold text-2xl">Requires Premium</div>
        <div className="max-w-md text-center text-muted-foreground">
          You need a premium subscription to use the AI form builder. Upgrade to
          unlock all features.
        </div>
        <Link href="/#pricing">
          <Button size="lg">View Pricing</Button>
        </Link>
      </div>
    );
  }

  return <>{children}</>;
}
