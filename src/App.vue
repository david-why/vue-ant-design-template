<script setup lang="ts">
import type { ItemType } from 'ant-design-vue'
import { computed, h, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { routes } from './router'
const router = useRouter()
const route = useRoute()

const menuItems = ref<ItemType[]>(
  routes.map(({ path, name, icon }) => ({ key: path, label: name, icon: h(icon) }))
)
const menuCollapsed = ref(true)
const menuSelected = computed({
  get: () => [route.path],
  set: ([value]) => router.push(value)
})
</script>

<template>
  <ALayout style="min-height: 100vh">
    <ALayoutHeader style="height: 54px; line-height: 54px">
      <ASpace style="color: #fff; font-size: 18px; font-weight: bold">
        <WebsiteIcon></WebsiteIcon>
        <span>Website Title</span>
      </ASpace>
    </ALayoutHeader>
    <ALayoutContent>
      <ALayout style="min-height: 100vh">
        <ALayoutSider collapsible v-model:collapsed="menuCollapsed" :collapsed-width="60">
          <AMenu theme="dark" v-model:selected-keys="menuSelected" :items="menuItems"></AMenu>
        </ALayoutSider>
        <ALayoutContent>
          <div style="margin: 16px; background: #fff; padding: 16px; min-height: 30vh">
            <RouterView></RouterView>
          </div>
        </ALayoutContent>
      </ALayout>
    </ALayoutContent>
  </ALayout>
</template>
