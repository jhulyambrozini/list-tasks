import * as enums from '../utils/enums/Tasks'

class TaskClass {
  title: string
  priority: enums.Priority
  status: enums.Status
  desc: string
  id: number

  constructor(
    title: string,
    priority: enums.Priority,
    status: enums.Status,
    desc: string,
    id: number
  ) {
    this.title = title
    this.priority = priority
    this.status = status
    this.desc = desc
    this.id = id
  }
}

export default TaskClass
