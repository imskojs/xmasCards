import { shallowMount } from '@vue/test-utils'
import MessageList from '@/components/MessageList.vue'
import { $globalData } from '@/globalData'

global.alert = () => true

describe('MessageList.vue', () => {
  const wrapper = shallowMount(MessageList, {
    mocks: { $globalData }
  })

  it('Renders list of past sent messages', () => {
    $globalData.data.messages.push(
      {
        friendType: 'friend',
        message: 'We... you know...',
        date: Date.now()
      },
      {
        friendType: 'family',
        message: 'F is for Family',
        date: Date.now() - 1000
      },
      {
        friendType: 'colleage',
        message: 'You gotta be my colleage',
        date: Date.now() - 2000
      }
    );
    expect(wrapper.text()).toContain('We... you know...')
    expect(wrapper.text()).toContain('친구')
    expect(wrapper.text()).toContain('F is for Family')
    expect(wrapper.text()).toContain('가족')
    expect(wrapper.text()).toContain('You gotta be my colleage')
    expect(wrapper.text()).toContain('동료')
  })

})
