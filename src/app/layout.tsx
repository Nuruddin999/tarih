import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://islamtarih.ru"),
  title: "Исламская хронология — люди и эпохи",
  description: "Наглядный путеводитель по исламской истории: пророк Мухаммад, его сподвижники, учёные и правители. Годы жизни, исторические эпохи и современники.",
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: "https://islamtarih.ru",
    siteName: "Исламская хронология",
    title: "Исламская хронология — люди и эпохи",
    description: "Изучайте исламскую историю: события, личности и эпохи на одной хронологической ленте.",
    images: [{ url: "/social-preview.png", width: 1200, height: 630, alt: "Исламская хронология — события, личности и эпохи" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Исламская хронология — люди и эпохи",
    description: "События, личности и эпохи исламской истории на одной хронологической ленте.",
    images: ["/social-preview.png"],
  },
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
};

export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
 return <html lang="ru">
   <head>
     <script dangerouslySetInnerHTML={{ __html: `
       (function(m,e,t,r,i,k,a){
         m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
         m[i].l=1*new Date();
         for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
         k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
       })(window, document,'script','https://mc.yandex.ru/metrika/tag.js?id=114152951', 'ym');
       ym(114152951, 'init', {ssr:true, webvisor:true, clickmap:true, ecommerce:"dataLayer", referrer: document.referrer, url: location.href, accurateTrackBounce:true, trackLinks:true});
     ` }} />
   </head>
   <body>
     <noscript><div><img src="https://mc.yandex.ru/watch/114152951" style={{ position: "absolute", left: "-9999px" }} alt="" /></div></noscript>
     {children}
   </body>
 </html>;
}
