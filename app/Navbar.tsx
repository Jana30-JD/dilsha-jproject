import Image from "next/image";
import Link from "next/link";
import styles from "./nav.module.css";

export default function AboutPage() {
  return (<div>
    <div className={styles.container}>

      <Link href="/mainhead"> <Image src="/company_logo.webp" alt="Company Logo" width={100} height={80} className={styles.banner} /></Link> 
         
           
         <Link href="/About"><h3 className={styles.about}>About Us</h3></Link>  
          
          
          
          <Link href="/product"> <h3 className={styles.careers}>products</h3></Link> 
         <Link href="/service"> <h3 className={styles.service}>services</h3></Link>
           <Link href="/careers"><h3 className={styles.careers}>Careers</h3></Link>
    
        <Link href="/login">   <button className={styles.btn}>Login</button></Link>
            
         
        </div>
  </div>)
}
