import Image from 'next/image'
import styles from './page.module.css'
import data from './db/catagorie'
import Link from 'next/link'
export default function Home() {
  const categories=data.categories
  return (
    <main className={styles.main}>
     <div className={styles.categories}>
      {categories.map((e,i)=>{
        return <Link href={`/categories/${e}`} className={styles.categorie_box} key={i}><h3>{e}</h3></Link>
      })}
     </div>
    </main>
  )
}
