import { prisma } from "../../../lib/prisma";
import Link from "next/link";
import styles from "./page.module.css"

export default async function Page({ params }) {
    const { id } = await params;

    const pizza = await prisma.pizza.findUnique({
        where: {
            id: parseInt(id),
        },
        include: {
            ingridients: true,
        },
    })

    return (
        <div className={styles.page}>
            <div className={styles.container}>
                <img src={pizza.image} alt={pizza.name} />

                <div className={styles.content}>
                    <h1 className={styles.name}>{pizza.name}</h1>
                    <p className={styles.descr}>{pizza.descr}</p>
                    <p className={styles.price}>${pizza.price.d[0]}</p>

                    <ul className={styles.ingridients}>
                        {pizza.ingridients.map(elem => (
                            <li key={elem.id}>{elem.name}</li>
                        ))}
                    </ul>

                    <Link href="/" className={styles.backLink}>Go back</Link>

                </div>
            </div>
        </div>
    )
}
