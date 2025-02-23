import React, { memo, forwardRef } from 'react';
import { usePropsResolution } from '../../../hooks';
import type { ISkeletonProps } from './types';
import Skeleton from './Skeleton';

const SkeletonCircle = (allProps: ISkeletonProps) => {
  const { children, ...props } = allProps;
  const newProps = usePropsResolution('SkeletonCircle', props);
  // Skeleton component with border Radius 999
  return newProps.isLoaded ? children : <Skeleton {...newProps} />;
};

export default memo(forwardRef(SkeletonCircle));
