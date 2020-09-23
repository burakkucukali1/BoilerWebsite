import { shallowMount } from '@vue/test-utils'
import addBookForm from '@/components/ContactForm.vue'


describe('ContactForm', () => {
    it('renders a div', () => {
      const wrapper = shallowMount(addBookForm)
      expect(wrapper.contains('div')).toBe(true)
    })
  })