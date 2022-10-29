import React from 'react';
import { useSession } from 'next-auth/react';
const useUserProgress = () => {
  const { data }:any = useSession();

  const fetchWord = (progress: any) => {
    fetch('/api/user-progress', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(progress),
    });
  };
  const fetchLessonStep = async (lesson: any, lessonStep: any) => {
    fetchWord({
      lesson,
      lessonStep,
      userId: data?.user.id,
    });
  };

  return fetchLessonStep;
};

export default useUserProgress;
