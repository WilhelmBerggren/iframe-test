import styles from '../page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.center}>
          <iframe src="https://vite.new" className={styles.iframe} />
      </div>
    </main>
  )
}
