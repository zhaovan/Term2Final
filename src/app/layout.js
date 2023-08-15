import "./globals.css";
import localFont from "next/font/local";

const myFont = localFont({
  src: [
    {
      path: "./Dialog-Bold.otf",
      weight: "bold",
      style: "normal",
    },
    {
      path: "./Dialog-Regular.otf",
      weight: "normal",
      style: "normal",
    },
    // {
    //   path: "./Dialog-RegularItalic.otf",
    //   weight: 400,
    //   style: "italic",
    // },
    // {
    //   path: "./Dialog-BoldItalic.otf",
    //   weight: 700,
    //   style: "italic",
    // },
    // {
    //   path: "./Dialog-Light.otf",

    //   style: "normal",
    // },
    // {
    //   path: "./Dialog-LightItalic.otf",
    //   weight: 300,
    //   style: "italic",
    // },
  ],
});

export const metadata = {
  title: "Convo Type West Term 2",
  description: "Slowly, we all go insane",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={myFont.className}>{children}</body>
    </html>
  );
}
