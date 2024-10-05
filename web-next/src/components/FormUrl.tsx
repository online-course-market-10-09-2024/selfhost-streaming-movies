"use client"

import { useState } from "react"

export default function FormAddUrl(): JSX.Element {
  const [inputUrl, setInputUrl] = useState<string>("Add Youtube Url")

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputUrl(event.target.value)
  }

  return (
    <form className="flex flex-col gap-y-5 p-6 bg-white shadow-md rounded-md">
      <div className="mx-auto flex gap-x-5 items-center">
        <input 
          className="border-2 border-gray-300 rounded-md px-4 py-2 w-80 focus:outline-none focus:ring-2 focus:ring-blue-500" 
          type="text" 
          value={inputUrl} 
          onChange={handleInputChange}
        />
        <button 
          className="px-8 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-300" 
        >
          Add URL
        </button>
      </div>

      <button 
        className="mx-auto px-5 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors duration-300" 
      >
        Start download!
      </button>
    </form>
  )
}