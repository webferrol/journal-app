import { useCallback, useEffect, useMemo, useState } from 'react'

export function useForm (initialFormControlsValue = {}, initialFormControlsValidation = {}) {
  const [formControls, setFormControls] = useState(initialFormControlsValue)
  const [formControlsValidation, setFormControlsValidation] = useState(initialFormControlsValidation)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormControls({
      ...formControls,
      [name]: value
    })
  }

  const isValidForm = useMemo(() => {
    for (const property in formControlsValidation) {
      if (formControlsValidation[property]) return false
    }
    return true
  }, [formControlsValidation])

  const createFieldFormControlsValidation = useCallback(() => {
    const fields = {}
    for (const property in initialFormControlsValidation) {
      const { fn, message } = initialFormControlsValidation[property]
      fields[`${property}Valid`] = (fn(formControls[property])) ? message : ''
    }
    setFormControlsValidation(fields)
  }, [initialFormControlsValidation, formControls])

  useEffect(
    () => {
      createFieldFormControlsValidation()
    },
    [createFieldFormControlsValidation, formControls]
  )

  const reset = () => {
    setFormControls(initialFormControlsValue)
  }

  return {
    ...formControls,
    ...formControlsValidation,
    handleChange,
    isValidForm,
    reset
  }
}
