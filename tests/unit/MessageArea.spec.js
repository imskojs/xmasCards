import { shallowMount } from '@vue/test-utils'
import MessageArea from '@/components/MessageArea.vue'
import { $globalData } from '@/globalData'

global.alert = () => true

describe('MessageArea.vue', () => {
  const wrapper = shallowMount(MessageArea, {
    mocks: { $globalData }
  })

  it('Renders textarea and button', () => {
    expect(wrapper.find('textarea').exists()).toBe(true);
    expect(wrapper.find('button').exists()).toBe(true);
  })

  it('When there are inputs in textarea, it is saved in $globalData.form.message', () => {
    wrapper.find('textarea').setValue('We are the champions!');
    expect($globalData.form.message).toContain('We are the champions!');
  })

  it('When a button is clicked it calls "send" method', () => {

    let mockedSend = jest.fn();
    let realSend = MessageArea.methods.send;
    MessageArea.methods.send = mockedSend;
    let oneTimeWrapper = shallowMount(MessageArea, { mocks: { $globalData } })

    oneTimeWrapper.find('button').trigger('click');
    expect(mockedSend).toHaveBeenCalled()
    MessageArea.methods.send = realSend;
  })

  it('send method do not prepend message to $globalData.data.messages if at least one field is missing', () => {
    const wrap = shallowMount(MessageArea, { mocks: { $globalData } });
    wrap.find('textarea').setValue('We are the champions!')
    wrap.find('button').trigger('click')
    expect($globalData.data.messages.length).toBe(0)

    wrap.find('textarea').setValue('')
    $globalData.form.friendType = 'friend'
    wrap.find('button').trigger('click')
    expect($globalData.data.messages.length).toBe(0)

  })

  it('send method prepends messages array when all fields are filled', () => {
    const wrap = shallowMount(MessageArea, { mocks: { $globalData } });
    wrap.find('textarea').setValue('We are the champions!')
    $globalData.form.friendType = 'friend'
    wrap.find('button').trigger('click')
    expect($globalData.data.messages.length).toBe(1)
  })

  it('send method clears form after successful send', () => {
    const wrap = shallowMount(MessageArea, { mocks: { $globalData } });
    wrap.find('textarea').setValue('We are the champions!')
    $globalData.form.friendType = 'friend'
    wrap.find('button').trigger('click')
    expect($globalData.form.friendType).toBe('')
    expect($globalData.form.message).toBe('')
    expect($globalData.form.date).toBe(null)
  })


})
