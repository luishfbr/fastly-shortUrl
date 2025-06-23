-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Url" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "originalUrl" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "clicks" INTEGER NOT NULL DEFAULT 0,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "expiresAt" DATETIME DEFAULT (DATETIME('now', '+1 day'))
);
INSERT INTO "new_Url" ("clicks", "createdAt", "expiresAt", "id", "originalUrl", "slug") SELECT "clicks", "createdAt", "expiresAt", "id", "originalUrl", "slug" FROM "Url";
DROP TABLE "Url";
ALTER TABLE "new_Url" RENAME TO "Url";
CREATE UNIQUE INDEX "Url_slug_key" ON "Url"("slug");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
