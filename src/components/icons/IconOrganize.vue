<template functional>
  <svg
    stroke="currentColor"
    :fill="props.color"
    stroke-width="0"
    viewBox="0 0 17 16"
    :height="props.size"
    :width="props.size"
    xmlns="http://www.w3.org/2000/svg"
    role="presentation"
  >
    <path
      d="M14.3877 3.28125H5.9502C5.67363 3.28125 5.4502 3.50469 5.4502 3.78125V7.46875H1.7627C1.48613 7.46875 1.2627 7.69219 1.2627 7.96875V12.2188C1.2627 12.4953 1.48613 12.7188 1.7627 12.7188H10.2002C10.4768 12.7188 10.7002 12.4953 10.7002 12.2188V8.53125H14.3877C14.6643 8.53125 14.8877 8.30781 14.8877 8.03125V3.78125C14.8877 3.50469 14.6643 3.28125 14.3877 3.28125ZM6.5127 4.34375H9.6377V7.46875H6.5127V4.34375ZM5.4502 11.6562H2.3252V8.53125H5.4502V11.6562ZM9.6377 11.6562H6.5127V8.53125H9.6377V11.6562ZM13.8252 7.46875H10.7002V4.34375H13.8252V7.46875Z"
    />
  </svg>
</template>

<script>
import iconMixin from '@/mixins/iconMixin'
export default {
  mixins: [iconMixin],
}
</script>
