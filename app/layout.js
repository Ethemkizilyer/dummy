
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '../components/Header'
import { Provider } from 'react-redux'
import store from '@/store'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <Provider store={store}> */}
        <Header />

        <div className="Header-container w-full justify-evenly">

          {children}
        </div>
        {/* </Provider> */}
      </body>
    </html>
  );
}
