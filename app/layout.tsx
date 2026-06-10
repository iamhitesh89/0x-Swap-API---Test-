import "../styles/global.css";
import "@rainbow-me/rainbowkit/styles.css";
import { ClientProviders } from "./client-providers";

export const dynamic = "force-dynamic";

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ClientProviders>{children}</ClientProviders>
      </body>
    </html>
  );
}

export default RootLayout;
