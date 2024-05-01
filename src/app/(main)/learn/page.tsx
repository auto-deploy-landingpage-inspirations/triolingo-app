import { FeedHeader } from "@/components/FeedHeader";
import { FeedWrapper } from "@/components/FeedWrapper";
import { StickyWrapper } from "@/components/StickyWrapper";
import { UserProgress } from "@/components/UserProgress";
import { getUnits, getUserProgress } from "@/database/queries";
import { redirect } from "next/navigation";

const LearnPage = async () => {

  const userProgressData = getUserProgress()
  const unitsData = getUnits()

  const [
    userProgress,
    units
  ] = await Promise.all([
    userProgressData,
    unitsData
  ])

  if(!userProgress || !userProgress.activeCourse) 
    redirect("/courses")

  return ( 
    <div className="flex flex-row-reverse gap-[48px] px-6">
      <StickyWrapper>
        <UserProgress
          activeCourse={userProgress.activeCourse}
          hearts={userProgress.hearts}
          points={userProgress.points}
          hasActiveSubscription={false}
        />
      </StickyWrapper>
      <FeedWrapper>
        <FeedHeader title={userProgress.activeCourse.title} />
        {units.map((unit) => (
          <div key={unit.id}
          className="mb-10">
            {JSON.stringify(unit)}
          </div>
        ))}
      </FeedWrapper>
    </div>
  );
}
 
export default LearnPage;