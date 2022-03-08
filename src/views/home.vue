<template>
  <el-form ref="formRef" :model="form" label-width="120px">
    <el-form-item 
        label="时间">
        <el-time-picker
            format="HH:mm"
            v-model="form.timeDuration"
            is-range
            range-separator="To"
            start-placeholder="Start time"
            end-placeholder="End time"
            >
        </el-time-picker>
    </el-form-item>
    <el-form-item label="时长">
        <el-alert 
            :title="duration" 
            type="success" 
            :closable="false"/>
    </el-form-item>
  </el-form>
</template>

<script lang="ts" setup>
import { reactive, computed } from 'vue'
import dayjs from 'dayjs'

const today = dayjs(new Date())
const [Y, M, D] = [today.year(), today.month(), today.day()]

const form = reactive({
    timeDuration: [new Date(Y, M, D, 10, 0, 0), new Date(Y, M, D, 20, 0, 0)]
})

const duration = computed(() => {
    const [start, end] = form.timeDuration
    return dayjs(end).diff(dayjs(start), 'hours') + ''
})
</script>
