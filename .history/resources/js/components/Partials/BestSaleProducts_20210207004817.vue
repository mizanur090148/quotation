<template>
  <div class="text-center section">
    <h2 class="h2">Custom Calendars</h2>
    <p class="text-lg font-medium text-gray-600 mb-6">
      Roll your own calendars using scoped slots
    </p>
    <!-- <v-calendar
      class="custom-calendar max-w-full"
      :masks="masks"
      :attributes="attributes"
      disable-page-swipe
      is-expanded
    >
      <template v-slot:day-content="{ day, attributes }">
        <div class="flex flex-col h-full z-10 overflow-hidden">
          <span class="day-label text-sm text-gray-900">{{ day.day }}</span>
          <div class="flex-grow overflow-y-auto overflow-x-auto">
            <p
              v-for="(attr, key) in attributes" :key="key"
              class="text-xs leading-tight rounded-sm p-1 mt-0 mb-1"
              :class="attr.customData.class"
            >
              {{ attr.customData.title }}
            </p>
          </div>
        </div>
      </template>
    </v-calendar> -->
    <v-calendar is-expanded />
    <v-calendar
  :attributes='attributes'
  />
  </div>
</template>

<script>
export default {
  data() {
    return {
      // Attributes are supplied as an array
      attributes: [
        // This is a single attribute
        {
          // An optional key can be used for retrieving this attribute later,
          // and will most likely be derived from your data object
          key: Any,
          // Attribute type definitions
          highlight: true,  // Boolean, String, Object
          dot: true,        // Boolean, String, Object
          bar: true,        // Boolean, String, Object
          content: 'red',   // Boolean, String, Object
          popover: { 1 }, // Only objects allowed
          // Your custom data object for later access, if needed
          customData: { 1 },
          // We also need some dates to know where to display the attribute
          // We use a single date here, but it could also be an array of dates,
          //  a date range or a complex date pattern.
          dates: new Date(),
          // You can optionally provide dates to exclude
          excludeDates: null,
          // Think of `order` like `z-index`
          order: 0
        }
      ]
    }
  }
};
</script>

<style scoped>
::-webkit-scrollbar {
  width: 0px;
}
::-webkit-scrollbar-track {
  display: none;
}
 .custom-calendar.vc-container {
  --day-border: 1px solid #b8c2cc;
  --day-border-highlight: 1px solid #b8c2cc;
  --day-width: 90px;
  --day-height: 90px;
  --weekday-bg: #f8fafc;
  --weekday-border: 1px solid #eaeaea;
  border-radius: 0;
  width: 100%;
  & .vc-header {
    background-color: #f1f5f8;
    padding: 10px 0;
  }
  & .vc-weeks {
    padding: 0;
  }
  & .vc-weekday {
    background-color: var(--weekday-bg);
    border-bottom: var(--weekday-border);
    border-top: var(--weekday-border);
    padding: 5px 0;
  }
  & .vc-day {
    padding: 0 5px 3px 5px;
    text-align: left;
    height: var(--day-height);
    min-width: var(--day-width);
    background-color: white;
    &.weekday-1,
    &.weekday-7 {
      background-color: #eff8ff;
    }
    &:not(.on-bottom) {
      border-bottom: var(--day-border);
      &.weekday-1 {
        border-bottom: var(--day-border-highlight);
      }
    }
    &:not(.on-right) {
      border-right: var(--day-border);
    }
  }
  & .vc-day-dots {
    margin-bottom: 5px;
  }
}
</style>