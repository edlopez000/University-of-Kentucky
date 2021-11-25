import React from 'react'
import Task from './Task'

export default {
    title: 'Task',
    component: Task,
    argTypes: { 
        onArchiveTask: {action: "archiveTask"},
        onPinTask: {action: 'pinTask'}
    }
}

const Template = args => <Task {...args} />

export const Default = Template.bind({})
Default.args = {
    task: {
        id: 1,
        title: 'Test Task',
        state: 'TASK_INBOX',
        updateAt: new Date(2021, 0, 1, 9, 0)
    }
}

export const Pinned = Template.bind({})
Pinned.args = {
    task: {
        ...Default.args.task,
        state: 'TASK_PINNED'
    }
}

export const Archive = Template.bind({})
Archive.args = {
    task: {
        ...Default.args.task,
        state: 'TASK_ARCHIVED'
    }

}