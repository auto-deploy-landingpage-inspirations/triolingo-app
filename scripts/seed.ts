import { neon } from "@neondatabase/serverless"
import { drizzle } from "drizzle-orm/neon-http"

import * as dotenv from "dotenv"
import * as schema from "@/database/schema"

dotenv.config({
  path: '.env.local',
})

const sql = neon(process.env.DATABASE_URL!)
const db = drizzle(sql, { schema })

const main = async () => {

  try{
    console.log("Seeding database...")
    await db.delete(schema.courses)
    await db.delete(schema.userProgress)

    await db.insert(schema.courses).values([
      {
        id: 1,
        title: "Spanish",
        imageSrc: "/es.svg"
      },
      {
        id: 2,
        title: "French",
        imageSrc: "/fr.svg"
      },
      {
        id: 3,
        title: "German",
        imageSrc: "/de.svg"
      },
      {
        id: 4,
        title: "Italian",
        imageSrc: "/it.svg"
      },
      {
        id: 5,
        title: "Japanese",
        imageSrc: "/jp.svg"
      },
    ])
    console.log("Database cleared!")
  } catch(error){
    console.error(error)
    throw new Error("Failed to seed database")
  }
}

main()