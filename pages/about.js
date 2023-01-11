import Link from 'next/link';
import { useState } from 'react';
import styles from '../styles/Home.module.css'


const About = () => {
    const [input,setInput] = useState("input")
    return (  
        <>
            <main className={styles.main}>
                <h2>about페이지입니다</h2>
                
                <p>아래 {input}에 값을 넣으면 값이 바뀝니다</p>
                <p>: 값을 작성합니다</p>
                <input placeholder='값을 작성합니다'
                    onChange={(e)=>{setInput(e.target.value)}}
                />
                <Link href='/'>Main페이지로 이동</Link>
                
            </main>
        </>
    );
}
 
export default About;