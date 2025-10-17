import localFont from 'next/font/local'


   export const Satoshi = localFont({
     src: [
       {
         path: "../assets/satoshi/fonts/Satoshi-Medium.woff2",
         weight: '400',
         style: 'normal',
       },

      //    {
      //     path: "../assets/statoshi/fonts/Satoshi-bold.woff2",
      //    weight: '700',
      //    style: 'normal',
      //  },
     
     ],
     display: 'swap',
      variable: '--font-sat',
   });



