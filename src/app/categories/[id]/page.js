'use client'
import Link from "next/link"
import data from "@/app/db/catagorie"
import scholarships from "@/app/db/scholarships"
import styles from './catagories.module.css'
import { useParams } from 'next/navigation'
import { useEffect, useState } from "react"
function Page() {
    const params = useParams()
    const categories=data.categories
    const scholarship=scholarships.data
    const [list,setList]=useState([])
    useEffect(()=>{
        setList(scholarship.filter((e)=>{if(e.category.includes(params.id)){return e}}))
    },[])
    
    
  return (
    <div>
    <Link href={'/'} className={styles.backLink}>Home</Link>
    <div className={styles.subNav}>
    {categories.map((e,i)=>{
        return <Link href={`/categories/${e}`} className={styles.subNav_link} key={i}><h3>{e}</h3></Link>
      })}
    </div>
    {list.length==0?<div className={styles.NoResultsFound}><h1>No Results Found</h1></div>:list.map((e,i)=>{return<a href={e.link} key={i} className={styles.list_items}>
        <h3 >{e.name}</h3>
        <p>{e.deadline}</p>
        <hr className={styles.hr}/>
    </a>})}
    </div>
  )
}

export default Page