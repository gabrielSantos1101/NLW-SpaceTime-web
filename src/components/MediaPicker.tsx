'use client'
//permite o uso de JS no client da página

import { ChangeEvent, useState } from "react"

export function MediaPicker() {

  const [preview, setPreview] = useState<string | null>(null)

  function onFileSelected(event: ChangeEvent<HTMLInputElement>) {
    const { files } = event.target

    if (!files) {
      return
    }

    const previewURL = URL.createObjectURL(files[0])
    setPreview(previewURL)
  }

  return (
    <>
      <input
        onChange={onFileSelected}
        type="file"
        name="coverUrl"
        id="media"
        className="invisible h-0 w-0" />

      {preview && (
        <img src={preview} 
        className="w-full aspect-video rounded-lg object-cover" />
      )}
    </>
  )
}