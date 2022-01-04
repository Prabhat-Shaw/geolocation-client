/**
 *
 * Asynchronously loads the component for GeolocationPage
 *
 */

import { lazyLoad } from 'utils/loadable';

export const GeolocationPage = lazyLoad(
  () => import('./index'),
  module => module.GeolocationPage,
);
