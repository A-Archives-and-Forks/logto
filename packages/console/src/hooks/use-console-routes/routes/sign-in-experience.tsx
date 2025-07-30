import { Navigate, type RouteObject } from 'react-router-dom';
import { safeLazy } from 'react-safe-lazy';

import { SignInExperienceTab } from '@/pages/SignInExperience/types';

const SignInExperience = safeLazy(async () => import('@/pages/SignInExperience'));
const ProfileFieldDetails = safeLazy(
  async () => import('@/pages/SignInExperience/PageContent/CollectUserProfile/ProfileFieldDetails')
);

export const signInExperience: RouteObject = {
  path: 'sign-in-experience',
  children: [
    { index: true, element: <Navigate replace to={SignInExperienceTab.Branding} /> },
    { path: 'collect-user-profile/create/:fieldName', element: <ProfileFieldDetails /> },
    { path: 'collect-user-profile/fields/:fieldName', element: <ProfileFieldDetails /> },
    { path: ':tab/*', element: <SignInExperience /> },
  ],
};
