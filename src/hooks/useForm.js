import { useState } from 'react'

export function useForm (intialControlValue = {}) {
  const [formControls, setFormControls] = useState(intialControlValue)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormControls({
      ...formControls,
      [name]: value
    })
  }

  const reset = () => {
    setFormControls(intialControlValue)
  }

  return {
    ...formControls,
    handleChange,
    reset
  }
}
