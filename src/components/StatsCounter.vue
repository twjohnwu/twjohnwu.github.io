<script setup lang="ts">
import { ref, onMounted, useTemplateRef } from 'vue';
import { frameValue } from '../lib/countup';

const props = defineProps<{ value: number; suffix?: string; durationMs?: number }>();
const display = ref(0);
const root = useTemplateRef<HTMLElement>('root');

onMounted(() => {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduced || !root.value) { display.value = props.value; return; }
  const duration = props.durationMs ?? 800;
  const observer = new IntersectionObserver((entries) => {
    if (!entries[0].isIntersecting) return;
    observer.disconnect();
    const t0 = performance.now();
    function tick(now: number) {
      const p = Math.min(1, (now - t0) / duration);
      display.value = frameValue(0, props.value, p);
      if (p < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }, { threshold: 0.4 });
  observer.observe(root.value);
});
</script>

<template>
  <span ref="root">{{ display.toLocaleString() }}{{ suffix ?? '' }}</span>
</template>
