import { prisma } from "@workspace/database"
import { Button } from "@workspace/ui/components/button"

export default async function Page() {
  const users = await prisma.user.findMany({
    orderBy: { createdAt: "desc" },
  })

  return (
    <div className="flex min-h-svh flex-col items-center justify-center p-6 bg-background text-foreground">
      <div className="w-full max-w-lg space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">Database Users Test</h1>
          <p className="text-muted-foreground text-sm">
            Fetched {users.length} seeded users from Prisma Database.
          </p>
        </div>

        <div className="grid gap-3">
          {users.map((user) => (
            <div
              key={user.id}
              className="flex items-center gap-4 p-4 rounded-xl border bg-card text-card-foreground shadow-sm transition-all hover:shadow-md"
            >
              {user.avatarUrl && (
                <img
                  src={user.avatarUrl}
                  alt={user.name || user.username}
                  className="w-12 h-12 rounded-full border bg-muted"
                />
              )}
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-base truncate">{user.name || user.username}</h3>
                <p className="text-xs text-muted-foreground truncate">@{user.username}</p>
                <p className="text-xs text-muted-foreground truncate">{user.email}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center pt-2">
          <Button variant="outline">Test Component</Button>
        </div>
      </div>
    </div>
  )
}

