import { FeedHeader } from "@/components/FeedHeader";
import { FeedWrapper } from "@/components/FeedWrapper";
import { StickyWrapper } from "@/components/StickyWrapper";
import { UserProgress } from "@/components/UserProgress";
import { getUserProgress } from "@/database/queries";
import { redirect } from "next/navigation";

const LearnPage = async () => {

  const userProgressData = getUserProgress()

  const [
    userProgress
  ] = await Promise.all([
    userProgressData
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
      </FeedWrapper>
    </div>
  );
}
 
export default LearnPage;