import { Card, CardBody, Skeleton, SkeletonText } from '@chakra-ui/react'
import React from 'react'
interface Props{
    key:number;
}
export default function GameCardSkeleton({key}:Props) {
  return (
    <Card key={key} width='300px' borderRadius={10} overflow="hidden">
        <Skeleton height="200px" />
        <CardBody>
            <SkeletonText />
        </CardBody>
    </Card>
  )
}
