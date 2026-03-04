<script setup lang="ts">
type FaqItem = {
  question: string
  answer: string
}

const props = defineProps<{
  items: FaqItem[]
  single?: boolean
}>()

const detailsRefs = ref<HTMLDetailsElement[]>([])

function onToggle(toggledIndex: number) {
  if (!props.single) return
  const toggledEl = detailsRefs.value[toggledIndex]
  if (!toggledEl?.open) return

  detailsRefs.value.forEach((el, i) => {
    if (i !== toggledIndex) el.open = false
  })
}
</script>

<template>
  <div class="space-y-4">
    <details
        v-for="(item, index) in items"
        :key="`${item.question}-${index}`"
        :ref="(el) => { if (el) detailsRefs[index] = el as HTMLDetailsElement }"
        class="group overflow-hidden rounded-xl border border-gray-200 bg-white transition-colors hover:border-gray-300"
        @toggle="onToggle(index)"
    >
      <summary
          class="flex cursor-pointer list-none items-center justify-between gap-4 px-4 py-4 text-left text-base font-medium text-gray-900 outline-none transition-colors marker:content-none hover:bg-gray-50 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 select-none"
      >
        <span>{{ item.question }}</span>
        <svg
            class="h-5 w-5 shrink-0 text-gray-500 transition-transform duration-200 group-open:rotate-180"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
        >
          <path
              d="M5 7.5L10 12.5L15 7.5"
              stroke="currentColor"
              stroke-width="1.75"
              stroke-linecap="round"
              stroke-linejoin="round"
          />
        </svg>
      </summary>

      <div class="px-4 pb-4 pt-0 text-sm leading-6 text-gray-600">
        {{ item.answer }}
      </div>
    </details>
  </div>
</template>
