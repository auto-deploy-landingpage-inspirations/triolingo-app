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
    console.log("Deleting all data...")
    await db.delete(schema.courses)
    await db.delete(schema.userProgress)
    await db.delete(schema.units)
    await db.delete(schema.lessons)
    await db.delete(schema.challenges)
    await db.delete(schema.challengeOptions)
    await db.delete(schema.challengeProgress)

    console.log("Inserting data...")
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

    await db.insert(schema.units).values([
      {
        id: 1,
        title: "Unit 1",
        description: "Form basic sentences",
        courseId: 1,
        order: 1
      }
    ])

    await db.insert(schema.lessons).values([
      {
        id: 1,
        unitId: 1,
        order: 1,
        title: "Nouns"
      },
      {
        id: 2,
        unitId: 1,
        order: 2,
        title: "Verbs"
      }
    ])

    await db.insert(schema.challenges).values([
      {
        id: 1,
        lessonId: 1,
        order: 1,
        question: "Which one of these is >the man<?",
        type: "SELECT"
      },
      {
        id: 2,
        lessonId: 1,
        order: 2,
        question: "Which one of these is >the woman<?",
        type: "SELECT"
      },
    ])

    await db.insert(schema.challengeOptions).values([
      {
        id: 1,
        challengeId: 1,
        imageSrc: "/man.svg",
        text: "el hombre", 
        audioSrc: "/es_man.mp3",
        correct: true
      },
      {
        id: 2,
        challengeId: 1,
        imageSrc: "/robot.svg",
        text: "el robot", 
        audioSrc: "/es_robot.mp3",
        correct: false
      },
      {
        id: 3,
        challengeId: 2,
        imageSrc: "/girl.svg",
        text: "la niña", 
        audioSrc: "/es_girl.mp3",
        correct: false
      },
      
      {
        id: 4,
        challengeId: 2,
        imageSrc: "/woman.svg",
        text: "la mujer", 
        audioSrc: "/es_woman.mp3",
        correct: true
      },
      
    ])

    console.log("Database cleared!")
  } catch(error){
    console.error(error)
    throw new Error("Failed to seed database")
  }
}

main()