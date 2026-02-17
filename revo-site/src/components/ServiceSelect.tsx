import Dropdown from "react-dropdown"
import "react-dropdown/style.css"
import type { Dispatch, SetStateAction } from "react"

type FormState = {
  interest?: string
}

interface ServiceSelectProps {
  form: FormState
  setForm: Dispatch<SetStateAction<FormState>>
}

const options = [
  "Cold Calling Ops",
  "SMS Ops",
  "Hybrid Ops",
  "Not sure yet",
]

export default function ServiceSelect({ form, setForm }: ServiceSelectProps) {
  return (
      <Dropdown
        options={options}
        value={form.interest}
        onChange={(opt) =>
          setForm({ ...form, interest: opt.value })
        }
        placeholder="Select one…"
        className="dropdown"
        controlClassName="dropdown-control"
        menuClassName="dropdown-menu"
        arrowClassName="dropdown-arrow"
      />
  )
}
