import { prisma } from '@/lib/prisma';
import styles from './page.module.css';
import Link from 'next/link';

export default async function Page() {
  const pizzas = await prisma.pizza.findMany();

  return (
    <div className={styles.page}>
      <div className={styles.pizzaList}>
        {
          pizzas.map(elem => (
            <div className={styles.pizza} key={elem.id}>
              <img src={elem.image} alt={elem.name} />
              <h2>{elem.name}</h2>
              <p>${elem.price.d[0]}</p>
              <Link href={`/pizza/${elem.id}`}>See more...</Link>
            </div>
          ))
        }
      </div>
    </div>
  )
}