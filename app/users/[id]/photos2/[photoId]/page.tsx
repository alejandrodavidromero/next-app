import React from 'react'

interface Props {
    params: { id: number; photoId: number };
  }

const PhotosNumber = ({ params: { id, photoId } }: Props) => {
  return (
    <div>photos {id}-{photoId}</div>
  )
}

export default PhotosNumber