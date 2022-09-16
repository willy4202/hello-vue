<template>마우스 위치: {{ x }}, {{ y }}</template>

<script setup>
import { useMouse } from "@/plugins/mouseTracker";

const { x, y } = useMouse();
</script>
