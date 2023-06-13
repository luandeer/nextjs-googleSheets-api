import styles from './page.module.css'
import HomePage from "@/app/(pages)/home/page";
//import Form from '@/components/form/Form'

export default function Home() {
  return (
    <main className={styles.main}>
      <HomePage/>
      
    </main>
  )
}
