import { shallowMount } from '@vue/test-utils'
import SelectCategory from '@/components/SelectCategory.vue'
import { $globalData } from '@/globalData'

describe('SelectCategory.vue', () => {
  const wrapper = shallowMount(SelectCategory, {
    mocks: { $globalData }
  })

  it('Renders 3 categories 동료 친구 가족', () => {
    expect(wrapper.text()).toContain('동료')
    expect(wrapper.text()).toContain('친구')
    expect(wrapper.text()).toContain('가족')
  })

  it('when category is selected, the value is added to $globalData.form.friendType', () => {
    const options = wrapper.find('select').findAll('option');

    options.at(1).setSelected()
    expect($globalData.form.friendType).toContain('colleage')

    options.at(2).setSelected()
    expect($globalData.form.friendType).toContain('friend')

    options.at(3).setSelected()
    expect($globalData.form.friendType).toContain('family')

  })


})
