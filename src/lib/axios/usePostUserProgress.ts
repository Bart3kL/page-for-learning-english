import React from 'react';
import { getCsrfToken } from 'next-auth/react';
const useUserProgress = () => {
  async function getToken() {
    const csrfToken = getCsrfToken();
    return csrfToken;
  }
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
      userId: await getToken(),
    });
  };
  return fetchLessonStep;
};

export default useUserProgress;
