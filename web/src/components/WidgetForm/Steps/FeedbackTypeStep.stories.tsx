import { Popover } from '@headlessui/react'
import { Meta, StoryObj } from '@storybook/react'
import { FeedbackTypeStep } from './FeedbackTypeStep'

export default {
    title: 'Widget UI/FeedbackTypeStep',
    component: FeedbackTypeStep,
    decorators: [
        (Story) => {
            return (
                <Popover>
                    <Popover.Panel static>
                        <div className='bg-zinc-900 relative p-4 rounded-lg flex flex-col items-center w-96'>
                            {Story()}
                        </div>
                    </Popover.Panel>
                </Popover>
            )
        }
    ]
} as Meta

export const Default: StoryObj = {}